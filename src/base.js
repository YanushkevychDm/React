import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCD9JDrZn4Xp6BcZYa0_IVmqtOkaPhwdzE",
    authDomain: "catch-of-the-day-dmytro.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-dmytro.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a name for export
export { firebaseApp };

// this is a default export
export default base;

