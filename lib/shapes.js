class Shape {
    constructor(){
        this.color = "white";
        this.shape = "";
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
        let shapeStr = 
        `<${this.shape} points="${this.points}" fill="${this.color}" />
        <text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

        return shapeStr;
    }
}
class Circle extends Shape{
    constructor(){
        super();
        this.shape = "circle";
    }
    render(){
        let shapeStr = 
        `<${this.shape} cx="110" cy="110" r="100" fill="${this.color}" />
        <text x="112" y="133" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

        return shapeStr;
    }
}
class Square extends Shape{
    constructor(){
        super();
        this.shape = "rect";
    }
    render(){
        let shapeStr = 
        `<${this.shape} x="10" y="10" width="180" height="180" fill="${this.color}" />
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

        return shapeStr;
    }
}
module.exports = {Triangle, Circle, Square}