import { combineReducers } from 'redux';
import characterReducers from './containers/list/state/reducers';

export default combineReducers({
  characters: characterReducers
});
