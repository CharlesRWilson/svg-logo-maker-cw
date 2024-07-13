class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    renderText(x, y) {
        return `<text x="${x}" y="${y}" fill="${this.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
    }
}

class Circle extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                    ${this.renderText(150, 100)}
                </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,20 280,180 20,180" fill="${this.shapeColor}" />
                    ${this.renderText(150, 120)}
                </svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
                    ${this.renderText(150, 100)}
                </svg>`;
    }
}

module.exports = { Circle, Triangle, Square };
