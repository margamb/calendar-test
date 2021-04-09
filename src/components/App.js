import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateEvents from './CreateEvents';
import ListEvents from './ListEvents';
import InfoDetailEvent from './InfoDetailEvent';

function App() {
  const [userData, setUserData] = useState('');

  return (
    <div className="App">
      <Header userData={userData} />
      <Switch>
        <Route exact path="/">
          <ListEvents />
        </Route>
        <Route path="/signIn">
          <SignIn setUserData={setUserData} />
        </Route>
        <Route path="/signUp">
          <SignUp setUserData={setUserData} />
        </Route>
        <Route path="/createEvents">
          <CreateEvents />
        </Route>
        <Route path="/events/:id">
          <InfoDetailEvent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
