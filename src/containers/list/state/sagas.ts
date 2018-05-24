import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { IList } from '../../../dataInterface';

import * as t from './actions';


function * watchForRequestCharacters() {
  yield takeLatest(t.REQUEST_CHARS, getChars);
}
function * getChars(action) {
  try {
    const { data }: { data: IList} = yield call(axios.get, 'https://rickandmortyapi.com/api/character');

    console.log(data);
    yield put(t.addData(data.results));
  } catch (error) {
    console.warn('Fetching guarantors failed:', error);
  }
}

export default watchForRequestCharacters;
