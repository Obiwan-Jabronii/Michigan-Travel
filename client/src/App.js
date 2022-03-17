import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import NorthReg from './pages/NorthReg';
import SouthReg from './pages/SouthReg';
import UpperReg from './pages/UpperReg';
import WestReg from './pages/WestReg';
import Main from './pages/Main';
import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import './index.css';

const httpLink = createHttpLink({
  uri:'/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
          <div className ="conatiner">
        <Switch>
          <Route exact path='/north' component={NorthReg} />
          <Route exact path='/south' component={SouthReg} />
          <Route exact path='/upper' component={UpperReg} />
          <Route exact path='/west' component={WestReg} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Main} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />

        </Switch>
        </div>
        <Footer />
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;