import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Page from './Page';

ReactDom.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);
