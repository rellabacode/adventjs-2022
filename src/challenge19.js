module.exports = function sortToys(toys, positions) {
    const numToys = toys.length;
    let filled = new Array(numToys).fill("");
    for (const index of positions) {
        filled[index] = toys.shift();
    }
    const result = filled.filter((field) => field !== "");
    return result;
}