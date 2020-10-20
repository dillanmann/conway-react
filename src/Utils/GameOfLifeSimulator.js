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
                const neighbours = this.getAliveNeighbours(grid, row, col);
                const newTileState = this.calculateNextState(grid[row][col], neighbours);
                frame[row][col] = newTileState;
            }
        }

        return frame;
    }
    getAliveNeighbours(grid, row, col){
        let aliveNeighbours = 0;
        const indexOffsets = [-1, 0, 1]
        const gridHeight = grid.length;
        const gridWidth = grid[row].length;

        indexOffsets.forEach(i => {
            // Skip 0 offset if x offset is already 0 to avoid self
            const yOffsets = i === 0 ? [-1, 1] : indexOffsets;
            yOffsets.forEach(j => {
                if (i == -1 && col == 0){  // prevent out of range indexing
                    return;
                }
                else if(j === -1 && row === 0){
                    return;
                }
                else if (i === 1 && col === gridWidth-1){
                    return;
                }
                else if (j === 1 && row === gridHeight-1){
                    return;
                }

                if(this.isSafeIndex(row+j, col+i, gridWidth, gridHeight) && grid[row+j][col+i]){
                    aliveNeighbours += 1;
                }
            });
        });

        return aliveNeighbours;
    }
    isSafeIndex(x, y, width, height){
        return x >= 0 && x < width && y >= 0 && y < height;
    }
    calculateNextState(currentState, neighbours){
        if (currentState){
            return neighbours === 2 || neighbours === 3;
        }

        return neighbours === 3;
    }
}

export default GameOfLifeSimulator;
