import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './SignIn.css';
import rocket from './img/rocket.svg';
import cat from './img/cat.svg';
import logo from './img/logo.png';
import IconReset from '../components/img/IconReset.js';
import supabase from '../supabase';

const SignIn = ({ setUserData }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  function handleUserName(ev) {
    setUserName(ev.target.value);
    console.log('name', userName);
  }

  function handlePassword(ev) {
    setPassword(ev.target.value);
  }

  // function handleFormSignIn(ev) {
  //   ev.preventDefault();
  //   setUserData(userName);
  // }

  async function handleFormSignIn(ev) {
    ev.preventDefault();
    let { user, error } = await supabase.auth.signIn({
      email: userName,
      password: password,
    });
    console.error(error);
    setUserData(user.email);
    history.push('/');
  }

  // function onSubmit() {
  //   console.log('submit');
  //   setUserData(userName);
  //   history.push('/');
  // }

  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <IconReset className="reset-Info-SignIn" />
      </Link>
      <div className="signIn">
        <div className="sigIn_form">
          {/* <img src={logo} className="logo"></img> */}
          <h2 className="title_signIn">Sign in</h2>
          <form className="signIn_form" onSubmit={handleFormSignIn}>
            <label htmlFor="name" className="form_label">
              Email Address
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form_input"
              onChange={handleUserName}
            />
            <label htmlFor="name" className="form_label">
              Password
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your password"
              className="form_input"
              onChange={handlePassword}
            />
            <input
              type="submit"
              value="Sign in"
              className="signIn_btn js-SignIn"
              // onClick={onSubmit}
              // disabled={disableButton}
            />
          </form>
        </div>

        {/* <img src={rocket} className="signIn_img_rocket"></img> */}
        <div className="signIn-img">
          <div className="signIn_img_rocket"></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
