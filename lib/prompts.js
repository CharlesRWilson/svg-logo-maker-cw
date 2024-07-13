const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => input.length <= 3 || 'You can only enter up to three characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):'
    }
];

inquirer.prompt(questions).then(answers => {
    let shapeInstance;
    switch (answers.shape) {
        case 'circle':
            shapeInstance = new Circle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case 'triangle':
            shapeInstance = new Triangle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case 'square':
            shapeInstance = new Square(answers.text, answers.textColor, answers.shapeColor);
            break;
    }

    const svgContent = shapeInstance.render();
    fs.writeFileSync('examples/logo.svg', svgContent);
    console.log('Generated logo.svg');
});
