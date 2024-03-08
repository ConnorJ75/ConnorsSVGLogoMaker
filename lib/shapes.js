class Shape {
    constructor(){
        this.fs = require("fs");
        this.color = "white";
        this.lineColor = "black";
        this.text = "";
        this.textColor = "red";
    }
    setColor(c){
        this.color = c;
    }
    setText(t){
        this.text = t;
    }
    setLineColor(lc){
        this.lineColor = lc;
    }
    setTextColor(tc){
        this.textColor = tc;
    }
}
class Triangle extends Shape{
    constructor(){
        super();
        this.shape = "polygon";
        this.points = "150, 18 244, 182 56, 182";
    }
    render(){
        let shapeStr = `<${this.shape} points="${this.points}" fill="${this.color}" />`;
        this.fs.writeFileSync("./shapeTester.svg", 
        `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg"> 
        ${shapeStr}
        </svg>`);
        return shapeStr;
    }
}
class Circle extends Shape{

}
class Square extends Shape{
    
}
module.exports = {Triangle, Circle, Square}