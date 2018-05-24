import { createStore } from 'redux';
import reducer from './reducer';

export const initStore = () => {
  return createStore(reducer);
}
