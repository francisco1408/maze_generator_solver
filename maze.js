
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
        this.updateClassInDOM();
    }
    setPurple(){
        this.colorCss_class = "purple-cell";
        this.buildCssClass();
        this.buildDomElement();
        this.updateClassInDOM();
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
        this.domElement = "<div id = 'cell" + this.id + "' class =" + "'" + this.CSSclass + "'"  + ">" + "</div>";
        // this.domElement = "<div id = 'cell" + this.id + "' class =" + "'" + this.CSSclass + "'"  + ">" + this.id + "</div>";
    }
    updateClassInDOM(){
        document.getElementById("cell" + this.id.toString()).className = this.CSSclass;
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
    getPaths(){
        let paths = [];
        if(!this.top){
            paths.push(this.topWall);
        }
        if(!this.right){
            paths.push(this.rightWall);
        }
        if(!this.bottom){
            paths.push(this.bottomWall);
        }
        if(!this.left){
            paths.push(this.leftWall);
        }
        return paths;
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
    domElement = "<div id = 'cell" + this.id + "' class =" + "'" + this.CSSclass + "'"  + ">a</div>";
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
        let construct = new constructionWorker(0,0,this.columnsNumber,this.mazeID);
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
            this.mazeTagID = mazeTagid;
            // document.getElementById(mazeTagid).classList.add("maze");
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
            oneCell.updateClassInDOM();
        }
        // mazes[this.mazeID].render();
    }
    async buildPath(){
        let it_counter = 0;
        while(this.continueSearch){
            it_counter++;
            let move = await this.moveCell();
            
        }
    }
    async moveCell(){
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, 0);
        }).then(()=>{
            this.chooseNextCell();
                this.setCellRed();
        });
    }
    setCellRed(){
        this.currentCellObj.setRed();
        // mazes[this.mazeID].render();
        // mazes[this.mazeID].givePercentages();
    }
    chooseNextCell(){
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
            let backResult = this.goBack();
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
        for(let f = this.cellPath.length - 1 ; f >= 0 ; f--){
            let __cell = this.cellPath[f];
            let __cellObj = mazes[this.mazeID].cells[__cell];
            let __notNullWalls = __cellObj.getWalls().filter(wall => wall != null);
            for (let v = 0 ; v < __notNullWalls.length ; v++){
                let __twoCells = mazes[this.mazeID].getCellsFromWall(__notNullWalls[v]);
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
class solver{
    constructor(mazeid){
        this.maze_id = mazeid;
        for(let y = 0 ; y < mazes[this.maze_id].cells.length ; y++){
            this.visited_cells.push(false);
        }
        // For now, the starting cell will be the upper left corner cell and the target cell will be the lower right corner one
        let initialCell = 0;
        let targetCell = mazes[this.maze_id].cells.length - 1;
        //Initial cell is the first wave front
        let currentWaveFront = [initialCell];
        this.wave_fronts.push(currentWaveFront);
        this.visited_cells[initialCell] = true;

        let found_it = false;
        while(!found_it){
            let new_wave_front = [];
            //Gets next-step cells for each of the cells in the current wave front
            for(let k = 0 ; k < currentWaveFront.length ; k++){
                let _cell_id = currentWaveFront[k];
                let _cell_obj = mazes[this.maze_id].cells[_cell_id]; 
                let _walls_ = _cell_obj.getPaths();
                for(let j = 0 ; j < _walls_.length ; j++){
                    let _wall_ = _walls_[j];
                    let _both_cells = mazes[this.maze_id].getCellsFromWall(_wall_);
                    let _next_cell =  (_both_cells[0] == _cell_id) ? _both_cells[1] : _both_cells[0];
                    if(_next_cell == targetCell){
                        found_it = true;
                        j = _walls_.length;
                        k = currentWaveFront.length;
                    }
                    if(!found_it && !this.visited_cells[_next_cell]){
                        this.visited_cells[_next_cell] = true;
                        new_wave_front.push(_next_cell);
                    }
                }
            }
            if(!found_it){
                currentWaveFront = new_wave_front;
                this.wave_fronts.push(new_wave_front);   
                
            }
        }
        console.log(this.wave_fronts);
        // Now lets go back
        let the_path = [targetCell];
        let __backwards_cell = targetCell; 
        for(let v = this.wave_fronts.length - 1 ; v >= 0 ; v--){
            let __wave_front = this.wave_fronts[v];
            let __cell_obj = mazes[this.maze_id].cells[__backwards_cell];
            let _walls_ = __cell_obj.getPaths();
                for(let j = 0 ; j < _walls_.length ; j++){
                    let _wall_ = _walls_[j];
                    let _both_cells = mazes[this.maze_id].getCellsFromWall(_wall_);
                    let _check_cell =  (_both_cells[0] == __backwards_cell) ? _both_cells[1] : _both_cells[0];
                    for(let b = 0 ; b < __wave_front.length ; b++){
                        let _wave_front_cell = __wave_front[b];
                        if(_check_cell == _wave_front_cell){
                            the_path.push(_check_cell);
                            __backwards_cell = _check_cell;
                            // Stops the iterations
                            b =  __wave_front.length;
                            j = _walls_.length;
                        }
                    }
                }
        }
        console.log("the_path:");
        console.log(the_path);
        //Changes color of solution path cells
        for(let s = 0 ; s < the_path.length ; s++){
            let _solution_cell_obj = mazes[this.maze_id].cells[the_path[s]];
            _solution_cell_obj.setPurple();
        }
    }
    maze_id = 0;
    wave_fronts = [];
    visited_cells = [];

}