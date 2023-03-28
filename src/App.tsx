import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/pages/Main/Main';
import Cart from './components/pages/Cart/Cart';
import Product from './components/pages/Product/Product';
import AdminPage from './components/pages/AdminPage/AdminPage';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/Cart" Component={Cart} />
        <Route path="/Admin" Component={AdminPage} />
        <Route path="/:id" Component={Product} />
      </Routes>
    </Router>

  );
}

export default App;
