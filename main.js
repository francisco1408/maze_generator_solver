console.log("Hello world");
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