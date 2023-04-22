module.exports = function carryGifts(gifts, maxWeight) {
    let bags = [];
    let bag = [];
    let bagWeight = maxWeight;

    const ready = gifts.every((gift) => gift.length <= maxWeight);
    if (!ready) return [];
    gifts.forEach((gift) => {
        let weight = gift.length;
        if (!(weight <= bagWeight)) {
            bags.push(bag);
            bag = [];
            bagWeight = maxWeight;
        }

        bag.push(gift);
        bagWeight -= weight;
    });
    bags.push(bag);
    const packages = bags.map((bag) => bag.join(" "));
    return packages;
}

