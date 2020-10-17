import React from 'react';
import './Grid.css';

function Grid(props) {
    return (
        <div className='tile-grid'>
            {
                props.grid.map((row, i) =>
                    (
                        <div className='tile-row' key={`row-${i}`}>
                            {row.map((col, j) => (
                                <div className='tile-column' key={`col-${i},${j}`}>
                                    <div
                                        className={`tile tile-${props.grid[i][j] ? 'alive' : 'dead'}`}
                                        onClick={() => props.tileClicked(i, j)}>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
        </div>
    );
}

export default Grid;