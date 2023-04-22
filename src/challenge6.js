module.exports = function createCube(size) {
    let lateralUpPeak = "/\\", lateralLowPeak = "\\/";
    let cellSup = "_\\", cellInf = "_/", newLine = "\n";
    let offset = size - 1;
    let cube = "", lateral = "";
    let frontSup = cellSup.repeat(size), frontInf = cellInf.repeat(size);

    for (let supRow = 1; supRow <= size; supRow++) {
        lateral += lateralUpPeak;
        cube += " ".repeat(offset) + lateral + frontSup + newLine;
        offset -= 1;
    }

    offset += 1;
    lateral = lateralLowPeak.repeat(size);
    for (let infRow = 1; infRow <= size; infRow++) {
        cube += " ".repeat(offset) + lateral + frontInf + newLine;
        lateral = lateral.replace("\\/", "");
        offset += 1;
    }
    cube = cube.substring(0, cube.length - 1);
    return cube;
}