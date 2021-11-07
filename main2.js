//Defines the final backrgound color for each full vh 
const colorInterpolation = (initial,final,percent) =>{
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
const backgound_color_list = [
    {"type":"color", "value":"#171717"},
    {"type":"color", "value":"#160637"},
    {"type":"color", "value":"#160637"}
];
//Gets dom elements
let scroll_container = document.querySelector(".scroll-container");
let title = document.querySelector(".section1__subcontainer-center");
let subtitle = document.querySelector(".subtitle-container");
//Sets the scroll event
let last_position = 0;

scroll_container.addEventListener("scroll",()=>{
    //Uses section 1 as reference to know the vertical position
    let section1 = document.querySelectorAll(".section1")[0];
    let position_data = section1.getBoundingClientRect();
    let viewport_height = position_data.height;
    let top_distance = position_data.top * -1;
    let full_sections = parseInt(top_distance/viewport_height);
    let remainder_percentage = (top_distance % viewport_height) / 1000;
    let new_position = top_distance;
    let scroll_direction = (last_position - new_position < 0) ? "down" : "up";
    last_position = new_position;
    // console.log(scroll_direction);
    //====================================================================
    // Changes background color
    //====================================================================
    let old_background = backgound_color_list[full_sections];
    let new_background = backgound_color_list[full_sections + 1];
    
    if(old_background.type == "color" && new_background.type == "color"){
        //If both backgounds are color type, makes a interpolation
        scroll_container.style.backgroundColor = colorInterpolation(old_background.value,new_background.value,remainder_percentage);
    }
    //====================================================================
    // Sets animations to some components based on vertical position
    //====================================================================
    //Titles
    if(scroll_direction == "down" && full_sections == 0){
        console.log("in");
        title.classList.remove("appear_title");
        title.classList.add("disappear_title");
        subtitle.classList.remove("appear_title");
        subtitle.classList.add("disappear_title");
        
    } else if(scroll_direction == "up" && full_sections == 0){
        title.classList.remove("disappear_title");
        title.classList.add("appear_title");
        subtitle.classList.remove("disappear_title");
        subtitle.classList.add("appear_title");
    } else {
        title.classList.remove("appear_title");
        title.classList.remove("disappear_title");
        subtitle.classList.remove("appear_title");
        subtitle.classList.remove("disappear_title");
    }
    //Animated bars
    if(scroll_direction == "down" && full_sections == 0){
        console.log("in");
        title.classList.remove("appear_title");
        title.classList.add("disappear_title");
        subtitle.classList.remove("appear_title");
        subtitle.classList.add("disappear_title");
        
    } else if(scroll_direction == "up" && full_sections == 0){
        title.classList.remove("disappear_title");
        title.classList.add("appear_title");
        subtitle.classList.remove("disappear_title");
        subtitle.classList.add("appear_title");
    } else {
        title.classList.remove("appear_title");
        title.classList.remove("disappear_title");
        subtitle.classList.remove("appear_title");
        subtitle.classList.remove("disappear_title");
    }
    

});