import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCztAfHK5ztnmPwiHHkSAl59U5hiRV0f_g",
  authDomain: "function-converter-2d54d.firebaseapp.com",
  projectId: "function-converter-2d54d",
  storageBucket: "function-converter-2d54d.appspot.com",
  messagingSenderId: "801224030468",
  appId: "1:801224030468:web:9a7a826b91455c12b5b851",
  measurementId: "G-LSZBNJ5X6G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
