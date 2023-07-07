import React, { useState } from "react";
import imgLogoFooter from "assets/imgbox/png/logoFoter.png";
import svgFacebook from "assets/imgbox/svg/facebook.svg";
import svgTwit from "assets/imgbox/svg/twit.svg";
import svgInsta from "assets/imgbox/svg/Instagram svg.svg";
import svgLink from "assets/imgbox/svg/link.svg";
import imgBigLogo from "assets/imgbox/png/logofoterblue.png";
import fHome from "assets/imgbox/svg/fhome.svg";
import fList from "assets/imgbox/svg/flist.svg";
import fwheel from "assets/imgbox/svg/fwheel.svg";
import fDocument from "assets/imgbox/svg/fdocument.svg";

const index = () => {
  const [fotNavActive, setFotNavActive] = useState(1);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__desktop">
          <div className="desktop">
            <div className="desktop__col1">
              <div className="col1-logo">
                <a href="#image">
                  <img src={imgLogoFooter} alt="logo ggg" />
                </a>
              </div>
              <div className="col1-menu">
                <ul>
                  <li>
                    <a href="#reklama">reklama</a>
                  </li>
                  <li>
                    <a href="#loyiha haqida">loyiha haqida</a>
                  </li>
                  <li>
                    <a href="#qoidalar">qoidalar</a>
                  </li>
                  <li>
                    <a href="#contact">biz bilan aloqa</a>
                  </li>
                </ul>
              </div>
              <div className="col1-design">
                <p>
                  Design by <a href="#fido-studio">Fido Studio</a>
                </p>
              </div>
            </div>
            <div className="desktop__col2">
              <div className="col2-nav">
                <ul>
                  <li>
                    <a
                      onClick={() => setFotNavActive(1)}
                      className={`${fotNavActive == 1 ? "active" : ""}`}
                      href="#texno-yangiliklar"
                    >
                      texno yangiliklar
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setFotNavActive(2)}
                      className={`${fotNavActive == 2 ? "active" : ""}`}
                      href="#avto-yangiliklar"
                    >
                      avto yangiliklar
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setFotNavActive(3)}
                      className={`${fotNavActive == 3 ? "active" : ""}`}
                      href="#sharhlar"
                    >
                      sharhlar
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col2-socialbox">
                <div className="social">
                  <h2 className="social__title">Biz ijtimoiy tarmoqlarda:</h2>
                  <div className="social__iconsbox">
                    <a href="#social-link">
                      <img src={svgFacebook} alt="svg icon" title="facebook" />
                    </a>
                    <a href="#social-link">
                      <img src={svgTwit} alt="svg icon" title="twiter" />
                    </a>
                    <a href="#social-link">
                      <img src={svgInsta} alt="svg icon" title="instagram" />
                    </a>
                    <a href="#social-link">
                      <img src={svgLink} alt="svg icon" title="link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col2-biglogo">
                <img src={imgBigLogo} alt="big logo" />
              </div>
              <div className="col2-copyright">
                <p className="col2-copyright-text">
                  © Copyright 2022 Giglink Barcha huquqlar himoyalangan.
                  O‘zbekiston Matbuot va axborot agentligi tomonidan 2013-yil
                  04-06-sonli ro‘yxatga olinganlik guvohnomasi № 0976
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__mobile mobile">
          <a href="/" className="mobile__box active">
            <img src={fHome} alt="icon home" />
            <p>home</p>
          </a>
          <a href="info" className="mobile__box">
            <img src={fList} alt="icon home" />
            <p>lenta</p>
          </a>
          <a href="#whheel" className="mobile__box">
            <img src={fwheel} alt="icon home" />
            <p>avto</p>
          </a>
          <a href="#document" className="mobile__box">
            <img src={fDocument} alt="icon home" />
            <p>tavsif</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default index;
