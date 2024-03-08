const { Triangle, Square, Circle } = require("./shapes");

test('binarySearch is a defined function', () => {
    let tempTriangle = new Triangle();
    tempTriangle.setColor("blue");
    expect(tempTriangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// let tempTriangle = new Triangle();
// tempTriangle.setColor("blue");
// console.log(tempTriangle.render());
