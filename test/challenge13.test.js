const getFilesToBackup = require('../src/challenge13.js');
describe("", () => {
    test("empty input", () => {
        const lastBackup = 1546300800
        expect(getFilesToBackup(lastBackup, [])).toEqual([]);
    });

    test("empty result", () => {
        const lastBackup = 1546300800
        const changes2 = [
            [3, 1536301100],
            [2, 1536300800],
            [1, 1536300800],
            [1, 1536300900],
            [1, 1536301000]
        ]
        expect(getFilesToBackup(lastBackup, changes2)).toEqual([]);
    });
    test("only one at first", () => {
        const lastBackup = 1546300800
        const changes3 = [
            [3, 1546301100],
            [2, 1536300800],
            [1, 1536300800],
            [1, 1536300900],
            [1, 1536301000]
        ]
        expect(getFilesToBackup(lastBackup, changes3)).toEqual([3]);
    });
    test("only one at the end", () => {
        const lastBackup = 1546300800
        const changes4 = [
            [3, 1536300800],
            [2, 1536300800],
            [1, 1536300800],
            [1, 1536300900],
            [1, 1546301100]
        ]
        expect(getFilesToBackup(lastBackup, changes4)).toEqual([1]);
    });

    test("only one at the end after sort", () => {
        const lastBackup = 1546300800
        const changes4 = [
            [3, 1536300800],
            [2, 1536300800],
            [1, 1536300800],
            [1, 1536300900],
            [5, 1546301100]
        ]
        expect(getFilesToBackup(lastBackup, changes4)).toEqual([5]);
    });



    test("more than one unordered", () => {
        const lastBackup = 1546300800
        const changes = [
            [3, 1546301100],
            [2, 1546300800],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 3]);
    });


    test("all are changes", () => {
        const lastBackup = 1675728000
        const changes = [
            [3, 1675731600],
            [2, 1675735200],
            [1, 1675738800],
            [1, 1675742400],
            [1, 1675746000]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 2, 3]);
    });

    test("all are changes", () => {
        const lastBackup = 1675728000
        const changes = [
            [3, 1675727000],
            [2, 1675735200],
            [1, 1675727000],
            [1, 1675742400],
            [1, 1675727000]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 2]);
    });

    test("only one change with one", () => {
        const lastBackup = 1675728000
        const changes = [
            [3, 1675728001]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([3]);
    });

    test("only one change with two", () => {
        const lastBackup = 1675728000
        const changes = [
            [2, 1675728000],
            [3, 1675728001]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([3]);
    });

    test("only one change with two", () => {
        const lastBackup = 1675728000
        const changes = [
            [3, 1675728001],
            [2, 1675728000]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([3]);
    });

    test("two changes with two", () => {
        const lastBackup = 1675728000
        const changes = [
            [20, 1675728001],
            [9, 1705728000],
            [2, 1675728000]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([9, 20]);
    });

    test("empty with one", () => {
        const lastBackup = 1675728000
        const changes = [
            [3, 1675728000]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([]);
    });

    test("empty with one", () => {
        const lastBackup = 1675728000
        const changes = [
            [3, 1675728000]
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([]);
    });

    test("all are changes", () => {
        const lastBackup = 1675746000
        const changes = [
            [79, 1675746059],
            [1, 1675746002],
            [39, 1675746019],
            [15, 1675746009],
            [3, 1675746001],
            [120, 1675746001],
        ]
        expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 3, 15, 39, 79, 120]);
    });
});