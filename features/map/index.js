import React from 'react'
import { SPRITE_SIZE } from '../../config/constants';
import './styles.css'
import { connect } from 'react-redux';

function getTileSprite(type) {
  switch (type) {
    case 0:
      return 'grass'
    case 5:
      return 'rock'
    case 6:
      return 'tree'
    default:
      console.log(type)
  }
}

function MapTile(props) {
  return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
    }}
  />
}

function MapRow(props) {
  return <div className="row">
    {
      props.tiles.map((tile, index) => <MapTile key={index} tile={tile} />)
    }
  </div>
}

function Map(props) {
  return (
    <div
      style={{
        width: '800px',
        height: '400px',
        backgroundColor: 'green',
        border: '4px solid white',
        margin: '10px auto',

      }}
    >
      {
        props.tiles.map((row, index) => <MapRow key={index} tiles={row} />)
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  }
}

export default connect(mapStateToProps)(Map);
