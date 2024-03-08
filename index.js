const inquirer = require("inquirer");

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
    });
}

getLogoDetails();