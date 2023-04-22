module.exports = function countTime(leds) {
    let digits = leds.join("");
    let chunks = digits.split("1");
    let last = chunks.length -1 ;

    if (digits.startsWith("0") && digits.endsWith("0")) {
        let lastEl = chunks.splice(last, 1);
        chunks[0] = chunks[0].concat(lastEl);
    }

    const maxNumLeds = Math.max(...(chunks.map(chunk =>  chunk.length))) * 7;
    return maxNumLeds;
}
