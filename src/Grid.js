import React from 'react';
import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
            grid: this.initialiseGrid(this.props.width, this.props.height)
        };
    }
    initialiseGrid = (width, height) => 
        [...Array(width)].map(
            () => [...Array(height)].map(
                () => false
            )
        );
    componentDidMount() {
        // Accept reset method from parent
        this.props.shareMethods(this.resetGrid.bind(this));
    }
    resetGrid() {
        this.setState({grid: this.initialiseGrid(this.props.width, this.props.height)});
    }
    setGridState(x, y){
        var grid = this.state.grid;
        grid[x][y] = !grid[x][y];
        this.setState({grid: grid});
    }
    render() {
        if (this.props.width !== this.state.width || this.props.height !== this.state.height){
            this.setState({
                width: this.props.width,
                height: this.props.height,
                grid: this.initialiseGrid(this.props.width, this.props.height)});
        }
        return (
            <div className='tile-grid'>
                {
                    this.state.grid.map((row, i) =>
                        (
                            <div className='tile-row' key={`row-${i}`}>
                                {row.map((col, j) => (
                                    <div className='tile-column' key={`col-${i},${j}`}>
                                        <div
                                            className={`tile tile-${this.state.grid[i][j] ? 'alive' : 'dead'}`}
                                            onClick={() => this.setGridState(i, j)}>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
            </div>
        );
    }
}

export default Grid;