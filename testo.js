//Calculates longitude
let dy = 200;
let dx = 200;
let dx2 = Math.hypot(dy,dx);
console.log("Hipotenuse -  length of color line");
console.log(dx2);
// root.style.setProperty("--length",dx2.toString() + "px");
//Calculates angle
let orientation = (dx < 0) ? -1 : 1;
let theta = (Math.asin(dy / dx2)) * (180/Math.PI);
console.log("Angle");
console.log(theta);
// root.style.setProperty("--angle",theta.toString() + "deg");
//Calculates position
let finalX = 300;
let finalY = 300;
let translateX = finalX - 500;
let translateY = finalY - 500;
console.log("x movement");
console.log(translateX)
console.log("y movement");
console.log(translateY)
let x_x_component = translateX * Math.sin(theta / (180/Math.PI));
let x_y_component = translateX * Math.cos(theta / (180/Math.PI));
console.log("x_x component");
console.log(x_x_component);
console.log("x_y component");
console.log(x_y_component);
let translateX_converted = -1 * x_x_component;
let translateY_converted = -1 * x_y_component;

