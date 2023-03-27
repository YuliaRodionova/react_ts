import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './lib/store/store';
import { saveState } from './lib/localStorage/localStorage';

store.subscribe(() => {
  saveState({
    cartList: store.getState().cartList,
    productsList: store.getState().productsList
  });
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
