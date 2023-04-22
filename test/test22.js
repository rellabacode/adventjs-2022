const checkStepNumbers = require('../src/challenge22.js');
describe("", () => {
    test("custom 1", () => {
        const systemNames = ["tree_1"]
        const stepNumbers = [1]
        expect(checkStepNumbers(systemNames, stepNumbers)).toBeTruthy();
    });

    test("custom 2", () => {
        const systemNames = ["tree_1", "tree_2"]
        const stepNumbers = [1, 2]
        expect(checkStepNumbers(systemNames, stepNumbers)).toBeTruthy();
    });

    test("custom 3", () => {
        const systemNames = ["tree_1", "tree_2", "tree_2"]
        const stepNumbers = [1, 2, 1]
        expect(checkStepNumbers(systemNames, stepNumbers)).toBeFalsy();
    });

    test("custom 4", () => {
        const systemNames = ["tree_1", "tree_2", "tree_2"]
        const stepNumbers = [1, 2, 0]
        expect(checkStepNumbers(systemNames, stepNumbers)).toBeFalsy();
    });

    test("custom 5", () => {
        const systemNames = ["tree_1", "tree_2", "tree_2"]
        const stepNumbers = [1, 2, -1]
        expect(checkStepNumbers(systemNames, stepNumbers)).toBeFalsy();
    });


    test("example 1", () => {
        const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
        const stepNumbers = [1, 33, 10, 2, 44, 20]
        expect(checkStepNumbers(systemNames, stepNumbers)).toBeTruthy();
    });

    test("test 4", () => {
        expect(checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])).toBeTruthy();
    });

    test("example 2", () => {
        expect(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])).toBeFalsy();
    });
});