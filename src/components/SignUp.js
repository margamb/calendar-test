import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUp.css';
import globe from './img/globe.svg';
import logo from './img/logo.png';
import supabase from '../supabase';

const SignIn = ({ setUserData }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let history = useHistory();

  function handleUserName(ev) {
    setUserName(ev.target.value);
    console.log('name', userName);
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
      console.log(user);
      setUserData(user.email);

      history.push('/');
    }
  }

  const disableButton =
    !userName || userName.length < 3 || !password || !confirmPassword;

  return (
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
            placeholder="Marta"
            className="form_input"
            onChange={handleUserName}
          />
          <label htmlFor="name" className="form_label">
            Password
          </label>
          <input
            type="text"
            id="name"
            placeholder="8 dígitos"
            className="form_input"
            onChange={handlePassword}
          />
          <label htmlFor="confirmPassword" className="form_label">
            Confirm password
          </label>
          <input
            type="text"
            id="confirmPassword"
            className="form_input"
            placeholder="8 dígitos"
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
      {/* <img src={globe} className="img-fish"></img> */}
      <div className="signIn-img">
        <div className="signIn_img_rocket"></div>
      </div>
    </div>
  );
};

export default SignIn;
