import store from '../../config/store';
// sprite_size 40
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants';

export default function handleMovement(player) {

  function getNewPosition(oldPos, direction) {
    switch (direction) {
      case 'WEST':
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
      case 'EAST':
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
      case 'NORTH':
        return [oldPos[0], oldPos[1] - SPRITE_SIZE]
      case 'SOUTH':
        return [oldPos[0], oldPos[1] + SPRITE_SIZE]
      default:
        console.log(direction)
    }
  }

  function observeBoundaries(oldPos, newPos) {
    // newPos x axis 
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
      (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
      ? newPos : oldPos
  }

  function observeImpassable(oldPos, newPos) {
    return
  }

  function dispatchMove(direction) {
    const newPos = getNewPosition(direction);
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: newPos
      }
    })
  }

  function attemptMove(direction) {
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(direction)
    if (respects)
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return attemptMove('WEST')
      case 38:
        return attemptMove('NORTH')
      case 39:
        return attemptMove('EAST')
      case 40:
        return attemptMove('SOUTH')
      default:
        console.log(e.keyCode)
    }
  }
  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })

  return player
}