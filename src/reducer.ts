import { combineReducers } from 'redux';
import { STORE_NAME } from './containers/list/contstants';
import characterReducers from './containers/list/state/reducers';

export default combineReducers({
  [STORE_NAME]: characterReducers
});
