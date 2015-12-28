/**
 * Created by vladimirn on 11/27/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'components/appContainer';
import appStore from 'appStore';

ReactDOM.render(<Provider store={appStore}>
                    <AppContainer/>
                </Provider>, document.getElementById('app'));
