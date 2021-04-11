import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';
import avatar from './img/avatar.png';

const Header = ({ userData }) => {
  const history = useHistory();

  function logout() {
    localStorage.removeItem('timekids-user');
    history.go(0);
  }

  function renderSign() {
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

  function renderLogueado() {
    return (
      <>
        <img src={avatar} className="avatar" />
        <button onClick={logout}>Log out</button>
        <Link to="createEvents">
          <button className="header_createEvent btn">Crear Evento</button>
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="header">
        <Link className="header_logo_container" to="/">
          <img src={logo} className="header_logo" />
        </Link>

        {userData === '' ? renderSign() : renderLogueado()}
      </div>
    </>
  );
};

export default Header;
