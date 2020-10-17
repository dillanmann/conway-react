
class GridHandler {
    constructor(width, height, onGridUpdated) {
        this.grid = this.initialiseGrid(width, height);
        this.gridUpdated = onGridUpdated;
    }
    initialiseGrid(width, height) {
        return [...Array(width)].map(
            () => [...Array(height)].map(
                () => false
            )
        );
    }
    resetGrid(width, height) {
        this.grid = this.initialiseGrid(width, height);
    }
    flipTileState(x, y) {
        this.grid[x][y] = !this.grid[x][y];
        console.log(this.gridUpdated);
        this.gridUpdated();
        console.log('state flipped');
    }
}

export default GridHandler;