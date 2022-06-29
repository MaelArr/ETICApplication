// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPF7fNAgkY1PTYjPwKiNZKxtCXcDZ0RFU",
  authDomain: "fir-auth-7472f.firebaseapp.com",
  projectId: "fir-auth-7472f",
  storageBucket: "fir-auth-7472f.appspot.com",
  messagingSenderId: "436088365932",
  appId: "1:436088365932:web:545a1bed08a587d7e54949"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

export { firebase};