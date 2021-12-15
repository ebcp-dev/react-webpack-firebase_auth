import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../app/redux/store';
import { registerUser } from '../../../api/firebase_auth';

import CustomButton from '../../../components/CustomButton/CustomButton';

import './Register.scss';

const Register = () => {
  const [emailInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const authState = useSelector((state: RootState) => state.auth);

  const handleTextInput = (event: React.FormEvent<HTMLInputElement>) => {
    setUsernameInput(event.currentTarget.value);
  };

  const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>) => {
    setPasswordInput(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    registerUser(emailInput, passwordInput);
  };

  return (
    <>
      <h1>Register Page</h1>
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
      <p>New user registered as:</p>
      {`{
          email: '${authState.userDetails.email}'
          password: '${authState.userDetails.password}'
        }`}
    </>
  );
};

export default Register;
