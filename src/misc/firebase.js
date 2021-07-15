import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyC8m8Q8uM4Y7aq5s-SUytrORHW2hph6yVA',
  authDomain: 'shopping-cart-62820.firebaseapp.com',
  projectId: 'shopping-cart-62820',
  storageBucket: 'shopping-cart-62820.appspot.com',
  messagingSenderId: '658350253518',
  appId: '1:658350253518:web:f9e4b76ea256f1391f379f',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
