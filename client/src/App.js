import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NorthReg from './pages/NorthReg';
import SouthReg from './pages/SouthReg';
import UpperReg from './pages/UpperReg';
import WestReg from './pages/WestReg';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/north' component={NorthReg} />
          <Route exact path='/south' component={SouthReg} />
          <Route exact path='/upper' component={UpperReg} />
          <Route exact path='/west' component={WestReg} />
          <Route exact path='/' component={Main} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;