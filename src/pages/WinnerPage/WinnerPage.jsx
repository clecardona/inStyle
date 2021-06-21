import React from "react";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";
import firebase from "firebase";
// Firebase products
import "firebase/auth";
import "firebase/firestore";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import king from "../../assets/img/icons/crown.svg";
import Auth from "../../services/Auth";
import Methods from "../../services/Methods";
import SlidingMenu from "../../components/SlidingMenu";
import like from "../../assets/img/logo/flame.png";
import CountdownComponent from "../../components/CountdownComponent";

export default function WinnerPage({ users }) {
  // Constants
  const [t, i18n] = useTranslation("common");

  const mWinnerPicUrl =
    "https://i.pinimg.com/originals/bf/7e/6f/bf7e6f75de912ec9b0fe0136ace95332.jpg";

  /*  const winnerId = Methods.getWinner(users)[0];
 const winnerPicId = Methods.getWinner(users)[1] 
  const winner = Methods.getUserById(users,winnerId)

 const winnerPic = winner.pictures.filter(function (item) {
  return item.id === winnerPicId ;
});  */

  //console.log(winnerPic)

  const winnerId = 4;
  const winner = Methods.getUserById(users, winnerId);
  const winnerPic = winner.pictures[0];

  //const currentUserMail = sessionStorage.getItem("currentUser")
  //console.log(currentUserMail)

  return (
    <div className="general-container">
      <header>
        <SlidingMenu users={users} />
        <div className="nav-container">
          <NavBar onLogout={() => Auth.logout()} />
        </div>
      </header>

      <main>
        <div className="page-title-vote">
          <h1>
            {" "}
            <img className="img-title img-30 " src={king} /> {t("winner.title")}
          </h1>
        </div>

        <div className="winner-content">
          <div className="winner-meta">

          <UserMeta user={winner} />
          <div className="score-timestamp">14 hours ago</div>
          </div>

          <div>
            <div className="wrapper-img-square">
              <img id="main-img" src={winnerPic.url} alt="main-img" />

             
              <CountdownComponent />

              <div className="circle-drawer bottom-left follow-me">
                <a
                  href={"http://www.instagram.com/" + winner.instagram}
                  target="blank"
                  className="btn-blue"
                >
                  {t("winner.button")}{" "}
                </a>
              </div>

              <div className="circle-drawer top-right winner-score">
                <img className="img-70" src={like} alt="logo-like" />
                <p className="winner-score-text">200 </p>
              </div>

            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
}
