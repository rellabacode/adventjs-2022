const printTable = require('../src/challenge21.js');
describe("", () => {
    console.log = function() {}

    test("custom 1", () => {
        const result = printTable([
            {name: 'Game', quantity: 2},
            {name: 'Bikeee', quantity: 1},
            {name: 'Book', quantity: 3}
        ])
        console.log(result)
    });

    test("custom 2", () => {
        const result = printTable([
            {name: 'PlayStation 5', quantity: 9234782374892},
            {name: 'Book Learn Web Dev', quantity: 23531}
        ]);
        console.log(result)
    });

    test("custom 3", () => {
        const result = printTable([
            {name: 'a', quantity: 2},
            {name: 'b', quantity: 1},
            {name: 'c', quantity: 3}
        ])
        console.log(result)
    });
});