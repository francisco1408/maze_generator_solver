
class cell{
    constructor(side,rowN,id,mazeRows,mazeColums,mazeid){
        this.setWalls(side);
        this.buildCssClass();
        
        
        this.id = id;
        this.mazeRows = mazeRows;
        this.mazeColums = mazeColums;
        this.mazeID = mazeid;
        this.getWalls();

        this.buildDomElement();
    }
    setRed(){
        this.colorCss_class = "red-cell";
        this.buildCssClass();
        this.buildDomElement();
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
           this.top = (side.includes("5")) ? false : this.top;
         this.right = (side.includes("6")) ? false : this.right;
        this.bottom = (side.includes("7")) ? false : this.bottom;
          this.left = (side.includes("8")) ? false : this.left;
    }
    buildCssClass(){
        this.CSSclass = "cell";
        this.CSSclass = (this.top) ? this.CSSclass + " border-top" : this.CSSclass;
        this.CSSclass = (this.right) ? this.CSSclass + " border-right" : this.CSSclass;
        this.CSSclass = (this.bottom) ? this.CSSclass + " border-bottom" : this.CSSclass;
        this.CSSclass = (this.left) ? this.CSSclass + " border-left" : this.CSSclass;
        this.CSSclass = this.CSSclass + " " + this.colorCss_class;
    }
    buildDomElement(){
        // this.domElement = "<div class =" + "'" + this.CSSclass + "'"  + ">" + this.id + "</div>";
        this.domElement = "<div class =" + "'" + this.CSSclass + "'"  + ">" + "</div>";
    }
    getWalls(){
        this.yCordenate = Math.floor(Math.floor(this.id/this.mazeColums));
        this.xCordenate = this.id % this.mazeColums;
           this.topWall = (this.yCordenate == 0) ? null                     : (this.yCordenate * (this.mazeColums - 1)) + ((this.yCordenate - 1) *  this.mazeColums) + this.xCordenate;
          this.leftWall = (this.xCordenate == 0) ? null                     : (this.yCordenate * (this.mazeColums - 1)) + (this.yCordenate * this.mazeColums) + this.xCordenate - 1;
        this.bottomWall = (this.yCordenate + 1 == this.mazeRows) ? null     : (this.yCordenate * this.mazeColums) + ((this.yCordenate + 1) * (this.mazeColums - 1)) + this.xCordenate;
         this.rightWall = (this.xCordenate + 1 == this.mazeColums) ? null   : (this.yCordenate * (this.mazeColums - 1)) + (this.yCordenate * this.mazeColums) + this.xCordenate;
         return [this.topWall, this.rightWall, this.bottomWall, this.leftWall];
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
    colorCss_class = "";
    domElement = "<div class =" + "'" + this.CSSclass + "'"  + ">a</div>";
}

class maze {
    constructor(rows,columns,mazeid){
        this.mazeID = mazeid;
        this.rowsNumber = rows;
        this.columnsNumber = columns;
        let cellCount = 0;
        for(let i = 0 ; i < rows; i++){
            for(let j = 0; j < columns ; j++){
                let sideString = "1234";
                let oneCell = new cell(sideString,i,cellCount,this.rowsNumber,this.columnsNumber,this.mazeID);
                this.cells.push(oneCell);
                cellCount++;
            }
        }
        let numberOfWalls = 2 * rows * columns - rows - columns; 
        for (let j = 0 ; j < numberOfWalls ; j++){
            this.walls.push(true);
        }
        
    }
    ran = ()=> ((Math.random() * (1 - 0) + 0) < 0.75) ? false : true; 
    generateMaze(){
        let construct = new constructionWorker(2,3,this.columnsNumber,this.mazeID);
    }
    rowsNumber = 0;
    columnsNumber = 0;
    walls = [];
    cells = [];
    mazeID = 0;
    mazeTagID = "";
    visitedCells = [];
    givePercentages(r,c){
        if(r == null && c == null){
            r = this.rowsNumber;
            c = this.columnsNumber;
        }
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
    render(mazeTagid){
        if(mazeTagid != null){
            this.mazeTagID = mazeTagid
        } else {
            mazeTagid = this.mazeTagID;
        }
         
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
        document.getElementById(mazeTagid).innerHTML = mazeHTML;
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

class constructionWorker{
    constructor(initialX,initialY,mazeColumns,mazeid){
        this.mazeID = mazeid;
        this.currentCelliD = (initialY * mazeColumns) + initialX;
        this.currentCellObj = mazes[this.mazeID].cells[this.currentCelliD];
        // Sets visited cells as false
        for(let u = 0 ; u < mazes[this.mazeID].cells.length ; u++){
            this.visitedCells.push(false);
            mazes[this.mazeID].visitedCells = this.visitedCells;
        }
        console.log(mazes[this.mazeID].visitedCells);
        this.visitedCells[this.currentCelliD] = true;
        this.setCellRed();
        this.cellPath.push(this.currentCelliD);
        this.buildPath();
        //...
    }
    // this is ment to be an array of ids
    currentCelliD = 0;
    currentCellObj = null;
    currentAdyacentNotVisitedCells = [];
    visitedCells = [];
    mazeID = 0;
    continueSearch = true;
    cellPath = [];
    destroyWall(_wallID){
        let twoCells = mazes[this.mazeID].getCellsFromWall(_wallID);
        for(let m = 0 ; m < 2 ; m++){
            let oneCell = mazes[this.mazeID].cells[twoCells[m]];
            oneCell.top = (oneCell.topWall == _wallID) ? false : oneCell.top;
            oneCell.right = (oneCell.rightWall == _wallID) ? false : oneCell.right;
            oneCell.bottom = (oneCell.bottomWall == _wallID) ? false : oneCell.bottom;
            oneCell.left = (oneCell.leftWall == _wallID) ? false : oneCell.left;
            oneCell.buildCssClass();
            oneCell.buildDomElement();
        }
        mazes[this.mazeID].render();
    }
    async buildPath(){
        let it_counter = 0;
        while(this.continueSearch){
            it_counter++;
            let move = await this.moveCell();
            
        }
        console.log(it_counter);
    }
    async moveCell(){
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, 1);
        }).then(()=>{
            this.chooseNextCell();
                this.setCellRed();
        });
    }
    setCellRed(){
        this.currentCellObj.setRed();
        mazes[this.mazeID].render();
        mazes[this.mazeID].givePercentages();
    }
    chooseNextCell(){
        console.log(".....................................");
        console.log(this.currentCelliD);
        let availableWalls = this.currentCellObj.getWalls().filter(wall => wall != null);
        let availableCells = [];
        let referenceWalls = [];
        for(let r = 0 ; r < availableWalls.length ; r++){
            let _wall = availableWalls[r];
            let twoCells = mazes[this.mazeID].getCellsFromWall(_wall);
            let candidateCellID =  (twoCells[0] == this.currentCelliD) ? twoCells[1] : twoCells[0];
            if(!this.visitedCells[candidateCellID]){
                availableCells.push(candidateCellID);
                referenceWalls.push(_wall);
            }
        }
        if(availableCells.length == 0){
            console.log("Stop");
            let backResult = this.goBack();
            console.log("000");
            console.log(backResult);
            if(backResult == -1){
                this.continueSearch = false;
            } else {
                this.currentCelliD = backResult;
                this.currentCellObj = mazes[this.mazeID].cells[this.currentCelliD];
            }
        } else {
            let randomNumber = this.ran(0,availableCells.length - 1);
            let newCellID = availableCells[randomNumber];
            this.visitedCells[newCellID] = true;
            this.currentCellObj = mazes[this.mazeID].cells[newCellID];
            this.currentCelliD = newCellID;
            this.cellPath.push(this.currentCelliD);
            this.destroyWall(referenceWalls[randomNumber]);
        }
       
    }
    goBack(){
        console.log("ggggggg");
        console.log(this.cellPath);
        for(let f = this.cellPath.length - 1 ; f >= 0 ; f--){
            console.log("--");
            let __cell = this.cellPath[f];
            console.log(__cell);
            let __cellObj = mazes[this.mazeID].cells[__cell];
            let __notNullWalls = __cellObj.getWalls().filter(wall => wall != null);
            console.log("*********")
            for (let v = 0 ; v < __notNullWalls.length ; v++){
                let __twoCells = mazes[this.mazeID].getCellsFromWall(__notNullWalls[v]);
                console.log(__twoCells);
                let __candidateCellID =  (__twoCells[0] == __cell) ? __twoCells[1] : __twoCells[0];
                if(!this.visitedCells[__candidateCellID]){
                    return __cell;
                }
            }
        }
        return -1;
    }
    ran = (a,b) =>{
        let possibleValues = [];
        let random_c = a;
        while(random_c < b + 1){
            possibleValues.push(random_c);
            random_c++;
        }
        return possibleValues[Math.floor((Math.random() * (possibleValues.length - 0) + 0))];
    } 
}