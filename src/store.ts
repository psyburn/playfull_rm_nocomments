import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import characterSaga from './containers/list/state/sagas';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware()

export const initStore = () => {
  const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(characterSaga)
  return store;
}
