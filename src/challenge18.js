module.exports = function dryNumber(dry, numbers) {
    let barCodes = [...Array(numbers+1).keys()];
    barCodes.shift();

    const includeNumber = (barCode) => (barCode + "").includes(dry);
    const affected = barCodes.filter(includeNumber);
    return affected;
}