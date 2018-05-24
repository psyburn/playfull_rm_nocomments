import { STORE_NAME } from '../contstants';
import { IState } from './reducers';

const listStateSelector = (state):IState => state[STORE_NAME];

export const characterListSelector = (state) => listStateSelector(state).list;
