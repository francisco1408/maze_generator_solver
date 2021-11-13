class scrollListener {
    constructor(_topElementClass, _ui_rules_configurations, _component_configurations){
        this.ui_rules_configurations = (_ui_rules_configurations != null) ? _ui_rules_configurations : [];
        this.component_configurations = (_component_configurations != null) ? _component_configurations : [];
        this.topElementClass = (_topElementClass != null) ? _topElementClass : "";
    }
    ui_rules_configurations = [];
    component_configurations = [];
    topElementClass = "";
    last_position = 0;
    
    colorInterpolation = (initial,final,percent) => {
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
    simpleInterpolation = (initial,final,percent) => initial + (final -  initial) * percent;
    applyChange = (_change,_comp,_ratio,_remainder_percentage,_scroll_direction)=>{
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
                _comp.style[_change.property_name] = this.simpleInterpolation(_change.initialValue,_change.finalValue,(_ratio - _change.from)/(_change.to - _change.from));   
            } else if (_change.property_type == "color") {
                let old_background = _change.initial_value;
                let new_background = _change.final_value;
                let _percent_for_color = (_ratio - _change.from) / (_change.to - _change.from);  
                _comp.style.backgroundColor = this.colorInterpolation(old_background,new_background,_percent_for_color);
            }
        }
    };
    getMeasurements = ()=>{
        let selector = "." + this.topElementClass;
        let        position_data = document.querySelectorAll(selector)[0].getBoundingClientRect();
        let      viewport_height = position_data.height;
        let         top_distance = position_data.top * -1;
        let         new_position = top_distance;
              this.last_position = new_position;
        return {
            "__ratio":top_distance/viewport_height,
            "__remainder_percentage":(top_distance % viewport_height) / 1000,
            "__scroll_direction":(this.last_position - new_position < 0) ? "down" : "up"
        };
    };
    applyRules = ()=>{
        //Uses top element as reference to know the vertical position
        let measurements = this.getMeasurements();
        let __ratio = measurements.__ratio;
        let __remainder_percentage = measurements.__remainder_percentage;
        let __scroll_direction = measurements.__scroll_direction;
        
        // For each list of components
        for(let i = 0 ; i < this.component_configurations.length ; i++){
            // For each component
            for(let j = 0 ; j < this.component_configurations[i].component_list.length ; j++){
                let comp = this.component_configurations[i].component_list[j];
                // For each change
                for(let k = 0 ; k < this.ui_rules_configurations[this.component_configurations[i].configuration_key].length ; k++){
                    this.applyChange(this.ui_rules_configurations[this.component_configurations[i].configuration_key][k], comp, __ratio,__remainder_percentage,__scroll_direction);
                }
            }
        }
    };
}

