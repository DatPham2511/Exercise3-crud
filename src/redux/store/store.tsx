import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/rootReducer';
import rootSaga from '../sagas/userSagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware,logger));
sagaMiddleware.run(rootSaga);

export default store;

