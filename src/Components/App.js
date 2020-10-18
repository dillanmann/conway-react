import React from 'react';
import './App.css';
import Grid from './Grid';
import GridHandler from '../Utils/GridHandler';
import GameOfLifeSimulator from '../Utils/GameOfLifeSimulator';
const autoBind = require('auto-bind');

const StartSimulationText = 'Simulate';
const StopSimulationText = 'Stop';
const TickIntervalMillis = 500;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: 20,
      height: 20,
      simulationRunning: false
    };
    this.widths = [10, 20, 30];
    this.heights = [10, 20, 30];
    this.simulationIntervalId = 0;
    this.simulator = new GameOfLifeSimulator();
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
  onSimulationStopped(){
    this.setState({simulationRunning: false});
  }
  changeSimulationState(){
    if (this.state.simulationRunning){
      this.stopSimulation();
    } else {
      this.startSimulation();
    }
  }
  startSimulation(){
    this.gridHandler.setEnableTileUpdates(false);
    this.setState({simulationRunning: true});
    try {
      this.simulationIntervalId = setInterval(() => {
        const newFrame = this.simulator.simulateTick(this.gridHandler.grid);
        this.gridHandler.replaceGridContent(newFrame);
      }, TickIntervalMillis);
    }
    catch {
      console.log('something went wrong with the simulation');
    }
  }
  stopSimulation(){
    this.gridHandler.setEnableTileUpdates(true);
    this.setState({simulationRunning: false});
    clearInterval(this.simulationIntervalId);
  }
  render() {
    return (
      <div className='app'>
        <div className='input-container'>
          <label htmlFor='width'>Width</label>
          <select name='width' id='width' value={this.state.width} onChange={this.widthChange} disabled={this.state.simulationRunning}>
            {this.widths.map((v) => (<option value={v} key={v}>{v}</option>))}
          </select>
          <label htmlFor='height'>Height</label>
          <select name='height' id='height' value={this.state.height} onChange={this.heightChange} disabled={this.state.simulationRunning}>
            {this.widths.map((v) => (<option value={v} key={v}>{v}</option>))}
          </select>
          <input
            type='button'
            value={this.state.simulationRunning ? StopSimulationText : StartSimulationText}
            onClick={this.changeSimulationState}/>
          <input
            type='button'
            value='Reset'
            onClick={() => this.gridHandler.resetGrid(this.state.width, this.state.height)}
            disabled={this.state.simulationRunning} />
        </div>
        <Grid grid={this.gridHandler.grid} tileClicked={this.gridHandler.flipTileState} />
      </div>
    );
  }
}

export default App;
