import { ICharacter } from '../../../mockDataInterface';

export const ADD_DATA = 'ADD_DATA';

export function addData(data: ICharacter[]) {
  return {
    data,
    type: ADD_DATA,
  };
}
