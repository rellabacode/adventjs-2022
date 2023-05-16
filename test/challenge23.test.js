const executeCommands = require('../src/challenge23.js');
describe("", () => {
    test("example 1", () => {
        const input = [
            'MOV 5,V00',  // V00 es 5
            'MOV 10,V01', // V01 es 10
            'DEC V00',    // V00 ahora es 4
            'ADD V00,V01' // V00 = V00 + V01 = 14
        ];

        const result = [14, 10, 0, 0, 0, 0, 0, 0];
        expect(executeCommands(input)).toEqual(result);
    });

    test("example 2", () => {
        const input = [
            'MOV 255,V00', // V00 es 255
            'INC V00',     // V00 es 256, desborda a 0
            'DEC V01',     // V01 es -1, desborda a 255
            'DEC V01'      // V01 es 254
        ]

        const result = [0, 254, 0, 0, 0, 0, 0, 0];
        expect(executeCommands(input)).toEqual(result);
    });

    test("example 3", () => {
        const result = [0, 10, 0, 0, 0, 0, 1, 0];
        expect(executeCommands([
            'MOV 10,V00', // V00 es 10
            'DEC V00',    // decrementa V00 en 1  <---┐
            'INC V01',    // incrementa V01 en 1      |
            'JMP 1',      // bucle hasta que V00 sea 0 ----┘
            'INC V06'     // incrementa V06 en 1
        ])).toEqual(result);

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
    });

    test("custom example 1", () => {
        const result = [254, 255, 0, 0, 0, 0, 0, 0];
        expect(executeCommands([
            'DEC V00', //255
            'MOV 255,V01',
            'ADD V00,V01'
        ])).toEqual(result);
    });

    test("custom example 2", () => {
        const result = [0, 0, 0, 0, 0, 255, 0, 255];
        expect(executeCommands([
            'MOV 255,V01',
            'INC V01',
            'DEC V07',
            'ADD V05,V07'
        ])).toEqual(result);
    });

    test("custom example 3", () => {
        const result = [13, 254, 125, 254, 133, 2, 5, 0];
        expect(executeCommands([
            'MOV 255,V01',
            'MOV 255,V03',
            'ADD V01,V03',
            'MOV V01,V03',
            'MOV 125,V02',
            'MOV 133,V04',
            'ADD V05,V02',
            'ADD V05,V04',
            'MOV 3,V00',
            'DEC V00',
            'JMP 9',
            'MOV 13,V00',
            'MOV 6,V06',
            'DEC V06'
        ])).toEqual(result);
    });


});