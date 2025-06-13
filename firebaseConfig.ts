// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfSbKvDa55IKIUqU4I_qfWcqHwE4SBwbo",
  authDomain: "skripsiku-d5e0a.firebaseapp.com",
  projectId: "skripsiku-d5e0a",
  storageBucket: "skripsiku-d5e0a.firebasestorage.app",
  messagingSenderId: "963402411292",
  appId: "1:963402411292:web:59734d6c37c715781b5ed9",
  measurementId: "G-DJ4R9VFPDH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const analytics = getAnalytics(app);