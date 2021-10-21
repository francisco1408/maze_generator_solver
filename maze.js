function ran() {
    return ((Math.random() * (1 - 0) + 0) < 0.75) ? 0 : 1; 
  }
class cell{
    constructor(side,rowN){
        if(ran() == 1){
            this.CSSclass = this.CSSclass + " border-top";
            this.top = true;
        }
        if(ran() == 1){
            this.CSSclass = this.CSSclass + " border-right";
            this.right = true;
        }
        if(ran() == 1){
            this.CSSclass = this.CSSclass + " border-bottom";
            this.bottom = true;
        }
        if(ran() == 1){
            this.CSSclass = this.CSSclass + " border-left";
            this.left = true;
        }
        if(side.includes("1")){
            this.top = true;
            this.CSSclass = this.CSSclass + " border-top";
        }
        if (side.includes("2")){
            this.right = true;
            this.CSSclass = this.CSSclass + " border-right";
        }
        if (side.includes("3")){
            this.bottom = true;
            this.CSSclass = this.CSSclass + " border-bottom";
        }
        if (side.includes("4")){
            this.left = true;
            this.CSSclass = this.CSSclass + " border-left";
        }
        this.rowNumber = rowN;
        this.buildDomElement();
    }
    buildDomElement(){
        this.domElement = "<div class =" + "'" + this.CSSclass + "'"  + ">a</div>";
    }
    top = false;
    right = false;
    bottom = false;
    left = false;
    CSSclass = "cell";
    rowNumber = 0;
    domElement = "<div class =" + "'" + this.CSSclass + "'"  + ">a</div>";
}

class maze {
    constructor(rows,columns){
        this.rowsNumber = rows;
        this.columnsNumber = columns;
        for(let i = 0 ; i < rows; i++){
            for(let j = 0; j < columns ; j++){
                let sideString = "";
                if(i == 0){
                    sideString = sideString + "1";
                }
                if(j == columns - 1){
                    sideString = sideString + "2";
                }
                if(i == rows - 1){
                    sideString = sideString + "3";
                }
                if(j == 0){
                    sideString = sideString + "4";
                }
                let oneCell = new cell(sideString,i);
                this.cells.push(oneCell);
            }
        }
    }
    rowsNumber = 0;
    columnsNumber = 0;
    cells = [];
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
    }
    render(){
        console.log("cells");
        console.log(this.cells);
        let mazeHTML = "";
        let c = 0;
        for(let i = 0 ; i < this.rowsNumber ; i++){
            mazeHTML = mazeHTML + "<div class='row'>";
            for(let j = 0 ; j < this.columnsNumber ; j++){
                let oneCell = this.cells[c];
                console.log(oneCell);
                c++;
                console.log(oneCell.domElements);
                mazeHTML = mazeHTML + oneCell.domElement;
            }
            mazeHTML = mazeHTML + "</div>";
        }
        document.getElementById("maze").innerHTML = mazeHTML;
    }
}