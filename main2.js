//Gets dom elements
let scroll_container = [document.querySelector(".scroll-container")];
let           titles = document.getElementsByClassName("titles");
let            lines = document.getElementsByClassName("lineContainer");
let  lines_container = document.getElementsByClassName("section1__subcontainer-bottom");
//Configures the ui rules that apply to each dom elements
let scrollAnimations = new scrollListener();
scrollAnimations.topElementClass = "section1";
scrollAnimations.ui_rules_configurations = {
    "lines":[
        {"property_type":"linear","property_name":"opacity","initialValue":1,"finalValue":0,"from":0,"to":0.2},
        // {"property_type":"class","direction":"down","from":0,"to":0.2,
        //     "add":["disappear_title"],
        //     "remove":["appear_title"]
        // }
    ],
    "lines_container":[
        // {"property_type":"class","direction":"down","from":0,"to":0.2,
        //     "add":["disappear_line"],
        //     "remove":["section1__subcontainer-bottom-style"]
        // }
    ],
    "titles":[
        // {"property_type":"class","direction":"down","from":0,"to":0.2,
        //     "add":["disappear_title"],
        //     "remove":["appear_title"]
        // }
    ],
    "scroll_container":[
        {"property_type":"color","initial_value":"#171717","final_value":"#160637","from":0,"to":0.5},
        {"property_type":"color","initial_value":"#160637","final_value":"#ff4607","from":0.5,"to":1},
        {"property_type":"color","initial_value":"#ff4607","final_value":"#160637","from":1,"to":1.5},
        {"property_type":"color","initial_value":"#160637","final_value":"#171717","from":1.5,"to":2},
        // {"property_type":"color","initial_value":"#160637","final_value":"#160637","from":2,"to":3},
    ]
};
scrollAnimations.component_configurations = [
    {"component_list":scroll_container, "configuration_key":"scroll_container"},
    {"component_list":          titles, "configuration_key":"titles"},
    {"component_list":           lines, "configuration_key":"lines"},
    {"component_list": lines_container, "configuration_key":"lines_container"},
];
scroll_container[0].addEventListener("scroll",()=>{
    scrollAnimations.applyRules();
});