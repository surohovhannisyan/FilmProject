import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBRegmu6l6G00JTkDtLcmhD97rD2NBg2cU',
  authDomain: 'film-proj-70346.firebaseapp.com',
  projectId: 'film-proj-70346',
  storageBucket: 'film-proj-70346.appspot.com',
  messagingSenderId: '906768785046',
  appId: '1:906768785046:web:3693d0c9e2cbdd968aecb7',
});

export const auth = app.auth();
export default app;
