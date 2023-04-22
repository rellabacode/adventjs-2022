module.exports = function printTable(gifts) {
    const mapLen = gift => ({name: gift.name.length, qty: (gift.quantity + "").length});
    let lengths = gifts.map(mapLen);

    const GIFT_MIN_WIDTH = 4;
    const QTY_MIN_WIDTH = 8;
    const PAD_LEN = 2;
    const V_LEN = 3;
    const CARRIAGE_RETURN = "\n";
    const V_BORDER = "|";
    const SPACE = " ";
    const MINUS = "-";
    const SUM = "+";
    const MULT = "*";
    const START_LINE = V_BORDER + SPACE;
    const END_LINE = SPACE + V_BORDER + CARRIAGE_RETURN;

    const sortName = [...lengths].sort((a, b) => b.name - a.name)
    const maxName = sortName.shift().name;
    const nameWidth = Math.max(maxName, GIFT_MIN_WIDTH);

    lengths.sort((a, b) => b.qty - a.qty);
    const maxQty = lengths.shift().qty;
    const qtyWidth = Math.max(maxQty, QTY_MIN_WIDTH);

    let table = '';
    const width = nameWidth + qtyWidth + PAD_LEN * 2 + V_LEN;
    const topBorder = SUM.repeat(width);
    const downBorder = MULT.repeat(width);

    table += topBorder + CARRIAGE_RETURN;
    table += START_LINE + "Gift" + SPACE.repeat(nameWidth - GIFT_MIN_WIDTH) + SPACE;
    table += START_LINE + "Quantity" + SPACE.repeat(qtyWidth - QTY_MIN_WIDTH) + END_LINE;

    table += START_LINE + MINUS.repeat(nameWidth) + SPACE;
    table += START_LINE + MINUS.repeat(qtyWidth) + END_LINE;

    gifts.forEach(gift => {
        table += (START_LINE + gift.name).padEnd(nameWidth + PAD_LEN + 1, SPACE);
        table += (START_LINE + gift.quantity).padEnd(qtyWidth + PAD_LEN, SPACE) + END_LINE;
    });

    table += downBorder;
    return table;
}