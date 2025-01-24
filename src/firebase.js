import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   // Replace with your Firebase configuration
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDm2gq8-thtDKph4FbeMhtCWL2Wa-difLY",
  authDomain: "blop-54e72.firebaseapp.com",
  projectId: "blop-54e72",
  storageBucket: "blop-54e72.appspot.com",
  messagingSenderId: "279479184441",
  appId: "1:279479184441:web:6e3fccb28c9c93912c71e8",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
