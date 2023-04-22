const checkJump = require('../src/challenge10.js');

describe("", () => {
    test("example", () => {
        expect(checkJump([1, 2, 1])).toBeTruthy();
        expect(checkJump([1, 3, 8, 5, 2])).toBeTruthy();
        expect(checkJump([1, 7, 3, 5])).toBeFalsy();
        expect(checkJump([1, 2, 3, 2, 1])).toBeTruthy();
        expect(checkJump([1, 2, 2, 2, 1])).toBeTruthy();
        expect(checkJump([0, 1, 0])).toBeTruthy();
        expect(checkJump([2, 2, 2, 2])).toBeFalsy();
        expect(checkJump([1, 2, 3])).toBeFalsy();
        expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBeFalsy();
        expect(checkJump([1, 1000, 900, 800])).toBeTruthy();
        expect(checkJump([1, 1000, 100, 800])).toBeFalsy();
        expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBeTruthy();
        expect(checkJump([1, 2, 3, 1, 3, 1])).toBeFalsy();
        expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBeFalsy();
    });


    test("custom", () => {
        //asc desc
        let heights = [1, 3, 8, 5, 2];
        expect(checkJump(heights)).toBeTruthy();

        //asc & desc with two points constants
        heights = [1, 3, 3, 8, 5, 5, 2];
        expect(checkJump(heights)).toBeTruthy();

        //asc & desc with one point asc with a repition greater than one
        heights = [1, 3, 3, 3, 8, 5, 5, 2];
        expect(checkJump(heights)).toBeTruthy();

        //asc & desc with one point desc with a repition greater than one
        heights = [1, 3, 3, 8, 5, 5, 5, 2];
        expect(checkJump(heights)).toBeTruthy();

        //asc desc asc
        heights = [1, 7, 3, 5];
        expect(checkJump(heights)).toBeFalsy();

        //desc
        heights = [8, 3, 2, 4, 6];
        expect(checkJump(heights)).toBeFalsy();

        //desc
        heights = [4, 3, 2, 1];
        expect(checkJump(heights)).toBeFalsy();

        heights = [1, 2];
        expect(checkJump(heights)).toBeFalsy();

        heights = [2, 2];
        expect(checkJump(heights)).toBeFalsy();

        heights = [2, 1];
        expect(checkJump(heights)).toBeFalsy();

    });
});