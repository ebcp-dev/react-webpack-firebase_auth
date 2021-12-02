import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';

export const loginUser = (email: string, password: string) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Signed in user: ', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('An error occured: ', errorCode, errorMessage);
    });
};

export const registerUser = (email: string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Registered user: ', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error occured: ', errorCode, errorMessage);
    });
};

export const resetPassword = (email: string) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('An error has occured: ', errorCode, errorMessage);
    });
};
