import { createStore, combineReducers } from 'redux';
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducers';

const rootReducer = combineReducers({
  player: playerReducer,
  //inside mapstate call it by tiles: state.map.tiles
  map: mapReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

