const selectSleigh = require('../src/challenge12.js');
describe("", () => {
    test("example", () => {
        const distance = 30
        const sleighs = [
            { name: "Dasher", consumption: 0.3 },
            { name: "Dancer", consumption: 0.5 },
            { name: "Rudolph", consumption: 0.7 },
            { name: "Midu", consumption: 1 }
        ]
        expect( selectSleigh(distance, sleighs)).toEqual("Dancer");

        const distance2 = 20
        const sleighs2 = [
            { name: "Dasher", consumption: 1 },
            { name: "Dancer", consumption: 0.5 },
            { name: "Rudolph", consumption: 0.7 },
            { name: "Midu", consumption: 1 }
        ]
        expect( selectSleigh(distance2, sleighs2)).toEqual("Dasher");

        const distance3 = 20
        const sleighs3 = [
            { name: "Dasher", consumption: 1.1 },
            { name: "Dancer", consumption: 1.2 },
            { name: "Rudolph", consumption: 1.3 },
            { name: "Midu", consumption: 1.4 }
        ]
        expect( selectSleigh(distance3, sleighs3)).toBeNull();

        const distance4 = 20
        const sleighs4 = [
            { name: "Dasher", consumption: 0.1 },
            { name: "Dancer", consumption: 0.2 },
            { name: "Rudolph", consumption: 0.3 },
            { name: "Midu", consumption: 1 }
        ]
        expect( selectSleigh(distance4, sleighs4)).toEqual("Midu");

        const distance5 = 20
        const sleighs5 = [
            { name: "Dasher", consumption: 0.90 },
            { name: "Dancer", consumption: 0.95 },
            { name: "Rudolph", consumption: 0.99 },
            { name: "Midu", consumption: 1 }
        ]
        expect( selectSleigh(distance5, sleighs5)).toEqual("Midu");

    });
});