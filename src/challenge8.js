module.exports = function checkPart(part) {
    const partArrR = part.split("").reverse();
    let diffIndex = -1;

    const isPalindrome = partArrR.every((letter, idx) => {
        diffIndex = idx;
        return (letter === part.charAt(idx))
    });

    if (isPalindrome) return true;

    const deleteAtIndex = (str, index) => {
        const start = (index > 0 ? 0 : 1);
        const end = (index > 0 ? index : str.length);

        const partArrOne = str.substring(start, end);
        let partArrTwo = "";
        if (index > 0) {
            partArrTwo = str.substring(index + 1,  str.length)
        }

        return partArrOne.concat(partArrTwo);
    }

    const isPalindromeMinusOne = (str,index) => {
        const partMinusOne =  deleteAtIndex(str, index)
        const partMinusOneRArr = partMinusOne.split("").reverse();
        const partMinusOneR = partMinusOneRArr
            .toString()
            .replaceAll(",","");
        return (partMinusOne === partMinusOneR);
    }

    if (isPalindromeMinusOne(part, diffIndex)) return true;
    const partR = partArrR.toString().replaceAll(",","");
    if (isPalindromeMinusOne(partR, diffIndex)) return true;
    return false
}