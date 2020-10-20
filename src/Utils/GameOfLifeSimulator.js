const autoBind = require('auto-bind');

class GameOfLifeSimulator {
    constructor(){
        autoBind(this);
    }
    simulateTick(grid){
        const frame = grid.map((_, index) => [...grid[index]]);

        for (let row = 0; row < frame.length; ++row)
        {
            for (let col = 0; col < frame[row].length; ++col)
            {
                const aliveNeighbours = this.getAliveNeighbours(grid, row, col);
                const isAlive = this.calculateNextState(grid[row][col], aliveNeighbours);
                frame[row][col] = isAlive;
            }
        }

        return frame;
    }
    getAliveNeighbours(grid, row, col){
        let aliveNeighbours = 0;
        const indexOffsets = [-1, 0, 1]
        const gridHeight = grid.length;
        const gridWidth = grid[row].length;

        indexOffsets.forEach(xOffset => {
            // Skip 0 offset if x offset is already 0 to avoid self
            const yOffsets = xOffset === 0 ? [-1, 1] : indexOffsets;
            yOffsets.forEach(yOffset => {
                if(this.isSafeIndex(row+yOffset, col+xOffset, gridHeight, gridWidth) && grid[row+yOffset][col+xOffset]){
                    aliveNeighbours += 1;
                }
            });
        });

        return aliveNeighbours;
    }
    isSafeIndex(x, y, width, height){
        return x >= 0 && x < width && y >= 0 && y < height;
    }
    calculateNextState(isAlive, aliveNeighbours){
        if (isAlive){
            return aliveNeighbours === 2 || aliveNeighbours === 3;
        }

        return aliveNeighbours === 3;
    }
}

export default GameOfLifeSimulator;
