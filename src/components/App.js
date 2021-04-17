import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import storage from '../utils/localStorage';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateEvents from './CreateEvents';
import ListEvents from './ListEvents';
import InfoDetailEvent from './InfoDetailEvent';

function App() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const user = storage.getUser();

    if (user !== null) {
      setUserData(user);
    }
  }, []);

  return (
    <div className="App">
      <Header userData={userData} />
      <Switch>
        <Route exact path="/">
          <ListEvents userId={userData.id} />
        </Route>
        <Route path="/signIn">
          <SignIn setUserData={setUserData} />
        </Route>
        <Route path="/signUp">
          <SignUp setUserData={setUserData} />
        </Route>
        <Route path="/createEvents">
          <CreateEvents userId={userData.id} />
        </Route>
        <Route path="/events/:id">
          <InfoDetailEvent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
