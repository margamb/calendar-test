import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateEvents from './CreateEvents';
import ListEvents from './ListEvents';
import InfoDetailEvent from './InfoDetailEvent';
import Confirmation from './Confirmation';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ListEvents />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/createEvents">
          <CreateEvents />
        </Route>
        <Route path="/events/:id">
          <InfoDetailEvent />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
