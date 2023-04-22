module.exports = function distributeGifts(packOfGifts, reindeers) {
    const maxWReindeers = reindeers.reduce((weight, reindeer) => weight + 2*reindeer.length, 0);
    if (maxWReindeers === 0) return 0;

    const giftsWeight = packOfGifts.reduce((weight, gift) => weight + gift.length, 0);
    if (giftsWeight === 0) return 0;
    
    if (maxWReindeers === giftsWeight) return 1;

    return Math.floor(maxWReindeers/giftsWeight);
}