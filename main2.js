let scrollAnimations = new scrollListener();

//Gets dom elements
let              background = document.getElementsByClassName("background");
let                  titles = document.getElementsByClassName("titles");
let                   lines = document.getElementsByClassName("all_lines_container");
// let         lines_container = document.getElementsByClassName("section1__subcontainer-bottom");
let  rocket_video_container = document.getElementsByClassName("rocket_video-container");
let    star_video_container = document.getElementsByClassName("star_video-container");
let         tunel_container = document.getElementsByClassName("tunel_container");
let                 my_name = document.getElementsByClassName("name");
let                   item0 = document.getElementsByClassName("item0");
let                   item1 = document.getElementsByClassName("item1");
let                   item2 = document.getElementsByClassName("item2");
let                   item3 = document.getElementsByClassName("item3");
let          section2_title = document.getElementsByClassName("section2_title");

//Set reference for scroll position 
scrollAnimations.topElementClass = "section1";
//Configures the ui rules that apply to each dom elements
scrollAnimations.ui_rules_configurations = {
    "lines":[
        {"property_type":"class","direction":"down","from":0.4,"to":0.6,
            "add":["disappear_title"],
            "remove":["appear_title"]
        }
    ],
    "lines_container":[
        {"property_type":"class","direction":"down","from":0.3,"to":0.5,
            "add":["disappear_title"],
            "remove":["appear_title"]
        }
    ],
    "tunel_container":[
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":0,"to":0.3},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":0.3,"to":2},
    ],
    "titles":[
        {"property_type":"class","direction":"down","from":0,"to":0.2,
            "add":["disappear_title"],
            "remove":["appear_title"]
        }
    ],
    "background":[
        {"property_type":"color","initial_value":"#171717","final_value":"#160637","from":0,"to":0.5},
        {"property_type":"color","initial_value":"#160637","final_value":"#050141","from":0.5,"to":1.1},
    ],
    "rocket_video-container":[
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":0,"to":0.2},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":1,"from":0.2,"to":1},
        // {"property_type":"linear","property_name":"border-radius","initial_value":0,"final_value":1,"from":0.7,"to":1,"unit":"%"},
    ],
    "star_video_container":[
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":1,"from":0,"to":0.2},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":0.2,"to":1},
    ],
    "my_name":[
        {"property_type":"class","direction":"down","from":0.8,"to":1.1,
            "add":["disappear_left"],
            "remove":["appear_left"]
        }
    ],   
    "item0":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_up0"],
            "remove":["disappear_down0"]
        }
    ],
    "item1":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_up1"],
            "remove":["disappear_down1"]
        }
    ],
    "item2":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_up2"],
            "remove":["disappear_down2"]
        }
    ],
    "item3":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_up3"],
            "remove":["disappear_down3"]
        }
    ],
    "section2_title":[
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":0,"to":0.8},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":1,"from":0.7,"to":1},
    ]
};
scrollAnimations.component_configurations = [
    // {"component_list":background, "configuration_key":"background"},
    {"component_list":titles, "configuration_key":"titles"},
    {"component_list":lines, "configuration_key":"lines"},
    // {"component_list":lines_container, "configuration_key":"lines_container"},
    {"component_list":rocket_video_container, "configuration_key":"rocket_video-container"},
    {"component_list":star_video_container, "configuration_key":"star_video_container"},
    {"component_list":tunel_container, "configuration_key":"tunel_container"},
    {"component_list":my_name, "configuration_key":"my_name"},
    {"component_list":item0, "configuration_key":"item0"},
    {"component_list":item1, "configuration_key":"item1"},
    {"component_list":item2, "configuration_key":"item2"},
    {"component_list":item3, "configuration_key":"item3"},
    {"component_list":section2_title, "configuration_key":"section2_title"},
];
scrollAnimations.setScrollEvent("scroll-container");