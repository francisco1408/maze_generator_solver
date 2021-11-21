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
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":1.2,"to":2},
    ],
    "star_video_container":[
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":1,"from":0,"to":0.2},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":0.2,"to":1},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":1,"from":1.4,"to":2},
    ],
    "my_name":[
        {"property_type":"class","direction":"down","from":0.5,"to":0.7,
            "add":["disappear_left"],
            "remove":["appear_left"]
        }
    ],   
    "item0":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_down0"],
            "remove":["disappear_down0"]
        },
        {"property_type":"class","direction":"down","from":1.6,"to":2,
            "add":["disappear_up0"],
            "remove":[""]
        }
    ],
    "item1":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_down1"],
            "remove":["disappear_down1"]
        },
        {"property_type":"class","direction":"down","from":1.6,"to":2,
            "add":["disappear_up1"],
            "remove":[""]
        }
    ],
    "item2":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_down2"],
            "remove":["disappear_down2"]
        },
        {"property_type":"class","direction":"down","from":1.6,"to":2,
            "add":["disappear_up2"],
            "remove":[""]
        }
    ],
    "item3":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_down3"],
            "remove":["disappear_down3"]
        },
        {"property_type":"class","direction":"down","from":1.6,"to":2,
            "add":["disappear_up3"],
            "remove":[""]
        }
    ],
    "section2_title":[
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":0,"to":0.5},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":1,"from":0.5,"to":1},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":1.3,"to":2},
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
//Sets maze
let mazes = [];
let mazeCount = 0;
document.getElementById("generate").addEventListener("click",()=>{
    let rows = parseInt(document.getElementById("rows").value);
    let columns = parseInt(document.getElementById("columns").value);
    let maze1 = new maze(rows,columns,mazeCount);
    mazeCount++;
    maze1.render("maze1");
    maze1.givePercentages(rows,columns);
    mazes.push(maze1);
    maze1.generateMaze();
    
});
//Solver button
let solver_button = document.getElementById("solve");
solver_button.addEventListener("click",()=>{
    console.log("click");
    let _solver = new solver(mazes.length - 1);
    _solver = null;
})