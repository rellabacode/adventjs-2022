module.exports = function canExit(maze) {
    const ROWS = maze.length;
    const COLUMNS = maze[0].length;

    const rowEntrance = maze.findIndex(row => row.includes("S"));
    let columnEntrance = maze[rowEntrance].indexOf("S");
    const SOURCE = [rowEntrance, columnEntrance, "S"];

    const rowExit = maze.findIndex(row => row.includes("E"));
    let columnExit = maze[rowExit].indexOf("E");
    const DESTINATION = [rowExit, columnExit, "E"];

    let visited = Array.from(Array(ROWS), () => new Array(COLUMNS).fill(false));
    let queue = [SOURCE];
    visited[SOURCE[0]][SOURCE[1]] = true;

    const coordsEquals = function(coordA, coordB)  {
        return coordA[0] === coordB[0] && coordA[1] === coordB[1];
    };

    while (queue[0] !== undefined) {
        let cell = queue.splice(0, 1).pop();

        const movs = [];
        let up = JSON.parse(JSON.stringify(cell));

        up[0] = cell[0] - 1;
        up[2] = (maze[cell[0] - 1] && maze[cell[0] - 1][cell[1]]) || ("W");

        movs.push(up);

        let down = JSON.parse(JSON.stringify(cell));
        down[0] = cell[0] + 1;
        down[2] = (maze[cell[0] + 1] && maze[cell[0] + 1][cell[1]])  || ("W");
        movs.push(down);

        let left = JSON.parse(JSON.stringify(cell));
        left[1] = cell[1] - 1;

        left[2] = maze[cell[0]][cell[1] - 1];
        movs.push(left);

        let right = JSON.parse(JSON.stringify(cell));
        right[1] = cell[1] + 1;
        right[2] = maze[cell[0]][cell[1] + 1];
        movs.push(right);

        const validMovs = movs.filter(mov => (
            mov[2] !== "W" &&
            mov[2] !== "S" &&
            !(visited[mov[0]] &&
                visited[mov[0]][mov[1]] === true) &&
            !(mov[0] < 0 || mov[0] >= ROWS ||
                mov[1] < 0 || mov[1] >= COLUMNS)
            )
        );

        const goal = validMovs.some(mov => coordsEquals(mov, DESTINATION));
        if (goal) return true;

        validMovs.forEach(mov => {
            visited[mov[0]][mov[1]] = true;
        });

        queue.push(...validMovs);
    }

    return false;
};


