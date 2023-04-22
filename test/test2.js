const countHours = require('../src/challenge2.js');

describe("count extra hours suite", () => {

    test("example test", () => {
        const year = 2022;
        const holidays = ['01/06', '04/01', '12/25']; // formato MM/DD
        const expected = 4;
        expect(countHours(year, holidays)).toEqual(expected);
    });

    test("leap test", () => {
        const year = 2024;
        const holidays = ['02/29'];
        const expected = 2;
        expect(countHours(year, holidays)).toEqual(expected);
    });

    test("murcia oficial holidays", () => {
        const year = 2022;
        const holidays = ['01/01', '01/06', '03/19', '04/14',
            '04/15', '04/19', '05/02', '06/09', '08/15', '09/13',
            '10/12', '11/01', '12/06', '12/08', '12/26'];
        const expected = 26;
        expect(countHours(year, holidays)).toEqual(expected);
    });

    test("old age test", () => {
        const year = 1985;
        const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'];
        const expected = 10;
        expect(countHours(year, holidays)).toEqual(expected);
    });

    test("old age test 2", () => {
        const year = 2000;
        const holidays = ['01/01'];
        const expected = 0;
        expect(countHours(year, holidays)).toEqual(expected);
    });
});
