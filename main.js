console.log("Hello world");

document.getElementById("generate").addEventListener("click",()=>{
    let rows = parseInt(document.getElementById("rows").value);
    let columns = parseInt(document.getElementById("columns").value);
    let xPercent = 100/parseInt(columns);
    let yPercent = 100/parseInt(rows);
    console.log(yPercent);
    console.log(xPercent);
    mazeHTML = "";
    for(let i = 0 ; i < rows ; i++){
        mazeHTML = mazeHTML + "<div class='row'>";
        for(let j = 0 ; j < columns ; j++){
            mazeHTML = mazeHTML + "<div class='cell'></div>";
        }
        mazeHTML = mazeHTML + "</div>";
    }
    // console.log(mazeHTML);
    document.getElementById("maze").innerHTML = mazeHTML;
    let myElements = document.querySelectorAll(".row");
    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.height = yPercent.toString() + "%";
    }
    let myElements2 = document.querySelectorAll(".cell");
    for (let i = 0; i < myElements2.length; i++) {
        myElements2[i].style.width = xPercent.toString() + "%";
    }
});