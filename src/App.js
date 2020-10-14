import React from 'react';
import './App.css';
import Grid from './Grid';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: 20,
      height: 20
    };
    this.widths = [10, 20, 30];
    this.heights = [10, 20, 30];
  }
  acceptMethods(childResetGrid){
    this.childResetGrid = childResetGrid;
  }
  heightChange = (event) => {
    this.setState({height: parseInt(event.target.value)});
  }
  widthChange = (event) => {
    this.setState({width: parseInt(event.target.value)});
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
          <input type='button' value='Reset' onClick={() => this.childResetGrid()}/>
        </div>
        <Grid width={this.state.width} height={this.state.height} shareMethods={this.acceptMethods.bind(this)} />
      </div>
    );
  }
}

export default App;
