module.exports = function executeCommands(commands) {
    let result = {};
    const MAX_VALUE = 256;
    const FIRST_REGISTER = "V00";
    const rangeIndex = Array.from(Array(8).keys());
    for (const index in rangeIndex)
        result["V0" + index] = 0;

    const processCommands = (arr, subArrLen) => {
        arr.forEach((command, index) => {
            const [inst, ops] = command.split(" ");
            const [op1, op2] = ops.split(",");
            const val1 = result[op1] | 0;

            switch (inst) {
                case "MOV":
                    result[op2] = Number.parseInt(op1) | val1;
                    break;
                case "INC":
                    result[op1] = (val1 + 1) % MAX_VALUE;
                    break;
                case "DEC":
                    const dec = val1 - 1;
                    result[op1] = (MAX_VALUE + dec) % MAX_VALUE;
                    break;
                case "ADD":
                    const val2 = result[op2] | 0;
                    result[op1] = (val1 + val2) % MAX_VALUE;
                    break;
                case "JMP":
                    if (result[FIRST_REGISTER] > 0) {
                        const endSlice = (subArrLen === 0
                            ? index + 1
                            : subArrLen);

                        processCommands(commands.slice(Number(op1), endSlice), endSlice);
                    }
                    break;
            }
        });
    }

    processCommands(commands, 0);
    return Object.values(result);
}