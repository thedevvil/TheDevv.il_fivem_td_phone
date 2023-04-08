QB.Phone.Settings = {};
QB.Phone.Settings.Background = "default-qbcore";
QB.Phone.Settings.OpenedTab = null;
QB.Phone.Settings.Backgrounds = {
    'default-qbcore': {
        label: "Standard QBCore"
    }
};

var PressedBackground = null;
var PressedBackgroundObject = null;
var OldBackground = null;
var IsChecked = null;

$(document).on('click', '.settings-app-tab', function(e){
    e.preventDefault();
    var PressedTab = $(this).data("settingstab");

    if (PressedTab == "background") {
        QB.Phone.Animations.TopSlideDown(".settings-"+PressedTab+"-tab", 200, 0);
        QB.Phone.Settings.OpenedTab = PressedTab;
    } else if (PressedTab == "profilepicture") {
        QB.Phone.Animations.TopSlideDown(".settings-"+PressedTab+"-tab", 200, 0);
        QB.Phone.Settings.OpenedTab = PressedTab;
    } else if (PressedTab == "numberrecognition") {
        var checkBoxes = $(".numberrec-box");
        QB.Phone.Data.AnonymousCall = !checkBoxes.prop("checked");
        checkBoxes.prop("checked", QB.Phone.Data.AnonymousCall);

        if (!QB.Phone.Data.AnonymousCall) {
            $("#numberrecognition > p").html('Kapalı');
        } else {
            $("#numberrecognition > p").html('Açık');
        } 
    } else if (PressedTab == "ucakmodu") {
        let test 
        var checkBoxes2 = $(".numberrec-box2");
         test = !checkBoxes2.prop("checked");
        checkBoxes2.prop("checked", test);
        let ucakmodu = true
        let ucakmodu2 = false
        if (!test) {
            $.post('https://qb-phone/ucakmodu2', JSON.stringify({
                ucakmodu2
            }));
            $("#ucakmodu > p").html('Kapalı');
        } else {
            $.post('https://qb-phone/ucakmodu', JSON.stringify({
                ucakmodu
            }));
            $("#ucakmodu > p").html('Açık');
        }
    }
});

$(document).on('click', '#accept-background', function(e){
    e.preventDefault();
    var hasCustomBackground = QB.Phone.Functions.IsBackgroundCustom();

    if (hasCustomBackground === false) {
        QB.Phone.Notifications.Add("fas fa-paint-brush", "Ayarlar", QB.Phone.Settings.Backgrounds[QB.Phone.Settings.Background].label+" ayarlandı!")
        QB.Phone.Animations.TopSlideUp(".settings-"+QB.Phone.Settings.OpenedTab+"-tab", 200, -100);
        $(".phone-background").css({"background-image":"url('/html/img/backgrounds/"+QB.Phone.Settings.Background+".png')"})
    } else {
        QB.Phone.Notifications.Add("fas fa-paint-brush", "Ayarlar", "Arka plan ayarla!")
        QB.Phone.Animations.TopSlideUp(".settings-"+QB.Phone.Settings.OpenedTab+"-tab", 200, -100);
        $(".phone-background").css({"background-image":"url('"+QB.Phone.Settings.Background+"')"});
    }

    $.post('https://qb-phone/SetBackground', JSON.stringify({
        background: QB.Phone.Settings.Background,
    }))
});

QB.Phone.Functions.LoadMetaData = function(MetaData) {
    if (MetaData.background !== null && MetaData.background !== undefined) {
        QB.Phone.Settings.Background = MetaData.background;
    } else {
        QB.Phone.Settings.Background = "default-qbcore";
    }

    var hasCustomBackground = QB.Phone.Functions.IsBackgroundCustom();

    if (!hasCustomBackground) {
        $(".phone-call-app").css({"background-image":"url('/html/img/backgrounds/"+QB.Phone.Settings.Background+".png')"})
        $(".phone-background").css({"background-image":"url('/html/img/backgrounds/"+QB.Phone.Settings.Background+".png')"})
    } else {
        $(".phone-background").css({"background-image":"url('"+QB.Phone.Settings.Background+"')"});
        $(".phone-call-app").css({"background-image":"url('"+QB.Phone.Settings.Background+"')"});

    }

    if (MetaData.profilepicture == "default") {
        $("[data-settingstab='profilepicture']").find('.settings-tab-icon').html('<img src="./img/default.png">');
        
    } else {
        $("[data-settingstab='profilepicture']").find('.settings-tab-icon').html('<img src="'+MetaData.profilepicture+'">');
    }
}

$(document).on('click', '#cancel-background', function(e){
    e.preventDefault();
    QB.Phone.Animations.TopSlideUp(".settings-"+QB.Phone.Settings.OpenedTab+"-tab", 200, -100);
});

QB.Phone.Functions.IsBackgroundCustom = function() {
    var retval = true;
    $.each(QB.Phone.Settings.Backgrounds, function(i, background){
        if (QB.Phone.Settings.Background == i) {
            retval = false;
        }
    });
    return retval
}

