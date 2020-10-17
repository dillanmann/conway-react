const autoBind = require('auto-bind');

class GridHandler {
    constructor(width, height, onGridUpdated) {
        this.grid = this.initialiseGrid(width, height);
        this.gridUpdated = onGridUpdated;
        this.enableTileUpdates = true;
        this.simulationRunning = false;
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

        this.enableTileUpdates = true;
    }
    flipTileState(x, y) {
        if (!this.enableTileUpdates){
            return;
        }

        this.grid[x][y] = !this.grid[x][y];
        this.gridUpdated();
    }
    startSimulation(onSimulationStopped){
        this.enableTileUpdates = false;
        this.simulationRunning = true;
        try {
            
        } finally {
            this.simulationRunning = false;
            this.enableTileUpdates = true;
            onSimulationStopped();
        }
    }
}

export default GridHandler;