import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCLaxhqUk9xN6reZ4l8bQUgVWLU20Q6Rl8',
  authDomain: 'crwn-clothing-db-d63bd.firebaseapp.com',
  projectId: 'crwn-clothing-db-d63bd',
  storageBucket: 'crwn-clothing-db-d63bd.appspot.com',
  messagingSenderId: '33546734885',
  appId: '1:33546734885:web:5cb7ccc37956cf461f5ecc',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
