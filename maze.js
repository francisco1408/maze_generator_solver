
class cell{
    constructor(side,rowN,id,mazeRows,mazeColums,mazeid){
        this.setWalls(side);
        this.buildCssClass();
        this.buildDomElement();
        
        this.id = id;
        this.mazeRows = mazeRows;
        this.mazeColums = mazeColums;
        this.mazeID = mazeid;
        this.getWalls();
    }
    getNeighbour(sideWall){
        let littleRouter = {
            "top":this.topWall,
            "right":this.rightWall,
            "bottom":this.bottomWall,
            "left":this.leftWall,
        };
        if(littleRouter[sideWall] == null){
            return null;
        } else {
           let twoCells = mazes[this.mazeID].getCellsFromWall(littleRouter[sideWall]);
           return (twoCells[0] == this.id) ? twoCells[1] : twoCells[0];
        }   
    }
    
    setWalls(side){
        this.top = (side.includes("1")) ? true : this.top;
        this.right = (side.includes("2")) ? true : this.right;
        this.bottom = (side.includes("3")) ? true : this.bottom;
        this.left = (side.includes("4")) ? true : this.left;
    }
    buildCssClass(){
        this.CSSclass = "cell";
        this.CSSclass = (this.top) ? this.CSSclass + " border-top" : this.CSSclass;
        this.CSSclass = (this.right) ? this.CSSclass + " border-right" : this.CSSclass;
        this.CSSclass = (this.bottom) ? this.CSSclass + " border-bottom" : this.CSSclass;
        this.CSSclass = (this.left) ? this.CSSclass + " border-left" : this.CSSclass;
    }
    buildDomElement(){
        this.domElement = "<div class =" + "'" + this.CSSclass + "'"  + "></div>";
    }
    getWalls(){
        this.yCordenate = Math.floor(Math.floor(this.id/this.mazeColums));
        this.xCordenate = this.id % this.mazeColums;
        this.topWall = (this.yCordenate == 0) ? null                     : (this.yCordenate * (this.mazeColums - 1)) + ((this.yCordenate - 1) *  this.mazeColums) + this.xCordenate;
        this.leftWall = (this.xCordenate == 0) ? null                    : (this.yCordenate * (this.mazeColums - 1)) + (this.yCordenate * this.mazeColums) + this.xCordenate - 1;
        this.bottomWall = (this.yCordenate + 1 == this.mazeRows) ? null  : (this.yCordenate * this.mazeColums) + ((this.yCordenate + 1) * (this.mazeColums - 1)) + this.xCordenate;
        this.rightWall = (this.xCordenate + 1 == this.mazeColums) ? null : (this.yCordenate * (this.mazeColums - 1)) + (this.yCordenate * this.mazeColums) + this.xCordenate;
    }
    mazeID = 0;
    xCordenate = 0;
    yCordenate = 0;
    mazeRows = 0;
    mazeColums = 0;
    topWall = 0;
    rightWall = 0;
    bottomWall = 0;
    leftWall = 0;
    top = false;
    right = false;
    bottom = false;
    left = false;
    CSSclass = "";
    id = 0;
    domElement = "<div class =" + "'" + this.CSSclass + "'"  + ">a</div>";
}

class maze {
    constructor(rows,columns,mazeid){
        this.mazeID = mazeid;
        this.rowsNumber = rows;
        this.columnsNumber = columns;
        this.generateMaze();
        let cellCount = 0;
        for(let i = 0 ; i < rows; i++){
            for(let j = 0; j < columns ; j++){
                let sideString = "";
                sideString = (i == 0 || this.ran()) ? sideString + "1" : sideString;
                sideString = (j == columns - 1  || this.ran()) ? sideString + "2" : sideString;
                sideString = (i == rows - 1  || this.ran()) ? sideString + "3" : sideString;
                sideString = (j == 0  || this.ran()) ? sideString + "4" : sideString;
                let oneCell = new cell(sideString,i,cellCount,this.rowsNumber,this.columnsNumber,this.mazeID);
                this.cells.push(oneCell);
                cellCount++;
            }
        }
        let numberOfWalls = 2 * rows * columns - rows - columns; 
        for (let j = 0 ; j < numberOfWalls ; j++){
            this.walls.push(true);
        }
        // console.log(this.walls);
    }
    ran = ()=> ((Math.random() * (1 - 0) + 0) < 0.75) ? false : true; 
    generateMaze(){
        return true;
    }
    rowsNumber = 0;
    columnsNumber = 0;
    walls = [];
    cells = [];
    mazeID = 0;
    givePercentages(r,c){
        let xPercent = 100/parseInt(c);
        let yPercent = 100/parseInt(r);
        let myElements = document.querySelectorAll(".row");
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].style.height = yPercent.toString() + "%";
        }
        let myElements2 = document.querySelectorAll(".cell");
        for (let i = 0; i < myElements2.length; i++) {
            myElements2[i].style.width = xPercent.toString() + "%";
        }
        return xPercent,yPercent;
    }
    render(mazeTagID){
        let mazeHTML = "";
        let c = 0;
        for(let i = 0 ; i < this.rowsNumber ; i++){
            mazeHTML = mazeHTML + "<div class='row'>";
            for(let j = 0 ; j < this.columnsNumber ; j++){
                let oneCell = this.cells[c];
                c++;
                mazeHTML = mazeHTML + oneCell.domElement;
            }
            mazeHTML = mazeHTML + "</div>";
        }
        document.getElementById(mazeTagID).innerHTML = mazeHTML;
    }
    getCellsFromWall(wall){
        let rn = Math.floor((wall) / ((this.columnsNumber * 2 ) - 1 ));
        let wn = (wall) % ((this.columnsNumber * 2 ) - 1 ) + 1;
        let pc = this.columnsNumber * rn;
        let cell2 = pc + wn;
        let cell1 = (wn < this.columnsNumber) ? cell2 - 1 : cell2 - this.columnsNumber;
        return [cell1,cell2];
    }
}