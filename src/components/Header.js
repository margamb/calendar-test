import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import logo from './img/agenda_peques_logo.svg';

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
        <button className="header_log_out" onClick={logout}>
          Sign out
        </button>
        <Link to="createEvents">
          <button className="header_create_event btn">Crear evento</button>
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="header">
        <Link className="header_logo_container" to="/">
          {/* <img src={logo} className="header_logo" alt="logo" title="logo" /> */}
          <div className="header_logo"></div>
        </Link>

        {userData === '' ? renderSign() : renderLogueado()}
      </div>
    </>
  );
};

export default Header;
