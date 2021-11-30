let scrollAnimations = new scrollListener();

//Gets dom elements
let               background = document.getElementsByClassName("background");
let                   titles = document.getElementsByClassName("titles");
let                    lines = document.getElementsByClassName("all_lines_container");
// let         lines_container = document.getElementsByClassName("section1__subcontainer-bottom");
let   rocket_video_container = document.getElementsByClassName("rocket_video-container");
let     star_video_container = document.getElementsByClassName("star_video-container");
let          tunel_container = document.getElementsByClassName("tunel_container");
let                  my_name = document.getElementsByClassName("name");
let                    item0 = document.getElementsByClassName("item0");
let                    item1 = document.getElementsByClassName("item1");
let                    item2 = document.getElementsByClassName("item2");
let                    item3 = document.getElementsByClassName("item3");
let           section2_title = document.getElementsByClassName("section2_title");
let section3_title_container = document.getElementsByClassName("section3_title_container");
let                 control1 = document.getElementsByClassName("control1");
let                 control2 = document.getElementsByClassName("control2");
let                 control3 = document.getElementsByClassName("control3");
let                 control4 = document.getElementsByClassName("control4");
let       nav__content_rigth = document.getElementsByClassName("nav__content-rigth");

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
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":0,"to":0.3},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":1,"from":0.3,"to":1},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":1,"from":1,"to":3},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":3,"to":3.7},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":3.7,"to":4},
    ],
    "star_video_container":[
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":1,"from":0,"to":0.3},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":0.3,"to":1},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":1,"to":3},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":1,"from":3,"to":3.7},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":1,"from":3.7,"to":4},
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
        {"property_type":"class","direction":"down","from":2.6,"to":3,
            "add":["disappear_up0"],
            "remove":[""]
        }
    ],
    "item1":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_down1"],
            "remove":["disappear_down1"]
        },
        {"property_type":"class","direction":"down","from":2.6,"to":3,
            "add":["disappear_up1"],
            "remove":[""]
        }
    ],
    "item2":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_down2"],
            "remove":["disappear_down2"]
        },
        {"property_type":"class","direction":"down","from":2.6,"to":3,
            "add":["disappear_up2"],
            "remove":[""]
        }
    ],
    "item3":[
        {"property_type":"class","direction":"down","from":0.9,"to":1.1,
            "add":["appear_down3"],
            "remove":["disappear_down3"]
        },
        {"property_type":"class","direction":"down","from":2.6,"to":3,
            "add":["disappear_up3"],
            "remove":[""]
        }
    ],
    "section2_title":[
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":0,"to":0.5},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":1,"from":0.5,"to":1},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":1,"from":1,"to":2.3},
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":2.3,"to":2.6},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":2.6,"to":3},
    ],
    "section3_title_container":[
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":0,"to":2.6},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":1,"from":3.6,"to":4},
    ],
    "control1":[
        {"property_type":"class","direction":"down","from":3.6,"to":3.9,
            "add":["appear_down0"],
            "remove":["disappear_down3"]
        },
        {"property_type":"class","direction":"down","from":4.2,"to":4.6,
            "add":["disappear_down3"],
            "remove":["appear_down0"]
        },
    ],
    "control2":[
        {"property_type":"class","direction":"down","from":3.6,"to":3.9,
            "add":["appear_down1"],
            "remove":["disappear_down2"]
        },
        {"property_type":"class","direction":"down","from":4.2,"to":4.6,
            "add":["disappear_down2"],
            "remove":["appear_down1"]
        },
    ],
    "control3":[
        {"property_type":"class","direction":"down","from":3.6,"to":3.9,
            "add":["appear_down2"],
            "remove":["disappear_down1"]
        },
        {"property_type":"class","direction":"down","from":4.2,"to":4.6,
            "add":["disappear_down1"],
            "remove":["appear_down2"]
        },
    ],
    "control4":[
        {"property_type":"class","direction":"down","from":3.6,"to":3.9,"control":"Kiki",
            "add":["appear_down3"],
            "remove":["disappear_down0"]
        },
        {"property_type":"class","direction":"down","from":4.2,"to":4.6,"control":"Kiki",
            "add":["disappear_down0"],
            "remove":["appear_down3"]
        },
    ],
    "nav__content_rigth":[
        {"property_type":"linear","property_name":"opacity","initial_value":1,"final_value":0,"from":0.5,"to":1},
        {"property_type":"linear","property_name":"opacity","initial_value":0,"final_value":0,"from":1,"to":2},
    ],
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
    {"component_list":section3_title_container, "configuration_key":"section3_title_container"},
    {"component_list":control1, "configuration_key":"control1"},
    {"component_list":control2, "configuration_key":"control2"},
    {"component_list":control3, "configuration_key":"control3"},
    {"component_list":control4, "configuration_key":"control4"},
    {"component_list":nav__content_rigth, "configuration_key":"nav__content_rigth"},
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
    maze1.setColor_wallBorderColor("rgba(255,100,255,1)");
    maze1.setColor_wallBorderThickness("0.09em");
    maze1.setColor_visitedCellColor("#00000000");
    maze1.setColor_solutionCellColor("#4422a8");
});
//Solver button
let solver_button = document.getElementById("solve");
solver_button.addEventListener("click",()=>{
    console.log("click");
    let _solver = new solver(mazes.length - 1);
    _solver = null;
})

