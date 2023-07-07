import React, { useState } from "react";
import imgLogo from "assets/imgbox/png/logoHeader.jpg";

const index = () => {
  const [navActive, setNavActive] = useState(1);
  const [langActive, setLangActive] = useState(1);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <a href="#home">
              <img src={imgLogo} alt="logo" title="home" />
            </a>
          </div>
          <div className="header__menu">
            <nav className="nav">
              <ul className="nav__list">
                <li className={`nav__item ${navActive == 1 ? "active" : ""}`}>
                  <a
                    href="/"
                    className="nav__item-a"
                    onClick={() => setNavActive(1)}
                  >
                    home t.y
                  </a>
                </li>
                <li className={`nav__item ${navActive == 2 ? "active" : ""}`}>
                  <a
                    href="info"
                    className="nav__item-a"
                    onClick={() => setNavActive(2)}
                  >
                    info a.y
                  </a>
                </li>
                <li className={`nav__item ${navActive == 3 ? "active" : ""}`}>
                  <a
                    href="#info"
                    className="nav__item-a"
                    onClick={() => setNavActive(3)}
                  >
                    sharhlar
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__lang">
            <ul className="lang">
              <li
                onClick={() => setLangActive(1)}
                className={`lang__itembox ${langActive == 1 ? "active" : ""}`}
              >
                uz
              </li>
              <li
                onClick={() => setLangActive(2)}
                className={`lang__itembox ${langActive == 2 ? "active" : ""}`}
              >
                ру
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
