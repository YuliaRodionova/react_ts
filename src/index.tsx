import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './lib/store/store';
import { saveState } from './lib/localStorage/localStorage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

store.subscribe(() => {
  saveState({
    cartList: store.getState().cartList
  });
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
    </Router>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
