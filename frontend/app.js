/**
 * Created by vladimirn on 11/27/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'components/appContainer';
import { createComposedStore } from 'appStore';
import rootReducer from './reducers/rootReducer';
const initialState = window.pdo
const appStore = createComposedStore(rootReducer, initialState)
ReactDOM.render(<Provider store={appStore}>
                    <AppContainer shouldInit={ true }/>
                </Provider>, document.getElementById('app'));
