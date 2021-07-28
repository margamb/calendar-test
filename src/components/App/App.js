import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  AppHeader,
  Confirmation,
  CreateEvents,
  EventDetails,
  EventsList, 
  SignIn,
  SignUp
} from '../';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route exact path="/">
          <EventsList />
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
          <EventDetails />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
