import React from 'react';
import './App.css';
import Grid from './Grid';
import GridHandler from '../Utils/GridHandler';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: 20,
      height: 20
    };
    this.widths = [10, 20, 30];
    this.heights = [10, 20, 30];
    this.gridHandler = new GridHandler(this.state.width, this.state.height, () => console.log('fuck'));
  }
  heightChange = (event) => {
    this.setState({height: parseInt(event.target.value)});
  }
  widthChange = (event) => {
    this.setState({width: parseInt(event.target.value)});
    this.gridHandler.resetGrid(event.target.value, this.state.height);
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
          <input type='button' value='Reset' />
        </div>
        <Grid grid={this.gridHandler.grid} tileClicked={this.gridHandler.flipTileState} />
      </div>
    );
  }
}

export default App;
