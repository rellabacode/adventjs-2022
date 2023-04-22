module.exports = function decorateTree(base) {
    const dictionary = {
        "RR": "R", "BB": "B",
        "PP": "P", "BR": "P",
        "RB": "P",
        "BP": "R", "PB": "R",
        "RP": "B", "PR": "B"
    };

    const genRow = (prevRow) => {
        const numIts = prevRow.length - 1;
        let result = "";
        [...Array(numIts)].forEach((_, index) => {
            const letter = prevRow[index];
            const next = prevRow[index + 1];
            const key = letter + next;
            const value = dictionary[key];
            result += value + " ";
        });
        return result.trim();
    }

    const basePacked = base.split(" ");
    const numIts = basePacked.length - 1;
    let subtree = basePacked;
    let tree = [base];

    [...Array(numIts)].forEach((_, numIt) => {
        let row = genRow(subtree);
        tree = [row].concat(tree);
        subtree = row.split(" ");
    });

    return tree;
}