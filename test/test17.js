const carryGifts = require('../src/challenge17.js');

describe("", () => {
    test("ex1", () => {
        const result = ['game bike', 'book toy'];
        expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual(result);
    });

    test("ex2", () => {
        const result = ['game', 'bike', 'book toy'];
        expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toEqual(result);
    });

    test("ex3", () => {
        const result = carryGifts(['game', 'bike', 'book', 'toy'], 4);
        expect(carryGifts(['game', 'bike', 'book', 'toy'], 4)).toEqual(result);
    });

    test("ex4", () => {
        const result = ['toy', 'gamme', 'toy', 'bike'];
        expect(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)).toEqual(result);
    })

    test("ex5", () => {
        expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)).toEqual([]);
    });


});