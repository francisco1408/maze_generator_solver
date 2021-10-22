console.log("Hello world");
let mazes = [];
document.getElementById("generate").addEventListener("click",()=>{
    let rows = parseInt(document.getElementById("rows").value);
    let columns = parseInt(document.getElementById("columns").value);

    let maze1 = new maze(rows,columns);
    maze1.render("maze1");
    maze1.givePercentages(rows,columns);
    
    mazes.push(maze1);
});