module.exports = function getGiftsToRefill(a1, a2, a3) {
    const unique = (a) => [... new Set(a)]
    const diff = (a, b) => a.filter((gift) => !b.includes(gift))
    const stores = [unique(a1), unique(a2),unique(a3)]

    let difa123 = diff(diff(stores[0], stores[1]), stores[2])
    let difa213 = diff(diff(stores[1], stores[0]),stores[2])
    let difa312 = diff(diff(stores[2], stores[0]), stores[1]);

    return difa123.concat(difa213).concat(difa312);
}