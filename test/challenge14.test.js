const getOptimalPath = require('../src/challenge14.js');
describe("", () => {
    test("only one node", () => {
        expect(getOptimalPath([[1]])).toEqual(1);
    });

    test("two levels", () => {
        const input = [
            [0],
            [7, 4]
        ];
        expect(getOptimalPath(input)).toEqual(4);
    });

    test("two levels", () => {
        const input = [
            [-1],
            [-2, -3]
        ];
        expect(getOptimalPath(input)).toEqual(-4);
    });

    test("three leves", () => {
        const input = [
            [0],
            [7, 4],
            [2, 4, 6]
        ];
        expect(getOptimalPath(input)).toEqual(8);
    });

    test("fourth leves", () => {
        const input = [
            [0],
            [7, 4],
            [2, 4, 6],
            [7, 9, 3, 1]
        ];
        expect(getOptimalPath(input)).toEqual(11);
    });

    test("five leves", () => {
        const input = [
            [0],
            [7, 4],
            [2, 4, 6],
            [7, 9, 3, 1],
            [1, 2, 3, 4, 5]
        ];
        //4 4 3 3
        expect(getOptimalPath(input)).toEqual(14);
    });

    test("six leves", () => {
        const input = [
            [9],
            [7, 4],
            [2, 4, 6],
            [7, 9, 3, 1],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5, 6]
        ];
        //4 4 3 3
        expect(getOptimalPath(input)).toEqual(26);
    });



    test("example1", () => {
        const input = [
            [0],
            [7, 4],
            [2, 4, 6],
            [7, 8, 9, 10],
        ];
        expect(getOptimalPath(input)).toEqual(16);
    });

    test("example2", () => {
        expect(getOptimalPath([[0], [2, 3]])).toEqual(2);
    });

    test("example3", () => {
        expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toEqual(5);
    });

    test("", () => {
        expect(getOptimalPath([
            [1],
            [1, 5],
            [7, 5, 8],
            [9, 4, 1, 3]])).toEqual(8);
    });


});