// Remove # anchor on load
window.location.replace("#"); 
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}

//Translation logic
let texts = [
    {"class":"t0","english":"HOW IT WORKS",
                    "castellano":"CÓMO FUNCIONA"},
    {"class":"t1","english":"This is a graphical demostration of how different maze-generating algorithms operate, as well as maze-solving algorithms.",
                    "castellano":"Esta es una demostración gráfica de cómo operan distintos algoritmos generadores de laberintos, al igual que los algoritmos que los resuelven"},
    {"class":"t2","english":"Select the number of rows and columns.",
                    "castellano":"Seleccione el numero de filas y columnas."},
    {"class":"t3","english":"Click on 'generate maze'",
                    "castellano":"Click en 'generar laberinto'"},
    {"class":"t4","english":"Click on 'solve maze'",
                    "castellano":"Click en 'resolver laberinto'"},
    {"class":"t5","english":"Help Elon Musk reach Mars.",
                    "castellano":"Ayuda a Elon Musk a llegar a Marte"},
    {"class":"t6","english":"GET IN TOUCH",
                    "castellano":"CONTACTO"},
    {"class":"t7","english":"SOCIALS",
                    "castellano":"REDES"},
    {"class":"t8","english":"LOCATION",
                    "castellano":"UBICACIÓN"},

    {"class":"t9","english":"Home",
                    "castellano":"Inicio"},
    {"class":"t10","english":"How does it work?",
                    "castellano":"¿Cómo funciona?"},
    {"class":"t11","english":"Lets slart!",
                    "castellano":"Comenzar"},
    {"class":"t12","english":"About",
                    "castellano":"Contacto"},
    {"class":"t13","english":"LET'S START",
                    "castellano":"COMENZAR"},

    {"class":"t14","english":"Number or rows",
                    "castellano":"Numero de filas"},
    {"class":"t15","english":"Number of columns",
                    "castellano":"Numero de columnas"},
    {"class":"t16","english":"Generate maze",
                    "castellano":"Generar laberinto"},
    {"class":"t17","english":"Solve maze",
                    "castellano":"Resolver laberinto"}
];

let translate = (lan)=>{
    for(let k = 0 ; k < texts.length ; k++){
    //     document.getElementsByClassName(texts[k].class)[0].innerHTML = texts[k][lan];
        let cosa = document.getElementsByClassName(texts[k].class)[0].innerHTML = texts[k][lan];
        console.log(cosa);
    }
};

document.getElementsByClassName("english")[0].addEventListener("click",(event)=>{translate("english")});
document.getElementsByClassName("spanish")[0].addEventListener("click",(event)=>{translate("castellano")});