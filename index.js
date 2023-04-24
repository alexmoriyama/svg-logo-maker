const inquirer = require("inquirer")
const {Circle, Triangle, Square} = require("./lib/shapes.js")
const SVG = require("./lib/svg.js")
const {writeFile} = require("fs/promises")

inquirer.prompt([
    {
        name:"text",
        type: "input",
        message: "Please enter up to three characters for your logo.",
        validate: (text)=>text.length<=3 || "Please add no more than 3 characters."
    },
    {
        name:"textColor",
        type: "input",
        message: "Please enter a color for your text.",
    },
    {
        name:"shape",
        type: "list",
        message: "Please select one of the options below:",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        name:"shapeColor",
        type: "input",
        message: "Please enter a color for your shape.",
    },
  ])
  .then((answers) => {
    let shape;
    if (answers.shape === "Circle"){
        shape = new Circle()
    } else if (answers.shape === "Triangle"){
        shape = new Triangle()
    } else if (answers.shape === "Square"){
        shape = new Square()
    }
    shape.setColor(answers.shapeColor)
    const svg = new SVG()
    svg.setText(answers.text,answers.textColor)
    svg.setShape(shape)
    return writeFile("logo.svg",shape.render())
  })
  .then(() => {
    console.log("Your SVG has been created!")
  })
  .catch((err) => {
    console.log("There was an error created your SVG!")
    console.log(err)
  });