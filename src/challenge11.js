module.exports = function getCompleted(part, total) {
    const [thour, tmin, tsec] = total.split(":").map(Number);
    const totalSecs = thour * 60 * 60 + tmin * 60 + tsec;
    const [phour, pmin, psec] = part.split(":").map(Number);
    const partSecs = phour * 60 * 60 + pmin * 60 + psec;
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const reduce = (num, denom) => {
        let mcd = gcd(num, denom);
        return [num / mcd, denom / mcd];
    }
    const [numerator, denominator] = reduce(partSecs, totalSecs);
    return numerator + "/" + denominator;
}