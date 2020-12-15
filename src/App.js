import logo from './logo.svg';
import './App.scss';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBbO3C5fa0Isgvtw49AQhuKQ5srOp1wTAc",
  authDomain: "teamx-little-tags.firebaseapp.com",
  projectId: "teamx-little-tags",
  storageBucket: "teamx-little-tags.appspot.com",
  messagingSenderId: "302475667565",
  appId: "1:302475667565:web:c5a3ff1342357eeb357764",
  measurementId: "G-M4B28R13SP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Welcome to little-tags.
        </h2>
      Website is under construction, please come back later.
      </header>
    </div>
  );
}

export default App;
