import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../../app/redux/store';

// Define a type for the slice state
interface AuthState {
  userDetails: {
    email: string;
    password: string;
  };
}

// Define the initial state using that type
const initialState: AuthState = {
  userDetails: {
    email: '',
    password: ''
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userDetails = {
        email: action.payload.email,
        password: action.payload.password
      };
    }
  }
});

export const { saveUser } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
