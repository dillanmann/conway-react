const autoBind = require('auto-bind');

class GridHandler {
    constructor(width, height, onGridUpdated) {
        this.grid = this.initialiseGrid(width, height);
        this.gridUpdated = onGridUpdated;
        autoBind(this);
    }
    // Default definition to allow over-ride and context binding
    gridUpdated = () => null;
    initialiseGrid(width, height) {
        return [...Array(width)].map(
            () => [...Array(height)].map(
                () => false
            )
        );
    }
    resetGrid(width, height, propogateState = true) {
        this.grid = this.initialiseGrid(width, height);
        if (propogateState){
            this.gridUpdated();
        }
    }
    flipTileState(x, y) {
        this.grid[x][y] = !this.grid[x][y];
        this.gridUpdated();
    }
}

export default GridHandler;