module.exports = function selectSleigh(distance, sleighs) {
    const evaluateSleigh = (sleigh, best) => {
        const watios = sleigh.consumption * distance;
        return [watios < 20, watios === 20, watios > best.consumption];
    }

    let sleigh = {name: null, consumption: 0};
    const result = sleighs.reduce((best, curr, ind, arr) => {
        const [inB, end, isBest] = evaluateSleigh(curr, best);
        if (end || inB && isBest) best = curr;
        if (!inB || end) arr.splice(ind+1);
        // console.log(ind, best)
        return best;
    }, sleigh);
    return result.name;
}