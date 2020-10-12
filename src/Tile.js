import React from 'react';
import './Tile.css'

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alive: props.alive
        }
    }

    render(){
        return(
            <div className={`tile tile-${this.state.alive ? 'alive' : 'dead'}`}
                onClick={() => this.setState({alive: !this.state.alive})} />
        );
    }
}

export default Tile;