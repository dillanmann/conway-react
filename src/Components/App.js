import React from 'react';
import './App.css';
import Grid from './Grid';
import GridHandler from '../Utils/GridHandler';
const autoBind = require('auto-bind');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: 20,
      height: 20
    };
    this.widths = [10, 20, 30];
    this.heights = [10, 20, 30];
    this.gridHandler = new GridHandler(this.state.width, this.state.height, () => this.setState(this.state));
    autoBind(this);
  }
  heightChange(event){
    const value = parseInt(event.target.value)
    this.setState({height: value});
    this.gridHandler.resetGrid(this.state.width, value, false);
  }
  widthChange(event){
    const value = parseInt(event.target.value)
    this.setState({width: value});
    this.gridHandler.resetGrid(value, this.state.height, false);
  }
  render() {
    return (
      <div className='app'>
        <div className='input-container'>
          <label htmlFor='width'>Width</label>
          <select name='width' id='width' value={this.state.width} onChange={this.widthChange}>
            {this.widths.map((v) => (<option value={v} key={v}>{v}</option>))}
          </select>
          <label htmlFor='height'>Height</label>
          <select name='height' id='height' value={this.state.height} onChange={this.heightChange}>
            {this.widths.map((v) => (<option value={v} key={v}>{v}</option>))}
          </select>
          <input type='button' value='Simulate!'/>
          <input type='button' value='Reset' onClick={() => this.gridHandler.resetGrid(this.state.width, this.state.height)} />
        </div>
        <Grid grid={this.gridHandler.grid} tileClicked={this.gridHandler.flipTileState} />
      </div>
    );
  }
}

export default App;
