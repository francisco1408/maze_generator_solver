console.log("Hello world");
// import './maze.mjs';

document.getElementById("generate").addEventListener("click",()=>{
    let rows = parseInt(document.getElementById("rows").value);
    let columns = parseInt(document.getElementById("columns").value);

    let maze1 = new maze(rows,columns);
    console.log("maze1");
    console.log(maze1);
    maze1.render();
    maze1.givePercentages(rows,columns);
});