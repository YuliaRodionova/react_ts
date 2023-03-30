import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/pages/Main/Main';
import Cart from './components/pages/Cart/Cart';
import AdminPage from './components/pages/AdminPage/AdminPage';
import ProductPage from './components/pages/ProductPage/ProductPage';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/Catalogue" Component={Main} />
        <Route path="/Cart" Component={Cart} />
        <Route path="/Admin" Component={AdminPage} />
        <Route path="/Catalogue/:id" Component={ProductPage} />
      </Routes>
    </Router>

  );
}

export default App;
