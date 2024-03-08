const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter the text you want in your logo(3 letters max):",
        validate: (text) => {
            if (text.length > 3) {
                return "Text needs to be less than 3 letters!";
            }
      
            return true;
         }
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter the color you want your logo TEXT to be(can be hex value):",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape do you want your logo to be?(use arrow keys):",
        choices: ["Triangle", "Circle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter the color you want your logo SHAPE to be(can be hex value):",
    },  
]
function getLogoDetails() {
    inquirer.prompt(questions).then((responses)=>{
        console.log(responses);
        if (responses.shape === 'Triangle'){
            let newTri = new Triangle();
            newTri.setColor(responses.shapeColor);
            newTri.setText(responses.text);
            newTri.setTextColor(responses.textColor);
            fs.writeFileSync("./shapeTester.svg", 
            `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg"> 
                ${newTri.render()}
            </svg>`);
        }
        else if (responses.shape === 'Circle'){
            let newCirc = new Circle();
            newCirc.setColor(responses.shapeColor);
            newCirc.setText(responses.text);
            newCirc.setTextColor(responses.textColor);
            fs.writeFileSync("./shapeTester.svg", 
            `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg"> 
                ${newCirc.render()}
            </svg>`);
        }
        else if (responses.shape === 'Square'){
            let newSquare = new Square();
            newSquare.setColor(responses.shapeColor);
            newSquare.setText(responses.text);
            newSquare.setTextColor(responses.textColor);
            fs.writeFileSync("./shapeTester.svg", 
            `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg"> 
                ${newSquare.render()}
            </svg>`);
        }
    });
}

getLogoDetails();