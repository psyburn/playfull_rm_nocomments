import { ICharacter } from '../../../mockDataInterface';
import * as a from './actions';

interface IState {
  list: ICharacter[];
}

const initalState: IState = {
  list: [],
};

export default function reducer(state: IState = initalState, action: any): IState {
  switch (action.type) {
    case a.ADD_DATA: {
      return {
        ...state,
        list: action.data,
      }
    }
    default:
      return state;
  }
}
