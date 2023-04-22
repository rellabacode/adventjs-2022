module.exports = function fitsInOneBox(boxes) {
    if (boxes == undefined) return false;
    let numBoxes = boxes.length;

    if (numBoxes == 0) return false;
    if (numBoxes == 1) return true;

    const boxesSorted = boxes.sort(function (boxA, boxB) {
        return (boxA.l == boxB.l &&
            boxA.w == boxB.w &&
            boxA.h == boxB.h)
            ? 0
            :
            (boxA.w < boxB.w ||
                boxA.l < boxB.l ||
                boxA.h < boxB.h)
                ? -1
                : 1
    });

    const fitAllInOne = boxesSorted.every((box, index, boxArr) => {
        if (index !== 0)
            return (boxArr[index - 1].l < box.l &&
                boxArr[index - 1].w < box.w &&
                boxArr[index - 1].h < box.h)
        return true;
    });

    return fitAllInOne;
}