import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAImhMRdqqDO9Osu_Z2px7JJ-xr-T1ozuM",
  authDomain: "slack-clone-b9db3.firebaseapp.com",
  projectId: "slack-clone-b9db3",
  storageBucket: "slack-clone-b9db3.appspot.com",
  messagingSenderId: "871382118987",
  appId: "1:871382118987:web:50bbc06d10b87c5908d3ce",
  measurementId: "G-4G0842Q616",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
