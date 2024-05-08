import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
// const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
// const FIREBASE_PROJECT_ID = process.env.REACT_FIREBASE_PROJECT_ID;
// const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
// const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
// const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
// const FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: "AIzaSyCztAfHK5ztnmPwiHHkSAl59U5hiRV0f_g",
  authDomain: "function-converter-2d54d.firebaseapp.com",
  projectId: "function-converter-2d54d",
  storageBucket: "function-converter-2d54d.appspot.com",
  messagingSenderId: "801224030468",
  appId: "1:801224030468:web:9a7a826b91455c12b5b851",
  measurementId: "G-LSZBNJ5X6G",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
