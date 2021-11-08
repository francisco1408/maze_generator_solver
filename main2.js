const colorInterpolation = (initial,final,percent) => {
    //Gets initial and final values of red, green and blue on decimal
    let initial_red   = parseInt(initial.substring(1,3),16);
    let initial_green = parseInt(initial.substring(3,5),16);
    let initial_blue  = parseInt(initial.substring(5,7),16);
    let target_red    = parseInt(final.substring(1,3),16);
    let target_green  = parseInt(final.substring(3,5),16);
    let target_blue   = parseInt(final.substring(5,7),16);
    //Gets the total difference
    let delta_r = target_red - initial_red;
    let delta_g = target_green - initial_green;
    let delta_b = target_blue - initial_blue;
    //Gets the proportional increment for the scrolled space and converts them back to hex
    let new_red   = Number((initial_red   + (delta_r * percent)).toFixed(0)).toString(16);
    let new_green = Number((initial_green + (delta_g * percent)).toFixed(0)).toString(16);
    let new_blue  = Number((initial_blue  + (delta_b * percent)).toFixed(0)).toString(16);
    //Completes 0 to the string just in case hex resulted in 1 character
    new_red   = (new_red.length == 1)   ? "0" + new_red   : new_red;
    new_green = (new_green.length == 1) ? "0" + new_green : new_green;
    new_blue  = (new_blue.length == 1)  ? "0" + new_blue  : new_blue;
    //Returns new hex value
    return "#" + new_red + new_green + new_blue;
};
const simpleInterpolation = (initial,final,percent) => initial + (final -  initial) * percent;
const applyChange = (_change,_comp,_ratio,_remainder_percentage,_scroll_direction)=>{
    if(_change.from <= _ratio && _ratio < _change.to){
        if(_change.property_type == "class"){
            if(_change.direction == _scroll_direction){
                for(let k = 0 ; k < _change.add.length ; k++){
                    _comp.classList.add(_change.add[k]);
                }
                for(let k = 0 ; k < _change.remove.length ; k++){
                    _comp.classList.remove(_change.remove[k]);
                }
            } else {
                for(let k = 0 ; k < _change.add.length ; k++){
                    _comp.classList.remove(_change.add[k]);
                }
                for(let k = 0 ; k < _change.remove.length ; k++){
                    _comp.classList.add(_change.remove[k]);
                }
            }
        } else if (_change.property_type == "linear") {
            _comp.style[_change.property_name] = simpleInterpolation(_change.initialValue,_change.finalValue,(_ratio - _change.from)/(_change.to - _change.from));   
        } else if (_change.property_type == "color") {
            let old_background = _change.initial_value;
            let new_background = _change.final_value;
            _comp.style.backgroundColor = colorInterpolation(old_background,new_background,_remainder_percentage);
        }
    }
};
const apply_rules = (_component_configurations,_ui_rules_configurations,__ratio,__remainder_percentage,__scroll_direction)=>{
    // For each list of components
    for(let i = 0 ; i < _component_configurations.length ; i++){
        // For each component
        for(let j = 0 ; j < _component_configurations[i].component_list.length ; j++){
            let comp = _component_configurations[i].component_list[j];
            // For each change
            for(let k = 0 ; k < _ui_rules_configurations[_component_configurations[i].configuration_key].length ; k++){
                applyChange(_ui_rules_configurations[_component_configurations[i].configuration_key][k], comp, __ratio,__remainder_percentage,__scroll_direction);
            }
        }
    }
};
const ui_rules_configurations = {
    "lines":[
        {"property_type":"linear","property_name":"opacity","initialValue":1,"finalValue":0,"from":0,"to":0.2},
        // {"property_type":"class","direction":"down","from":0,"to":0.2,
        //     "add":["disappear_title"],
        //     "remove":["appear_title"]
        // }
    ],
    "lines_container":[
        {"property_type":"class","direction":"down","from":0,"to":0.2,
            "add":["disappear_line"],
            "remove":["section1__subcontainer-bottom-style"]
        }
    ],
    "titles":[
        {"property_type":"class","direction":"down","from":0,"to":0.2,
            "add":["disappear_title"],
            "remove":["appear_title"]
        }
    ],
    "scroll_container":[
        {"property_type":"color","initial_value":"#171717","final_value":"#160637","from":0,"to":1},
        {"property_type":"color","initial_value":"#160637","final_value":"#160637","from":1,"to":2},
    ]
};
//Gets dom elements
let scroll_container = [document.querySelector(".scroll-container")];
let titles = document.getElementsByClassName("titles");
let lines = document.getElementsByClassName("lineContainer");
let lines_container = document.getElementsByClassName("section1__subcontainer-bottom");
//Configures the ui rules that apply to each dom component
const component_configurations = [
    {"component_list":scroll_container, "configuration_key":"scroll_container"},
    {"component_list":titles, "configuration_key":"titles"},
    {"component_list":lines, "configuration_key":"lines"},
    {"component_list":lines_container, "configuration_key":"lines_container"},
];
let last_position = 0;
scroll_container[0].addEventListener("scroll",()=>{
    //Uses section 1 as reference to know the vertical position
    let section1             = document.querySelectorAll(".section1")[0];
    let position_data        = section1.getBoundingClientRect();
    let viewport_height      = position_data.height;
    let top_distance         = position_data.top * -1;
    let ratio                = top_distance/viewport_height;
    let remainder_percentage = (top_distance % viewport_height) / 1000;
    let new_position         = top_distance;
    let scroll_direction     = (last_position - new_position < 0) ? "down" : "up";
    last_position            = new_position;
    apply_rules(component_configurations,ui_rules_configurations,ratio,remainder_percentage,scroll_direction);
});