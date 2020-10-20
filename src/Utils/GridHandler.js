const autoBind = require('auto-bind');

class GridHandler {
    constructor(width, height, onGridUpdated) {
        this.grid = this.initialiseGrid(width, height);
        this.gridUpdated = onGridUpdated;
        this.enableTileChanges = true;
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

        this.enableTileChanges = true;
    }
    flipTileState(x, y) {
        if (!this.enableTileChanges){
            return;
        }

        this.grid[x][y] = !this.grid[x][y];
        this.gridUpdated();
    }
    setEnableTileChanges(state){
        this.enableTileChanges = state;
        this.gridUpdated();
    }
    replaceGridContent(grid){
        this.grid = grid;
        this.gridUpdated();
    }
}

export default GridHandler;