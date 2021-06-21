// NPM Packages
import {React} from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import firebase from "firebase/app";
// Firebase products 
import "firebase/auth";
import "firebase/firestore";

// Project files
import "../../styles/base.css";
import Auth from "../../services/Auth";
import LandingOverlay from "../../components/LandingOverlay";

export default function LoginPage() {
  //constants
  
  // Methods
  async function register({username,email,password}) {
    
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //Auth.setLoggedIn(true);
        localStorage.setItem('isIn', true)
        alert("Account created")
        // Signed in
        var user = userCredential.user;
        //console.log(user)
        //sessionStorage.setItem("currentUser",1)
        //window.location.reload()
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Invalid data ")
        // ..
      });
    
      sessionStorage.setItem("username", username);

  }

  async function login({email, password}) {

   await  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    
    localStorage.setItem('isIn', true)

    alert("welcome back")
    var user = userCredential.user;
    console.log(user.email)
   sessionStorage.setItem("currentUser",user.email)
  window.location.reload()
  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Invalid username or password ")
  });

    
  }
  return (
    <div className="wrapper">
      <main>
        <div className="centered-container">
          <div className="title">
            <h3>
              <strong>In</strong>style
            </h3>
            <h1> Be the one </h1>
          </div>
 
        </div>

        <div className="auth-buttons-container">

        <div className="auth-buttons-wrapper">
            <LandingOverlay onSubmit={login} signIn={true} />
            <LandingOverlay onSubmit={register} signIn={false} />
            <button 
            id="visitor" 
            onClick={
              ()=>{localStorage.setItem('isIn', true)
              window.location.reload()}
              
              }
              >Enter as simple visitor</button>
          </div>
          </div>
      </main>
    </div>
  );
}
