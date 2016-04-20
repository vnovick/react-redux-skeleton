/**
 * Created by vladimirn on 11/27/15.
 */
 import _ from 'lodash';
 import getBundle from '../utils/bundler';
 import { renderToString } from 'react-dom/server';
 import { createComposedStore } from '~/frontend/appStore';
 import { AppContainer } from '~/frontend/components/appContainer';
 import rootReducer from '~/frontend/reducers/rootReducer';
import { Provider } from 'react-redux';
import React from 'react';
 function renderPage(){
   const store = createComposedStore(rootReducer);

   // Render the component to a string
   const html = renderToString(
     <Provider store={store}>
       <AppContainer serverInit={true}/>
     </Provider>
   )

   // Grab the initial state from our Redux store
   const initialState = store.getState();
  return {
    bundle: getBundle(),
    pdo: initialState,
    reactDom: html
  }
 }



export default (req, res, next) => {
        req.page = renderPage()
        next()
}
