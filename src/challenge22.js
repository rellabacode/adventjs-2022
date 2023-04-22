module.exports = function checkStepNumbers(systemNames, stepNumbers) {
    const systems = [...new Set(systemNames)];
    const systemNumbers = {};
    const INIT = -1
    for (const systemKey in systems)
        systemNumbers[systems[systemKey]] = [INIT]

    const res = systemNames.every((system, index) => {
        let prev = systemNumbers[system].pop();
        const number = stepNumbers[index];
        if (prev >= number) return false;
        systemNumbers[system].shift();
        systemNumbers[system].push(number);
        return true;
    });

    return res;
}