const countTime = require('../src/challenge9.js');
describe("", () => {
    test("", () => {
        expect(countTime([0, 1, 0, 1])).toEqual(7);
        expect(countTime([0, 1, 0, 0])).toEqual(21);
        expect(countTime([0, 1, 1, 0])).toEqual(14);
        expect(countTime([0, 1, 1, 1])).toEqual(7);
        expect(countTime([1, 0, 0, 0])).toEqual(21);
    });

    test("", () => {
        //010 101 010 101
        expect(countTime([0, 1, 0, 1])).toEqual(7);
        expect(countTime([1, 0, 0, 1, 0, 0])).toEqual(14);
        expect(countTime([0, 1, 0, 0, 1, 0])).toEqual(14);
        expect(countTime([0, 1, 1, 0, 1, 1])).toEqual(7);
        expect(countTime([0, 0, 1, 0, 0, 1])).toEqual(14);
        expect(countTime([1, 0, 0, 0, 0, 0])).toEqual(35);
        expect(countTime([0, 0, 0, 0, 0, 1])).toEqual(35);
        expect(countTime([1, 1, 1, 1, 1, 1])).toEqual(0);

        expect(countTime([1, 1, 1, 0, 1])).toEqual(7);
        expect(countTime([1, 0, 1, 0, 1])).toEqual(7);
        expect(countTime([0, 0, 1, 0, 1])).toEqual(14);
        expect(countTime([0, 0, 1, 0, 0])).toEqual(28);

        expect(countTime([0, 0, 1, 0])).toEqual(21);



        expect(countTime([1, 1, 1, 1, 1, 0])).toEqual(7);
        expect(countTime([1, 1, 1, 1, 0, 0])).toEqual(14);
        expect(countTime([1, 1, 1, 1, 0, 1])).toEqual(7);
    });


    test("custom test", () => {
        expect(countTime([0, 0, 0, 1, 0, 1])).toEqual(21);
        //turno 1 on 2 luces
        //turno 2 1
        //turno 3 1

        //0  1 0, 0, 0, 1, 0, 1
        //7  1 1, 0, 0, 1, 1, 1
        //14 1 1, 1, 0, 1, 1, 1
        //21 1 1, 1, 1, 1, 1, 1

        expect(countTime([1, 0, 0, 1, 0, 0])).toEqual(14);
        //turno 1  2
        //turno 2 2
        //turno 3

        expect(countTime([1, 0, 0, 1, 0, 0])).toEqual(14);

        expect(countTime([1, 0, 0, 0])).toEqual(21);
    });

    test("2 elems", () => {
        expect(countTime([0, 1])).toEqual(7);
        expect(countTime([1, 1])).toEqual(0);
        expect(countTime([1, 0])).toEqual(7);
    });

    test("3 elems", () => {
        //1 0 0 1
        expect(countTime([0, 0, 1])).toEqual(14);
        // [1, 1]
        //1 0 0 1
        //0 0, 0, 1
        //7 1, 0, 1
        //14 1, 1, 1
        expect(countTime([0, 1, 0])).toEqual(14);
        //0  0, 1, 0
        //7  0, 1, 1
        //14 1, 1, 1

        expect(countTime([0, 1, 1])).toEqual(7);
        //0 0, 1, 1
        //7 1, 1, 1
        expect(countTime([1, 0, 0])).toEqual(14);
        //0 1, 0, 0
        //7 1, 1, 0
        //14 1, 1, 1
        expect(countTime([1, 0, 1])).toEqual(7);
        //0 1, 0, 1
        //7 1, 1, 1
        expect(countTime([1, 1, 0])).toEqual(7);
        //0 1, 1, 0
        //7 1, 1, 1
        expect(countTime([1, 1, 1])).toEqual(0);
    });

    test("4 elems", () => {
        expect(countTime([0, 0, 0, 1])).toEqual(21);
        //[1, 1, 1]
        //0 0, 0, 0, 1
        //7 1, 0, 0, 1
        //14 1, 1, 0, 1
        //21 1, 1, 1, 1

        expect(countTime([0, 0, 1, 0])).toEqual(21);
        //100 000 001 010
        //0 0, 0, 1, 0
        //7 0, 0, 1, 1
        //14 1, 0, 1, 1
        //21 1, 1, 1, 1

        expect(countTime([0, 0, 1, 1])).toEqual(14);
        //0 0, 0, 1, 1
        //7 1, 0, 1, 1
        //14 1, 1, 1, 1

        expect(countTime([0, 1, 0, 0])).toEqual(21);
        //0 0, 1, 0, 0
        //7 0, 1, 1, 0
        //14 0, 1, 1, 1
        //21 1, 1, 1, 1

        expect(countTime([0, 1, 0, 1])).toEqual(7);
        //0 0, 1, 0, 1
        //7 1, 1, 1, 1
        expect(countTime([0, 1, 1, 0])).toEqual(14);
        //0 0, 1, 1, 0
        //7 0, 1, 1, 1
        //14 1, 1, 1, 1
        expect(countTime([0, 1, 1, 1])).toEqual(7);
        //0 0, 1, 1, 1
        //7 1, 1, 1, 1
        expect(countTime([1, 0, 0, 0])).toEqual(21);
        //0 1, 0, 0, 0
        //7 1, 1 0, 0
        //14 1, 1 1, 0
        //21 1, 1 1, 1
        expect(countTime([1, 0, 0, 1])).toEqual(14);
        //0 1, 0, 0, 1
        //7 1, 1, 0, 1
        //14 1, 1, 1, 1
        expect(countTime([1, 0, 1, 0])).toEqual(7);
        //0 1, 0, 1, 0
        //7 1, 1, 1, 1
        expect(countTime([1, 0, 1, 1])).toEqual(7);
        //0 1, 0, 1, 1
        //7 1, 1, 1, 1
        expect(countTime([1, 1, 0, 0])).toEqual(14);
        //0 1, 1, 0, 0
        //7 1, 1, 1, 0
        //14 1, 1, 1, 1
        expect(countTime([1, 1, 0, 1])).toEqual(7);
        //0 1, 1, 0, 1
        //7 1, 1, 1, 1
        expect(countTime([1, 1, 1, 0])).toEqual(7);
        //0 1, 1, 1, 0
        //7 1, 1, 1, 1
        expect(countTime([1, 1, 1, 1])).toEqual(0);
    });

    test("5 elem", () => {
        expect(countTime([0, 1, 1, 0, 1])).toEqual(7);
        //0 0, 1, 1, 0, 1
        //7 0, 1, 1, 1, 1

        expect(countTime([0, 0, 1, 0, 0])).toEqual(28);
        //0 00100
        //7 00110
        //14 00111
        //21 10111
        //28 11111

        const leds = [0, 1, 1, 0, 1]
        expect(countTime(leds)).toEqual(7);
    });

    test("6 elem", () => {
        expect(countTime([0, 0, 0, 1, 0, 1])).toEqual(21);
        //turno 2
        //turno  1
        //turno 1

        //0  0, 0, 0, 1, 0, 1
        //7  1, 0, 0, 1, 1, 1
        //14 1, 1, 0, 1, 1, 1
        //21 1, 1, 1, 1, 1, 1

        expect(countTime([1, 0, 0, 1, 0, 0])).toEqual(14);
        //0  1, 0, 0, 1, 0, 0
        //7  1, 1, 0, 1, 1, 0
        //14 1, 1, 1, 1, 1, 1

        expect(countTime([1, 1, 0, 0, 0, 0])).toEqual(28);
        //turno 1
        //turno 1
        //turno 1
        //turno 1
        //turno

        //0 1, 1, 0, 0, 0, 0
        //7 1, 1, 1, 0, 0, 0
        //14 1, 1, 1, 1, 0, 0
        //21 1, 1, 1, 1, 1, 0
        //28 1, 1, 1, 1, 1, 1
    });

    test("7", () => {
        expect(countTime([1, 1, 1, 1, 1, 1, 1])).toEqual(0);
    });

    test("8 elems", () => {
        expect(countTime([1, 0, 0, 1, 0, 0, 1, 0])).toEqual(14);
        //0  1, 0, 0, 1, 0, 0, 1, 0
        //7  1, 1, 0, 1, 1, 0, 1, 1
        //14 1, 1, 1, 1, 1, 1, 1, 1
    });
});