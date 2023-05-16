const getCompleted = require('../src/challenge11.js');
describe("", () => {
    test("example", () => {
        expect(getCompleted('01:00:00', '03:00:00')).toEqual("1/3");
        expect(getCompleted('02:00:00', '04:00:00')).toEqual("1/2");
        expect(getCompleted('01:00:00', '01:00:00')).toEqual("1/1");
        expect(getCompleted('00:10:00', '01:00:00')).toEqual("1/6");
        expect(getCompleted('01:10:10', '03:30:30')).toEqual("1/3");
        expect(getCompleted('03:30:30', '05:50:50')).toEqual("3/5");
    });
});