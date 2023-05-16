const distributeGifts = require('../src/challenge3.js');


describe("count extra hours suite", () => {
    test("empty test", () => {
        const packOfGifts = [];
        const reindeers = [];
        const expected = 0;        
        expect(distributeGifts(packOfGifts, reindeers)).toEqual(expected);
    });    

    test("gift empty", () => {
        const packOfGifts = [];
        const reindeers = ["dasher", "dancer"];
        const expected = 0;        
        expect(distributeGifts(packOfGifts, reindeers)).toEqual(expected);
    });        

    test("reindeer empty", () => {
        const packOfGifts = ["book", "doll", "ball"];
        const reindeers = [];
        const expected = 0;        
        expect(distributeGifts(packOfGifts, reindeers)).toEqual(expected);
    });     


    test("equals test", () => {
        const packOfGifts = ["book", "doll", "ball"];
        const reindeers = ["pa", "ju", "jo"];
        const expected = 1;        
        expect(distributeGifts(packOfGifts, reindeers)).toEqual(expected);
    });     



    test("example test", () => {
        const packOfGifts = ["book", "doll", "ball"];
        const reindeers = ["dasher", "dancer"];
        const expected = 2;        
        expect(distributeGifts(packOfGifts, reindeers)).toEqual(expected);
    });
});