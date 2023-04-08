Config = Config or {}
Config.BillingCommissions = { -- This is a percentage (0.10) == 10%
    mechanic = 0.10
}
Config.RepeatTimeout = 2000
Config.CallRepeats = 10
Config.OpenPhone = 288
Config.TweetDuration = 12 
Config.PhoneApplications = {
    ["details"] = {
        app = "details",
        color = "#5db9fc",
        color2 = "#008eff",
        icon = "fas fa-wallet",
        tooltipText = "Cüzdan",
        tooltipPos = "top",
        style = "font-size: 3.3vh";
        job = false,
        blockedjobs = {},
        slot = 1,
        Alerts = 0,
    },
    ["phone"] = {
        app = "phone",
        color = "#51da80",
        color2 = "#009436",
        icon = "fa fa-phone-volume",
        style = "font-size: 3.3vh";
        tooltipText = "Telefon",
        tooltipPos = "top",
        job = false,
        blockedjobs = {},
        slot = 2,
        Alerts = 0,
    },
    ["whatsapp"] = {
        app = "whatsapp",
        color = "#8bfc76",
        color2 = "#18d016",
        icon = "fab fa-whatsapp",
        tooltipText = "Whatsapp",
        tooltipPos = "top",
        style = "font-size: 3.3vh";
        job = false,
        blockedjobs = {},
        slot = 3,
        Alerts = 0,
    },
    ["twitter"] = {
        app = "twitter",
        color = "#1eaae4",
        color2 = "#25a6dc",
        icon = "fab fa-twitter",
        tooltipText = "Twitter",
        style = "font-size: 3vh";
        tooltipPos = "top",
        job = false,
        blockedjobs = {},
        slot = 4,
        Alerts = 0,
    },
    ["settings"] = {
        app = "settings",
        color = "#636e72",
        color2 = "#4c5558",
        icon = "fa fa-cog",
        tooltipText = "Ayarlar",
        tooltipPos = "top",
        style = "padding-right: .08vh; font-size: 3vh";
        job = false,
        blockedjobs = {},
        slot = 5,
        Alerts = 0,
    },
    ["garage"] = {
        app = "garage",
        color = "#ff8077",
        color2 = "#bb345d",
        icon = "fas fa-car",
        tooltipText = "Araçlarım",
        style = "font-size: 3vh";
        job = false,
        blockedjobs = {},
        slot = 6,
        Alerts = 0,
    },
    ["mail"] = {
        app = "mail",
        color = "#009ee5",
        color2 = "#87d9e7",
        icon = "fas fa-envelope",
        tooltipText = "Mail",
        style = "font-size: 3vh";
        job = false,
        blockedjobs = {},
        slot = 7,
        Alerts = 0,
    },
    ["advert"] = {
        app = "advert",
        color = "#ffc900",
        color2 = "#f7c816",
        icon = "fas fa-bullhorn",
        tooltipText = "Sahibinden",
        style = "font-size: 2.5vh";
        job = false,
        blockedjobs = {},
        slot = 8,
        Alerts = 0,
    },
    ["wenmo"] = {
        app = "wenmo",
        color = "#da8936",
        color2 = "#f3935b",
        icon = "fas fa-university",
        tooltipText = "Banka",
        style = "font-size: 2.5vh";
        job = false,
        blockedjobs = {},
        slot = 17,
        Alerts = 0,
    },
    ["bank"] = {
        app = "bank",
        color = "#9c88ff",
        color2 = "#8070d5",
        icon = "fas fa-file-invoice",
        tooltipText = "Faturalar",
        style = "font-size: 2.5vh";
        job = false,
        blockedjobs = {},
        slot = 18,
        Alerts = 0,
    },
    ["crypto"] = {
        app = "crypto",
        color = "#004682",
        icon = "fas fa-coins",
        tooltipText = "Crypto",
        job = false,
        blockedjobs = {},
        slot = 10,
        Alerts = 0,
    },
    -- ["racing"] = {
    --     app = "racing",
    --     color = "#353b48",
    --     icon = "fas fa-flag-checkered",
    --     tooltipText = "Yarış",
    --     job = false,
    --     blockedjobs = {},
    --     slot = 20,
    --     Alerts = 0,
    -- },
    ["houses"] = {
        app = "houses",
        color = "#42a042",
        color2 = "#3f9e4a",
        icon = "fas fa-house-user",
        tooltipText = "Evlerim",
        style = "font-size: 3vh";
        job = false,
        blockedjobs = {},
        slot = 11,
        Alerts = 0,
    },
    -- ["meos"] = {
    --     app = "meos",
    --     color = "#004682",
    --     icon = "fas fa-ad",
    --     tooltipText = "MDT",
    --     job = "police",
    --     blockedjobs = {},
    --     slot = 13,
    --     Alerts = 0,
    -- },
    ["lawyers"] = {
        app = "lawyers",
        color = "#26d4ce",
        color2 = "#1e9c98",
        icon = "fas fa-briefcase",
        tooltipText = "Hizmetler",
        tooltipPos = "bottom",
        style = "font-size: 2.5vh";
        job = false,
        blockedjobs = {},
        slot = 12,
        Alerts = 0,
    },
    ["gallery"] = {
        app = "gallery",
        color = "#189ec0",
        color2 = "#14819c",
        icon = "fas fa-image",
        tooltipText = "Galeri",
        tooltipPos = "bottom",
        style = "font-size: 2.5vh";
        job = false,
        blockedjobs = {},
        slot = 15,
        Alerts = 0,
    },
    ["jobcenter"] = {
        app = "jobcenter",
        color = "#e02fca",
        color2 = "#e461c1",
        icon = "fas fa-id-badge",
        tooltipText = "Kariyer",
        style = "font-size: 2.7vh";
        job = false,
        blockedjobs = {},
        slot = 16,
        Alerts = 0,
    },
    ["calculator"] = {
        app = "calculator",
        color = "#c94001",
        color2 = "#9c3100",
        icon = "fas fa-calculator",
        tooltipText = "Hesap Makinası",
        tooltipPos = "bottom",
        style = "font-size: 2.5vh";
        job = false,
        blockedjobs = {},
        slot = 19,
        Alerts = 0,
    },
    ["racing"] = {
        app = "racing",
        color = "#0f22ab",
        color2 = "#1b3863",
        icon = "fas fa-flag-checkered",
        tooltipText = "Yarış",
        job = false,
        blockedjobs = {},
        slot = 20,
        Alerts = 0,
    },

}
Config.MaxSlots = 20

Config.StoreApps = {
    ["territory"] = {
        app = "territory",
        color = "#353b48",
        icon = "fas fa-globe-europe",
        tooltipText = "Territorium",
        tooltipPos = "right",
        style = "";
        job = false,
        blockedjobs = {},
        slot = 15,
        Alerts = 0,
        password = true,
        creator = "QBCore",
        title = "Territory",
    },
}

Config.JobCenter = {
    [1] = {
        job = "trucker",
        label = "Balık Restoranı",
        Coords = {-1820.83, -1220.05},
    },
    [2] = {
        job = "taxi",
        label = "Getir - Götür",
        Coords = {-84.36, 234.92},
    },
    [3] = {
        job = "tow",
        label = "Odun Fabrikası",
        Coords = {-568.15, 5253.44},
    },
    [4] = {
        job = "reporter",
        label = "Avcılık",
        Coords = {-698.16, 5435.38},
    },
    [5] = {
        job = "garbage",
        label = "Taco",
        Coords = {13.74, -1602.64},
    },
}