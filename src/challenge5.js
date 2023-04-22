module.exports = function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let level = 0;
    let numCities = giftsCities.length;
    let pathSize = 0;

    let bestSumGifts = 0, currentSumGifts = 0;
    let binaryTree = new Array(numCities).fill(-1);

    let end = false;

    let generate = () => {
        if (binaryTree[level] === 0) {
            currentSumGifts += giftsCities[level];
            pathSize += 1;
        }
        binaryTree[level] = binaryTree[level] + 1;
    }

    let treat = () => {
        if (currentSumGifts <= maxGifts &&
            currentSumGifts > bestSumGifts) {
            bestSumGifts = currentSumGifts;
        }
    }

    let criteria = () => {
        return ((level + 1) < numCities &&
            pathSize < maxCities &&
            currentSumGifts < maxGifts);
    }

    let solution = () => {
        return (currentSumGifts === maxGifts);
    }

    let haveMoreBrothers = () => {
        return binaryTree[level] === 0;
    }

    let goBack = () => {
        currentSumGifts -= giftsCities[level];
        binaryTree[level] = -1;
        level -= 1;
        pathSize -= 1;
    }

    do {
        generate();
        treat();
        if (solution())
            end = true;
        else if (criteria())
            level = level + 1;
        else {
            while (level !== 0 && !haveMoreBrothers()) {
                goBack();
            }
        }
    } while (!end && !(level === 0 && !haveMoreBrothers()));

    return bestSumGifts;
}