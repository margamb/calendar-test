import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateEvents from './CreateEvents';
import ListEvents from './ListEvents';
import InfoDetailEvent from './InfoDetailEvent';

function App() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('timekids-user'));

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
      <Footer />
    </div>
  );
}

export default App;
