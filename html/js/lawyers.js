SetupLawyers = function(data) {
    $(".lawyers-list").html("");
    var lawyers = [];
    var realestate = [];
    var mechanic = [];
    var taxi = [];
    var police = [];
    var ambulance = [];
    var antika = [];

    if (data.length > 0) {

        $.each(data, function(i, lawyer) {
            if (lawyer.typejob == "lawyer") {
                lawyers.push(lawyer);
            }
            if (lawyer.typejob == "realestate") {
                realestate.push(lawyer);
            }
            if (lawyer.typejob == "mechanic" || lawyer.typejob == "mechanic2" || lawyer.typejob == "mechanic3" || lawyer.typejob == "mechanic4" || lawyer.typejob == "mechanic5" || lawyer.typejob == "mechanic6") {
                mechanic.push(lawyer);
            }
            if (lawyer.typejob == "taxi") {
                taxi.push(lawyer);
            }
            if (lawyer.typejob == "police") {
                police.push(lawyer);
            }
            if (lawyer.typejob == "ambulance") {
                ambulance.push(lawyer);
            }
        });

        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 190, 27);">Taxi (' + taxi.length + ')</h1>');

        if (taxi.length > 0) {
            $.each(taxi, function(i, lawyer3) {
                var element = '<div class="lawyer-list" id="lawyerid3-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(255, 190, 27);">' + (lawyer3.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer3.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid3-" + i).data('LawyerData', lawyer3);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">Şehirde aktif taksici yok.</div></div>'
            $(".lawyers-list").append(element);
        }

       // $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(155, 15, 120);">Real Estate (' + realestate.length + ')</h1>');

     //   if (realestate.length > 0) {
       //     $.each(realestate, function(i, lawyer1) {
        //        var element = '<div class="lawyer-list" id="lawyerid1-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(155, 15, 120);">' + (lawyer1.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer1.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
       //         $(".lawyers-list").append(element);
      //          $("#lawyerid1-" + i).data('LawyerData', lawyer1);
      //      });
     //   } else {
       //     var element = '<div class="lawyer-list"><div class="no-lawyers">There are no real estate agents available.</div></div>'
       //     $(".lawyers-list").append(element);
      //  }



        $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 204, 102);">Mekanik (' + mechanic.length + ')</h1>');

        if (mechanic.length > 0) {
            $.each(mechanic, function(i, lawyer2) {
                var element = '<div class="lawyer-list" id="lawyerid2-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(0, 204, 102);">' + (lawyer2.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer2.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
                $(".lawyers-list").append(element);
                $("#lawyerid2-" + i).data('LawyerData', lawyer2);
            });
        } else {
            var element = '<div class="lawyer-list"><div class="no-lawyers">Şehirde aktif mekanik yok</div></div>'
            $(".lawyers-list").append(element);
        }


    //     $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 190, 27);">Taxi (' + taxi.length + ')</h1>');

    //    if (taxi.length > 0) {
    //        $.each(taxi, function(i, lawyer3) {
    //            var element = '<div class="lawyer-list" id="lawyerid3-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(255, 190, 27);">' + (lawyer3.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer3.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
    //            $(".lawyers-list").append(element);
    //            $("#lawyerid3-" + i).data('LawyerData', lawyer3);
    //        });
    //    } else {
    //        var element = '<div class="lawyer-list"><div class="no-lawyers">Şehirde aktif taksici yok.</div></div>'
    //        $(".lawyers-list").append(element);
    //    }
        
        //$(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 102, 255);">Police (' + police.length + ')</h1>');

       // if (police.length > 0) {
         //   $.each(police, function(i, lawyer4) {
           //     var element = '<div class="lawyer-list" id="lawyerid4-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(0, 102, 255);">' + (lawyer4.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer4.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
             //   $(".lawyers-list").append(element);
               // $("#lawyerid4-" + i).data('LawyerData', lawyer4);
           // });
      //  } else {
            //var element = '<div class="lawyer-list"><div class="no-lawyers">There is no police available.</div></div>'
          //  $(".lawyers-list").append(element);
       // }
        
        //$(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 0, 0);">Ambulance (' + ambulance.length + ')</h1>');

        // if (ambulance.length > 0) {
         //    $.each(ambulance, function(i, lawyer5) {
           //      var element = '<div class="lawyer-list" id="lawyerid5-' + i + '"> <div class="lawyer-list-firstletter" style="background-color: rgb(255, 0, 0);">' + (lawyer5.name).charAt(0).toUpperCase() + '</div> <div class="lawyer-list-fullname">' + lawyer5.name + '</div> <div class="lawyer-list-call"><i class="fas fa-phone"></i></div> </div>'
           //      $(".lawyers-list").append(element);
             //    $("#lawyerid5-" + i).data('LawyerData', lawyer5);
           //  });
        // } else {
            //var element = '<div class="lawyer-list"><div class="no-lawyers">There is no ems available.</div></div>'
            //$(".lawyers-list").append(element);
       // }
    // } else {
       // $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 204, 102);">Mekanik (' + mechanic.length + ')</h1>');

       // var element = '<div class="lawyer-list"><div class="no-lawyers">Şehirde aktif mekanik yok.</div></div>'
       // $(".lawyers-list").append(element);


       // $(".lawyers-list").append('<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: rgb(42, 137, 214);">Avukat (' + lawyers.length + ')</h1>');

//        var element = '<div class="lawyer-list"><div class="no-lawyers">Şehirde aktif avukat yok.</div></div>'
  //      $(".lawyers-list").append(element);

        //$(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(155, 15, 120);">Real Estate (' + realestate.length + ')</h1>');

      //  var element = '<div class="lawyer-list"><div class="no-lawyers">There are no real estate agents available.</div></div>'
        //$(".lawyers-list").append(element);


        //$(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 190, 27);">Taxi (' + taxi.length + ')</h1>');

        //var element = '<div class="lawyer-list"><div class="no-lawyers">There are no taxis available.</div></div>'
        //$(".lawyers-list").append(element);
        
        //$(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(0, 102, 255);">Police (' + police.length + ')</h1>');

        //var element = '<div class="lawyer-list"><div class="no-lawyers">There are no polices a available.</div></div>'
        //$(".lawyers-list").append(element);
        
       // $(".lawyers-list").append('<br><h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; color:#fff; margin-top:0; width:100%; display:block; background-color: rgb(255, 0, 0);">Ambulance (' + ambulance.length + ')</h1>');

        //var element = '<div class="lawyer-list"><div class="no-lawyers">There are no ambulance personnel a available.</div></div>'
        //$(".lawyers-list").append(element);
    }
}

$(document).on('click', '.lawyer-list-call', function(e){
    e.preventDefault();

    var LawyerData = $(this).parent().data('LawyerData');
    
    var cData = {
        number: LawyerData.phone,
        name: LawyerData.name
    }

    $.post('https://qb-phone/CallContact', JSON.stringify({
        ContactData: cData,
        Anonymous: QB.Phone.Data.AnonymousCall,
    }), function(status){
        if (cData.number !== QB.Phone.Data.PlayerData.charinfo.phone) {
            if (status.IsOnline) {
                if (status.CanCall) {
                    if (!status.InCall) {
                        if (QB.Phone.Data.AnonymousCall) {
                            QB.Phone.Notifications.Add("fas fa-phone", "Telefon", "Gizli bir arama başlattınız");
                        }
                        $(".phone-call-outgoing").css({"display":"block"});
                        $(".phone-call-incoming").css({"display":"none"});
                        $(".phone-call-ongoing").css({"display":"none"});
                        $(".phone-call-outgoing-caller").html(cData.name);
                        QB.Phone.Functions.HeaderTextColor("white", 400);
                        QB.Phone.Animations.TopSlideUp('.phone-application-container', 400, -160);
                        setTimeout(function(){
                            $(".lawyers-app").css({"display":"none"});
                            QB.Phone.Animations.TopSlideDown('.phone-application-container', 400, 0);
                            QB.Phone.Functions.ToggleApp("phone-call", "block");
                        }, 450);
    
                        CallData.name = cData.name;
                        CallData.number = cData.number;
                    
                        QB.Phone.Data.currentApplication = "phone-call";
                    } else {
                        QB.Phone.Notifications.Add("fas fa-phone", "Telefon", "Bir aramanız devam ediyor!");
                    }
                } else {
                    QB.Phone.Notifications.Add("fas fa-phone", "Telefon", "Kişi bir görüşme yapıyor");
                }
            } else {
                QB.Phone.Notifications.Add("fas fa-phone", "Telefon", "Aradığınız kişi müsait değil!");
            }
        } else {
            QB.Phone.Notifications.Add("fas fa-phone", "Telefon", "Kendinize arama yapamazsınız!");
        }
    });
});
