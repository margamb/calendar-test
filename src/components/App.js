import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateEvents from './CreateEvents';
import Events from './Events';

function App() {
  const [userData, setUserData] = useState('');

  return (
    <div className="App">
      <Header userData={userData} />
      <Switch>
        <Route exact path="/">
          <Events />
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
      </Switch>
    </div>
  );
}

export default App;
