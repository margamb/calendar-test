import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './SignIn.css';
import IconReset from '../components/img/IconReset.js';
import supabase from '../supabase';
import storage from '../utils/localStorage';
import useUser from '../hooks/useUser';

const SignIn = () => {
  const [_, setUserData] = useUser();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  function handleUserName(ev) {
    setUserName(ev.target.value);
  }

  function handlePassword(ev) {
    setPassword(ev.target.value);
  }

  async function handleFormSignIn(ev) {
    ev.preventDefault();
    let { user, error } = await supabase.auth.signIn({
      email: userName,
      password: password,
    });

    const userData = {
      email: user.email,
      id: user.id,
    };

    setUserData(userData);
    storage.setUser(userData);
    history.push('/');
  }

  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <IconReset className="reset_info_signIn" />
      </Link>
      <div className="signIn">
        <div className="sigIn_form">
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
              type="password"
              id="name"
              placeholder="Enter your password"
              className="form_input"
              onChange={handlePassword}
            />
            <input type="submit" value="Sign in" className="signIn_btn" />
          </form>
        </div>

        <div className="signIn-img">
          <div className="signIn_img_rocket"></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
