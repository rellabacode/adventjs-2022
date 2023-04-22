const decorateTree = require('../src/challenge15.js');
describe("", () => {
    test("ONE ELEMENT", () => {
        const result =
            [
                'R',
            ]
        expect(decorateTree('R')).toEqual(result);
    });

    test("example 2", () => {
        const result = ['B', 'B B'];
        expect(decorateTree('B B')).toEqual(result);
    });

    test("example 1", () => {
        const result =
            [
                'R',
                'P B',
                'R B B',
                'B P R P'
            ]
        expect(decorateTree('B P R P')).toEqual(result);
    });
});