const dryNumber = require('../src/challenge18.js');
describe("", () => {
    test("0", () => {
        const result =
            [10, 20, 30, 40, 50];
        expect(dryNumber(0, 50)).toEqual(result);
    });

    test("example 1", () => {
        const result =
            [1, 10, 11, 12, 13, 14, 15];
        expect(dryNumber(1, 15)).toEqual(result);
    });

    test("example 2", () => {
        const result =
            [2, 12, 20];
        expect(dryNumber(2, 20)).toEqual(result);
    });
});