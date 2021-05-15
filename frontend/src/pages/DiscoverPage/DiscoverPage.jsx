import React from "react";
import { useTranslation } from "react-i18next";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import SlidingMenu from "../../components/SlidingMenu";
import Methods from "../../services/Methods";
import CardDrawer from "../../components/CardDrawer";

export default function DiscoverPage({ users }) {
  // Constants
  const [t, i18n] = useTranslation("common");
  const currentUserEmail = AuthApi.getCurrentUser();
  const shuffledUsers = Methods.randomArrayShuffle(users);

  console.log(shuffledUsers)

  return (
    <div className="general-container">
      <header>
        <SlidingMenu />
        <NavBar onLogout={() => Auth.logout()} />
      </header>

      <main>
        <div className="homepage-content">
          <div className="page-title">
            <h2>{t("discover.title")} ...</h2>
          </div>

          <div className="title-wrapper">
            <div className="card-small-container">
              <React.Fragment>
                {shuffledUsers
                  .filter(function (item) {
                    return item.email !== currentUserEmail;
                  })
                  .filter(function (item) {
                    return item.pictures.length > 0;
                  })
                  .map((item) => (
                    <React.Fragment key={item.id}>
                      <Card
                        item={item}
                        score={false}
                        votes={true}
                        meta={true}
                      />
                    </React.Fragment>
                  ))}
              </React.Fragment>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
