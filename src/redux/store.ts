import { applyMiddleware, createStore as reduxCreateStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
    const store = reduxCreateStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );

    sagaMiddleware.run(rootSaga);

    return { store };
};

export default createStore;
