const {Circle, Triangle, Square} = require("./shapes.js")

describe("Triangle", ()=>{
    test("Should render SVG for blue triangle element", ()=>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe("Circle", ()=>{
    test("Should render SVG for blue circle element", ()=>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    })
})

describe("Square", ()=>{
    test("Should render SVG for blue square element", ()=>{
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
    })
})