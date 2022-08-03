import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQXVFvAqvrEvDypHfaOdPj9x6Nzvk4Hvo",
  authDomain: "netflix-clone-26b61.firebaseapp.com",
  projectId: "netflix-clone-26b61",
  storageBucket: "netflix-clone-26b61.appspot.com",
  messagingSenderId: "142261023981",
  appId: "1:142261023981:web:d0619f2da30bb1bcddc8e4",
  measurementId: "G-1Q7CE7HYCS",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
