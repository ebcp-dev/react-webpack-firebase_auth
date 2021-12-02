import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../app/redux/store';
import { resetPassword } from '../api/firebase_auth';

import CustomButton from '../../../components/CustomButton/CustomButton';

import './PasswordReset.scss';

function PasswordReset() {
  const [emailInput, setUsernameInput] = useState('');

  const authState = useSelector((state: RootState) => state.auth);

  const handleTextInput = (event: React.FormEvent<HTMLInputElement>) => {
    setUsernameInput(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    resetPassword(emailInput);
  };

  return (
    <>
      <h1>Password Reset Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="emailInput"
          type="text"
          placeholder="Enter email"
          value={emailInput}
          onChange={handleTextInput}
        />
        <CustomButton onClick={handleSubmit}>Login</CustomButton>
      </form>
      <p>Resetting password of:</p>
      {`{
          email: '${authState.userDetails.email}'
        }`}
    </>
  );
}

export default PasswordReset;
