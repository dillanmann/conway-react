import React from 'react';
import './App.css';
import Grid from './Grid';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Grid width={20} height={20} />
      </div>
    );
  }
}

export default App;
