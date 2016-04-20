import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, } from 'redux';
import createLogger from 'redux-logger';

export const createComposedStore = compose(
    applyMiddleware(thunk, createLogger({
        collapsed: true,
        duration: true,
        timestamp: true
    }))
)(createStore);

