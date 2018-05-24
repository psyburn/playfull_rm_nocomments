import { ICharacter } from '../../../dataInterface';

export const REQUEST_CHARS = 'REQUEST_CHARS';
export const ADD_DATA = 'ADD_DATA';

export function addData(data: ICharacter[]) {
  return {
    data,
    type: ADD_DATA,
  };
}

export const requestCharacters = () => ({type: REQUEST_CHARS});
