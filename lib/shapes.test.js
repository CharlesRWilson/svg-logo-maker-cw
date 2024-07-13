const { Circle, Triangle, Square } = require('./shapes');

describe('Shape', () => {
    test('Circle renders correctly', () => {
        const circle = new Circle('ABC', 'black', 'red');
        expect(circle.render()).toContain('<circle');
    });

    test('Triangle renders correctly', () => {
        const triangle = new Triangle('ABC', 'black', 'red');
        expect(triangle.render()).toContain('<polygon');
    });

    test('Square renders correctly', () => {
        const square = new Square('ABC', 'black', 'red');
        expect(square.render()).toContain('<rect');
    });
});