const fitsInOneBox = require('../src/challenge4.js');


describe("all box in one suite", () => {
    test("undefined test", () => {
        expect(fitsInOneBox(undefined)).toBeFalsy();
    });

    test("empty test", () => {
        expect(fitsInOneBox([])).toBeFalsy();
    });

    test("one test", () => {
        expect(fitsInOneBox([{ w: 1, h: 2, l: 3 }])).toBeTruthy();
    });

    test("two test", () => {
        expect(fitsInOneBox([{ w: 1, h: 2, l: 3 }, { w: 1, h: 1, l: 3 }])).toBeFalsy();
    });

    test("example test", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
        ]
        expect(fitsInOneBox(boxes)).toBeTruthy();
    });


    test("example test 2", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 3, w: 1, h: 3 }
        ]

        expect(fitsInOneBox(boxes)).toBeFalsy();
    });

    test("unordered example test", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 3, w: 3, h: 3 },
            { l: 2, w: 2, h: 2 }
        ];

        expect(fitsInOneBox(boxes)).toBeTruthy();
    });
});