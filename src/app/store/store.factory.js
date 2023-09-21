import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root.reducer'
import { rootSaga } from './root.saga'

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// mount it on the Store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Begin our Index Saga
sagaMiddleware.run(rootSaga);