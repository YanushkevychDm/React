import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA8mtbmbZNBxIgcCprtiflbaeB3J9VLk0c",
  authDomain: "catch-of-the-day-2-dmytro.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-2-dmytro.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a name for export
export { firebaseApp };

// this is a default export
export default base;

