// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKULfS_3NIQ4DoPYvJvIefZBzL4BeNwyA",
  authDomain: "greeninsights-61446.firebaseapp.com",
  projectId: "greeninsights-61446",
  storageBucket: "greeninsights-61446.appspot.com",
  messagingSenderId: "478723681140",
  appId: "1:478723681140:web:9153e664f1e1f6225b1a21",
  measurementId: "G-W2K4KT6P2R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(database);
export const analytics = getAnalytics(app);