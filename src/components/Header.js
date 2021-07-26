import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser'

import './Header.css';

const Header = () => {
  const [userData] = useUser()

  return (
    <>
      <div className="header">
        <Link className="header_logo_container" to="/">
          <div className="header_logo"></div>
        </Link>

        {userData === '' ? <SignedIn /> : <SignedOut />}
      </div>
    </>
  );
};

function SignedIn() {
  return (
    <>
      <Link to="/signIn">
        <button className="header_signIn btn">Sign in</button>
      </Link>
      <Link to="/signUp">
        <button className="header_signUp btn">Sign up</button>
      </Link>
    </>
  );
}

function SignedOut() {
  const history = useHistory();
  const [_userData, setUser] = useUser()

  function logout() {
    setUser('')
    history.go(0);
  }

  return (
    <>
      <button className="header_log_out" onClick={logout}>
        Sign out
      </button>
      <Link to="createEvents">
        <button className="header_create_event btn">Crear evento</button>
      </Link>
    </>
  );
}

export default Header;
