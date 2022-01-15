import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDnSI3rc54GJ6dcDZG0ouNT3kJ8hUzLMTc",
  authDomain: "maradonapp-9063d.firebaseapp.com",
  projectId: "maradonapp-9063d",
  storageBucket: "maradonapp-9063d.appspot.com",
  messagingSenderId: "5800220342",
  appId: "1:5800220342:web:6d77c1d1c2fadeec8d3817",
  measurementId: "G-HBEWFBQXE4"
};

const app = initializeApp(firebaseConfig);

export default getFirestore();