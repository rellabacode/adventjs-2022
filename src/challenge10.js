module.exports = function checkJump(heights) {
  const indMax = heights.reduce((m, h, i, a) => h > a[m] ? i : m, 0);
  const succAsc = heights.splice(0, indMax);
  const asc = succAsc.every((n, i, a) => i === 0 || n >= a[i-1]);
  heights.splice(0, 1);
  const desc = heights.every((n, i, a) => i === 0 || n <= a[i-1]);

  return succAsc.length > 0 && asc && heights.length > 0 && desc;
}