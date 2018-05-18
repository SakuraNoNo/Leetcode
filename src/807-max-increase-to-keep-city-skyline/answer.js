/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function (grid) {
    const rowsMax = grid.reduce((row1, row2) => {
        return row1.map((row, index) => {
            return row2[index] > row ? row2[index] : row;
        });
    });

    const columnsMax = grid.map((column) => {
        return column.reduce((a, b) => {
            return a > b ? a : b;
        });
    });

    const gridNew = columnsMax.map((col) => {
        return rowsMax.map((row) => {
            return row < col ? row : col;
        });
    });

    function gridSum(grid) {
        return grid.reduce((a, b) => {return a.concat(b);})
            .reduce((a, b) => {return a + b;});
    }
    return gridSum(gridNew) - gridSum(grid);
};
