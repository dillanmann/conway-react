import React from 'react';
import Tile from './Tile';
import './Grid.css';

function Grid(props){
    return(
        <div className='tile-grid'>
            {
                [...Array(props.height)].map(
                    (v, index) => (
                      <Row id={index + 1} key={index} width={props.width} />
                    )
                  )
            }
        </div>
    );
}

function Row(props){
    return(
        <div className='tile-row'>
            {
                [...Array(props.width)].map(
                    (v, index) => (
                      <Column id={index + 1} key={index} />
                    )
                  )
            }
        </div>
    )
}

function Column(){
    return(
        <div className='tile-column'>
            <Tile/>
        </div>
    )
}

export default Grid;
export { Row, Column };