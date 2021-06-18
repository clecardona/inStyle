import { slide as Menu } from "react-burger-menu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignOutAlt 
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSafari
} from "@fortawesome/free-brands-svg-icons";
import Auth from "../services/Auth";

import king from "../assets/img/icons/crown.svg";
import git from "../assets/img/icons/git.svg";
import signout from "../assets/img/icons/signout.svg";
import discover from "../assets/img/icons/telescope.svg";
import vote from "../assets/img/icons/vote.svg";
import profile from "../assets/img/icons/woman.svg";
import Methods from "../services/Methods";

import AuthApi from "../api/AuthApi";

export default function SlidingMenu({ users }) {
  const [t, i18n] = useTranslation("common");
  //const currentUserEmail = sessionStorage.getItem("currentUser")
  //console.log(currentUserEmail)
  const currentUserId =4 /* Methods.getIdByEmail(users,"powerrangers@gmail.com") */
  //console.log(currentUserId)

  function onLogout() {
    Auth.logout();
  }

  return (
    <Menu>
      <div className="menu-title">Menu</div>
      <hr />
      <div className="menu-item">
        <img className="img-30" src={king} />
        <a id="home" className="menu-item-text" href="/winner">
          {t("sidebar.king")}
        </a>
      </div>

      <div className="menu-item">
        <img className="img-30" src={profile} />
        <a
          id="home"
          className="menu-item-text"
          href={"/profile/" + currentUserId}
        >
          {t("sidebar.profile")}
        </a>
      </div>

      <div className="menu-item">
        <img className="img-30" src={discover} />
        <a id="about" className="menu-item-text" href="/discover">
          {t("sidebar.discover")}
        </a>
      </div>

      <div className="menu-item">
        <img className="img-30" src={vote} />
        <a id="contact" className="menu-item-text" href="/vote">
          {t("sidebar.vote")}
        </a>
      </div>
      <hr />
      <div className="burger-footer">
        <span className="burger-footer-item">
          <a
            className="menu-item-text"
            href="https://github.com/clecardona/SDA-group-project"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              id="github"
              className="icon-menu"
              size="2x"
            />
          </a>
        </span>

        <span className="burger-footer-item">
          <button onClick={onLogout}>
            <Link to="/">
              <FontAwesomeIcon
                icon={faSignOutAlt }
                id="logout"
                className="icon-menu"
                size="3x"
              />
            </Link>
          </button>
        </span>
        
      </div>
    </Menu>
  );
}
