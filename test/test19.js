const sortToys = require('../src/challenge19.js');
describe("", () => {
    test("example 1", () => {
        const toys = ['ball', 'doll', 'car', 'puzzle']
        const positions = [2, 3, 1, 0]
        const result = ['puzzle', 'car', 'ball', 'doll']

        expect(sortToys(toys, positions)).toEqual(result);
    });

    test("example 2", () => {
        const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
        const morePositions = [8, 6, 5, 7, 9]
        const result = ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
        expect(sortToys(moreToys, morePositions)).toEqual(result);
    });

});