module.exports = function wrapping(gifts) {
    return gifts.map((gift) => {
        let width = gift.length + 2;
        let paper = "*".repeat(width);
        return paper + "\n*" + gift + "*\n" + paper;
    });
}