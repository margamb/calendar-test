import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './SignUp.css';
import IconReset from '../components/img/IconReset.js';
import supabase from '../supabase';
import storage from '../utils/localStorage';

const SignIn = ({ setUserData }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let history = useHistory();

  function handleUserName(ev) {
    setUserName(ev.target.value);
  }

  function handlePassword(ev) {
    setPassword(ev.target.value);
  }

  function handleConfirmPassword(ev) {
    setConfirmPassword(ev.target.value);
  }

  async function handleFormSignUp(ev) {
    ev.preventDefault();
    if (password === confirmPassword) {
      let { user, error } = await supabase.auth.signUp({
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
  }

  const disableButton =
    !userName || userName.length < 3 || !password || !confirmPassword;

  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <IconReset className="reset-Info-SignUp" />
      </Link>
      <div className="signUp">
        <div className="sigIn_form">
          <h2 className="title_signUp">Sign Up</h2>
          <form className="form" onSubmit={handleFormSignUp}>
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
            <label htmlFor="confirmPassword" className="form_label">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form_input"
              placeholder="Enter your password"
              onChange={handleConfirmPassword}
            />
            <input
              type="submit"
              value="Sign up"
              className="signUp_btn js-SignIn"
              disabled={disableButton}
            />
          </form>
        </div>
        <div className="signUp_img">
          <div className="signUp_img_globe"></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
