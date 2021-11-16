let scrollAnimations = new scrollListener();

//Gets dom elements
let       background = document.getElementsByClassName("background");
let           titles = document.getElementsByClassName("titles");
let            lines = document.getElementsByClassName("all_lines_container");
let  lines_container = document.getElementsByClassName("section1__subcontainer-bottom");
//Configures the ui rules that apply to each dom elements

scrollAnimations.topElementClass = "section1";
scrollAnimations.ui_rules_configurations = {
    "lines":[
        {"property_type":"class","direction":"down","from":0.1,"to":0.3,
            "add":["disappear_title"],
            "remove":["appear_title"]
        }
    ],
    "lines_container":[
        {"property_type":"class","direction":"down","from":0.3,"to":0.5,
            "add":["disappear_title"],
            "remove":["appear_title"]
        },
        {"property_type":"linear_transform","direction":"down","from":0,"to":0.2,
         "funtion":"translateY","unit":"px","min":"0","max":"-200",
         "class":"scroll_translateY"
        }
    ],
    "titles":[
        {"property_type":"class","direction":"down","from":0,"to":0.2,
            "add":["disappear_title"],
            "remove":["appear_title"]
        }
        
    ],
    "background":[
        {"property_type":"color","initial_value":"#171717","final_value":"#160637","from":0,"to":1},
        {"property_type":"color","initial_value":"#160637","final_value":"#160637","from":1,"to":2},
    ]
};
scrollAnimations.component_configurations = [
    {"component_list":background, "configuration_key":"background"},
    {"component_list":titles, "configuration_key":"titles"},
    {"component_list":lines, "configuration_key":"lines"},
    {"component_list":lines_container, "configuration_key":"lines_container"},
];
scrollAnimations.setScrollEvent("scroll-container");