import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0YGGXDqHJWXD_n3_YMeCKhfpJlYzc8JI",
  authDomain: "typescript-test-3b4f0.firebaseapp.com",
  projectId: "typescript-test-3b4f0",
  storageBucket: "typescript-test-3b4f0.appspot.com",
  messagingSenderId: "37928239406",
  appId: "1:37928239406:web:c02c96d34dbe8406517abf",
  measurementId: "G-QHNVDRERED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
