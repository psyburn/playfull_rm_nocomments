import { characterListSelector } from '../../list/state/selectors';


export const singleCharacterSelector = (state, id: number) =>
  characterListSelector(state).find((item) => item.id === id, 10);