$(document).on('click', '.background-option', function(e){
    e.preventDefault();
    PressedBackground = $(this).data('background');
    PressedBackgroundObject = this;
    OldBackground = $(this).parent().find('.background-option-current');
    IsChecked = $(this).find('.background-option-current');

    if (IsChecked.length === 0) {
        if (PressedBackground != "custom-background") {
            QB.Phone.Settings.Background = PressedBackground;
            $(OldBackground).fadeOut(50, function(){
                $(OldBackground).remove();
            });
            $(PressedBackgroundObject).append('<div class="background-option-current"><i class="fas fa-check-circle"></i></div>');
        } else {
            QB.Phone.Animations.TopSlideDown(".background-custom", 200, 13);
        }
    }
});

$(document).on('click', '#accept-custom-background', function(e){
    e.preventDefault();

    QB.Phone.Settings.Background = $(".custom-background-input").val();
    $(OldBackground).fadeOut(50, function(){
        $(OldBackground).remove();
    });
    $(PressedBackgroundObject).append('<div class="background-option-current"><i class="fas fa-check-circle"></i></div>');
    QB.Phone.Animations.TopSlideUp(".background-custom", 200, -23);
});

$(document).on('click', '#cancel-custom-background', function(e){
    e.preventDefault();

    QB.Phone.Animations.TopSlideUp(".background-custom", 200, -23);
});

// Profile Picture

var PressedProfilePicture = null;
var PressedProfilePictureObject = null;
var OldProfilePicture = null;
var ProfilePictureIsChecked = null;

$(document).on('click', '#accept-profilepicture', function(e){
    e.preventDefault();
    var ProfilePicture = QB.Phone.Data.MetaData.profilepicture;
    if (ProfilePicture === "default") {
        QB.Phone.Notifications.Add("fas fa-paint-brush", "Ayarlar", "Varsayılan avatar!")
        QB.Phone.Animations.TopSlideUp(".settings-"+QB.Phone.Settings.OpenedTab+"-tab", 200, -100);
        $("[data-settingstab='profilepicture']").find('.settings-tab-icon').html('<img src="./img/default.png">');
    } else {
        QB.Phone.Notifications.Add("fas fa-paint-brush", "SettiAyarlarngs", "Avatar ayarlandı!")
        QB.Phone.Animations.TopSlideUp(".settings-"+QB.Phone.Settings.OpenedTab+"-tab", 200, -100);
        $("[data-settingstab='profilepicture']").find('.settings-tab-icon').html('<img src="'+ProfilePicture+'">');
    }
    $.post('https://qb-phone/UpdateProfilePicture', JSON.stringify({
        profilepicture: ProfilePicture,
    }));
});

$(document).on('click', '#accept-custom-profilepicture', function(e){
    e.preventDefault();
    QB.Phone.Data.MetaData.profilepicture = $(".custom-profilepicture-input").val();
    $(OldProfilePicture).fadeOut(50, function(){
        $(OldProfilePicture).remove();
    });
    $(PressedProfilePictureObject).append('<div class="profilepicture-option-current"><i class="fas fa-check-circle"></i></div>');
    QB.Phone.Animations.TopSlideUp(".profilepicture-custom", 200, -23);
});

//takeprofile-pic
$(document).on('click', '.takeprofile-pic', function(e){
    e.preventDefault();
    $.post('https://qb-phone/TakePhoto', JSON.stringify({}),function(url){
        if(url){
            let newUrl = url.replace("\"", '')
            let lastUrl = newUrl.replace("\"", '')
            QB.Phone.Data.MetaData.profilepicture = lastUrl;
            $(OldProfilePicture).fadeOut(50, function(){
                $(OldProfilePicture).remove();
            });
        }
    })
    QB.Phone.Functions.Close();
});    

$(document).on('click', '.profilepicture-option', function(e){
    e.preventDefault();
    PressedProfilePicture = $(this).data('profilepicture');
    PressedProfilePictureObject = this;
    OldProfilePicture = $(this).parent().find('.profilepicture-option-current');
    ProfilePictureIsChecked = $(this).find('.profilepicture-option-current');
    if (ProfilePictureIsChecked.length === 0) {
        if (PressedProfilePicture != "custom-profilepicture") {
            QB.Phone.Data.MetaData.profilepicture = PressedProfilePicture
            $(OldProfilePicture).fadeOut(50, function(){
                $(OldProfilePicture).remove();
            });
            $(PressedProfilePictureObject).append('<div class="profilepicture-option-current"><i class="fas fa-check-circle"></i></div>');
        } else {
            QB.Phone.Animations.TopSlideDown(".profilepicture-custom", 200, 13);
        }
    }
});

$(document).on('click', '#cancel-profilepicture', function(e){
    e.preventDefault();
    QB.Phone.Animations.TopSlideUp(".settings-"+QB.Phone.Settings.OpenedTab+"-tab", 200, -100);
});


$(document).on('click', '#cancel-custom-profilepicture', function(e){
    e.preventDefault();
    QB.Phone.Animations.TopSlideUp(".profilepicture-custom", 200, -23);
});
