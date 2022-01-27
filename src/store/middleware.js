import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

const middleware = [thunk];

export const sagaMiddleware = createSagaMiddleware();
    const { createLogger } = require('redux-logger');
    const invariant = require('redux-immutable-state-invariant').default;
    middleware.push(sagaMiddleware);
    middleware.push(createLogger({collapsed: true}))
export default middleware