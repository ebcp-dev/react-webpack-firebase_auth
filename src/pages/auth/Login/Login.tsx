import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../app/redux/store';
import { loginUser } from '../api/firebase_auth';

import CustomButton from '../../../components/CustomButton/CustomButton';

import './Login.scss';

const Login = () => {
  const [emailInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const loginState = useSelector((state: RootState) => state.auth);

  const handleTextInput = (event: React.FormEvent<HTMLInputElement>) => {
    setUsernameInput(event.currentTarget.value);
  };

  const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>) => {
    setPasswordInput(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    loginUser(emailInput, passwordInput);
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="emailInput"
          type="text"
          placeholder="Enter email"
          value={emailInput}
          onChange={handleTextInput}
        />
        <input
          name="passwordInput"
          type="password"
          placeholder="Enter password"
          value={passwordInput}
          onChange={handlePasswordInput}
        />
        <CustomButton onClick={handleSubmit}>Login</CustomButton>
      </form>
      <p>Logged In as: {loginState.userDetails.email}</p>
    </>
  );
};

export default Login;
