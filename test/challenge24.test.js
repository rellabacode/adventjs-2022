const canExit = require('../src/challenge24.js');
describe("", () => {
    test("example 1", () => {
        const input = [
            [' ', ' ', 'W', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ];
        expect(canExit(input)).toBeTruthy();
    });

    test("example 2", () => {
        const input = [
            [' ', ' ', 'W', 'W', 'S'],
            [' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', 'W', ' '],
            ['W', 'W', ' ', 'W', 'W'],
            [' ', ' ', ' ', ' ', 'E']
        ];
        expect(canExit(input)).toBeFalsy();
    });
});