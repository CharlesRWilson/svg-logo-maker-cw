const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./shapes');
const { writeFile } = require('./fileHandler');

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
            shapeInstance = new Circle();
            break;
        case 'triangle':
            shapeInstance = new Triangle();
            break;
        case 'square':
            shapeInstance = new Square();
            break;
    }

    shapeInstance.setColor(answers.shapeColor);

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                            ${shapeInstance.render()}
                            <text x="150" y="100" fill="${answers.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${answers.text}</text>
                        </svg>`;

    writeFile('dist/logo.svg', svgContent);
    console.log('Generated logo.svg');
});
