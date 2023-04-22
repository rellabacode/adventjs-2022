module.exports = function getOptimalPath(path) {
    let costs = [];
    let nodo = 0;
    let levels = path.length;

    let root = path[0][0];
    if (levels === 1) return root;

    if (levels === 2) {
        return Math.min(root + path[1][0], root + path[1][1]);
    }

    let lastLevel = levels - 1;
    //console.log(lastLevel)

    let numLeafs = path[lastLevel].length;
    //console.log(numLeafs)

    let lastNumNode = 0;
    for (let level = 1; level <= lastLevel; level++) lastNumNode += level;
    let lastParent = lastNumNode - 1;

    //console.log("lastParent", lastParent)

    let offset = 1;
    let prevLevel;
    let numPrev = 1;
    path.splice(0, 1);

    do {
        let currLevel = path.splice(0, 1).pop();
        let currIndex = 0;
        for (let nodePrev = 0; nodePrev < numPrev; nodePrev++) {
            costs[nodo] = [];
            costs[nodo][0] = [offset++, currLevel[currIndex++]];
            costs[nodo][1] = [offset, currLevel[currIndex]];

            let next = (nodePrev + 1) < numPrev;
            if (!next || nodo < 1) {
                offset += 1;
                currIndex += 1;
            }
            nodo += 1;
        }
        prevLevel = currLevel;
        numPrev = prevLevel.length;
    } while (!!path[0]);

    //console.log(JSON.stringify(costs));
    const distance = (a, b) => {
        //console.log("distance ", a, b)
        // //console.log(a, lastLevel)
        if (a > lastParent) {
            //console.log(a, ">", lastParent)
            return 99999;
        }

        if (costs[a][0][0] === b) {
            //console.log("nodo ", a, "-", b, costs[a][0][1])
            return costs[a][0][1];
        }

        if (costs[a][1][0] === b) {
            //console.log("nodo2 ", a, "-", b, costs[a][1][1])
            return costs[a][1][1];
        }

        let totalA = costs[a][0][1] + distance(costs[a][0][0], b);
        //console.log("camino de ", costs[a][0][0], b, " coste ", totalA)

        let totalB = costs[a][1][1] + distance(costs[a][1][0], b);
        //console.log("camino2 de ", costs[a][1][0], b, " coste ", totalB)

        return Math.min(totalA, totalB);
    };

    let paths = [];
    let lastLeaf = lastNumNode + numLeafs;
    //console.log("numLeafs ", numLeafs, " lastLeaf ", lastLeaf);
    for (let leaf = lastNumNode; leaf < lastLeaf; leaf++) {
        let totalA = 9999999999;
        let totalB = 9999999999;

        //console.log("leaf ", leaf)
        if (leaf + 1 < lastLeaf) {
            //0 a nodo izq + ese nodo hasta hoja
            //console.log("izq coste base ", (root + costs[0][0][1]))
            //console.log("izq sig node ", costs[0][0][0])
            totalA = root + costs[0][0][1] + distance(costs[0][0][0], leaf);
            //console.log("total izq hasta ", leaf, " ", totalA)
        }

        if (leaf > lastNumNode) {
            //console.log("der cost base ", root + costs[0][1][1])
            //console.log("der sig node ", costs[0][1][0])
            //0 a nodo der + ese nodo hasta hoja
            totalB = root + costs[0][1][1] + distance(costs[0][1][0], leaf);
            //console.log("total der hasta ", leaf, " ", totalB)
        }

        paths.push(Math.min(totalA, totalB));
    }

    //console.log(paths)
    paths.sort((a, b) => a - b);
    return paths[0];
}