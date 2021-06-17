// NPM Packages
import firebase from "firebase";
// Firebase products
import "firebase/auth";
import "firebase/firestore";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Project files
import Auth from "./services/Auth";
import AuthPage from "./pages/auth/AuthPage";
import "./styles/base.css";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WinnerPage from "./pages/WinnerPage/WinnerPage";
import VotingPage from "./pages/VotingPage/VotingPage";
import Footer from "./components/Footer";
import UploadButton from "./components/UploadButton";
import HeaderBackground from "./components/HeaderBackground";
import ToggleLanguage from "./components/ToggleLanguage";

//Test pages
import TestMethods from "./services/TestMethods";

export default function App() {
  // State
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('isIn')));
  const [status, setStatus] = useState(1); // 0 = loading data, 1 = data loaded, 2 = error;
  const [users, setUsers] = useState([]);

  const MOCKUP_URL = "https://api.jsonbin.io/b/609a7407e0aabd6e191b79d7/1";
  const url = MOCKUP_URL;
  
  const json_mockup = require("./api/api_users.json");
  const musers = json_mockup;
  

  // Constants
  //Auth.bindLoggedInStateSetter(setLoggedIn);
//console.log(loggedIn)

  //Methods


 
  //initialize app
  function initializeFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyD1DP3Fg9S8UEKKpyt7XknY6vickoJ3eFs",
      authDomain: "instyle-3f5f5.firebaseapp.com",
      databaseURL:
        "https://instyle-3f5f5-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "instyle-3f5f5",
      storageBucket: "instyle-3f5f5.appspot.com",
      messagingSenderId: "8399215605",
      appId: "1:8399215605:web:09ba5877b522ef0abe5ebc",
    };
    //initialize firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  initializeFirebase();

  //TODO - Fetching data
 
console.log("data",musers)
console.log("loggedIn ?",loggedIn)

  // Components
  const loggedInRouter = (
    <BrowserRouter>
      <div>
        <HeaderBackground />
        <ToggleLanguage />
        {status === 0 && <p className="loader"></p>}
        {status === 2 && <p className="error">Please check your connection</p>}
        {status === 1 && (
          <div>
            <Switch>
              <Route
                path="/profile/:userEmail"
                component={(props) => (
                  <ProfilePage
                    users={musers}
                    userToDisplay={props.match.params.userEmail}
                  />
                )}
              />{" "}
              {/* ok */}
              <Route path="/discover">
                <DiscoverPage users={musers} /> {/* ok */}
              </Route>
              <Route path="/vote">
                <VotingPage users={musers} /> {/* ok */}
              </Route>
              <Route exact path="/">
                {loggedIn ? <Redirect to="/winner" /> : <AuthPage />}
              </Route>
              <Route path="/winner">
                <WinnerPage users={musers} /> {/* ok */}
              </Route>
              {/* TESTING ROUTES */}
              <Route path="/testmethods">
                <TestMethods users={musers} /> {/* ok */}
              </Route>
              <Route path="/login">
                <AuthPage />
              </Route>
            </Switch>

            <Footer loggedIn={loggedIn} />
            <UploadButton users={musers} />
          </div>
        )}
      </div>
    </BrowserRouter>
  );

  return loggedIn ? loggedInRouter : <AuthPage />;
}
