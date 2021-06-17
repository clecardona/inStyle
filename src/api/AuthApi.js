import firebase from "firebase/app";
// Firebase products 
import "firebase/auth";
import "firebase/firestore";

class AuthApi {
  /* authenticate({ email, password }) {
    sessionStorage.setItem("loggedUser", email);
    sessionStorage.setItem("language", "english");
    return Api.post("/authenticate", { email, password });
  } */

 /*  register({ email, password }) {
    sessionStorage.setItem("loggedUser", email);
    sessionStorage.setItem("language", "english");
    return Api.post("/register", {email, password });

  } */

  getCurrentUser() {
    return sessionStorage.getItem("loggedUser");
  }

  // Languages
  setLanguageToEng() {
    sessionStorage.setItem("language", "english");
  }

  setLanguageToSwe() {
    sessionStorage.setItem("language", "svenska");
  }

  getLanguage() {
    return sessionStorage.getItem("language");
  }
}

export default new AuthApi();
