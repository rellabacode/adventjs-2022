const getGiftsToRefill = require('../src/challenge7.js');
describe("test gift inventory", () => {
    test("example 1", () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'muñeca', 'coche']
        const a3 = ['bici', 'pc', 'pc']
        const expected = ['muñeca', 'pc'];
        expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(expected);
    });

    test("custom example 2", () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'coche', 'coche']
        const a3 = ['bici', 'coche', 'bici']
        const expected = [];
        expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(expected);
    });

    test("unique at first", () => {
        const a1 = ['muñeca', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'coche', 'coche']
        const a3 = ['bici', 'coche', 'bici']
        const expected = ['muñeca'];
        expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(expected);
    });

    test("unique at second", () => {
        const a1 = ['coche', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'muñeca', 'coche', 'coche']
        const a3 = ['bici', 'coche', 'bici']
        const expected = ['muñeca'];
        expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(expected);
    });

    test("unique at third", () => {
        const a1 = ['coche', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'coche', 'coche']
        const a3 = ['bici', 'muñeca', 'bici']
        const expected = ['muñeca'];
        expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(expected);
    });

});