import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
// import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
