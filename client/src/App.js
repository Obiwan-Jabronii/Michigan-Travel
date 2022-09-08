import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

//import the pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SingleLocation from './pages/SingleLocation';

//import the components
import Nav from './components/Nav';
import Footer from './components/Footer';


const httpLink = createHttpLink({
  uri:'/graphql',
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/locations/:id' component={SingleLocation} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;