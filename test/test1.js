const wrapping = require('../src/challenge1.js');

describe('wrap gifts suite', () => {
    test('empty gifts', () => {
        const expected = [];
        const gifts = [];
        expect(wrapping(gifts)).toStrictEqual(expected);
    });

    test('gift of size 1', () => {
        const expected = [
            "***\n*a*\n***"
        ];

        const gifts = ["a"];
        expect(wrapping(gifts)).toStrictEqual(expected);
    });


    test('gift of size 2', () => {
        const expected = [
            "****\n*ab*\n****"
        ];

        const gifts = ["ab"];
        expect(wrapping(gifts)).toStrictEqual(expected);
    });


    test('gift of size 3', () => {
        const expected = [
            "*****\n*abc*\n*****"
        ];

        const gifts = ["abc"];
        expect(wrapping(gifts)).toStrictEqual(expected);
    });


    test('codigocaballer', () => {
        const expected = [
            "****************\n*codigocaballer*\n****************"
        ];

        const gifts = ["codigocaballer"];
        expect(wrapping(gifts)).toStrictEqual(expected);
    });


    test('midu', () => {
        const expected = [
            "******\n*midu*\n******"
        ];

        const gifts = ["midu"];
        expect(wrapping(gifts)).toStrictEqual(expected);
    });

    test('wrap 3 gifts', () => {
        const expected = [
            "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"
        ];

        const gifts = ["cat", "game", "socks"];
        expect(wrapping(gifts)).toStrictEqual(expected);
    });

});
