import React from 'react';
import './App.css';

import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <HomePage />
      </Switch>
    </div>
  );
}

export default App;
