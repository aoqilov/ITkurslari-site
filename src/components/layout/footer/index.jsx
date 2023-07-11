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
  return (
    <div className="foter">
      <div className="container">
        <div className="foter-desktop">
          <div className="foter-list-wrapper">
            <div className="foter-list__left left">
              <a href="#logo" className="left-logo">
                <img src={imgLogoFooter} alt="dsa" />
              </a>
              <div className="left-contact">
                <a className="left-contact__link" href="#reklama">
                  reklama
                </a>
                <a className="left-contact__link" href="#loyiha">
                  loyiha haqida
                </a>
                <a className="left-contact__link" href="#qoidalar">
                  qoidalar
                </a>
                <a className="left-contact__link" href="#contact">
                  contact
                </a>
              </div>
              <div className="left-fido">
                <p>
                  Design by{" "}
                  <a href="#fido" className="left-fido__link">
                    Fido Studio
                  </a>
                </p>
              </div>
            </div>
            <div className="foter-list__right right">
              <nav className="right-nav">
                <ul className="right-nav__list">
                  <li className="right-nav__item">
                    <a href="/" className="right-nav__link active">
                      texno yangiliklar
                    </a>
                  </li>
                  <li className="right-nav__item">
                    <a href="/info" className="right-nav__link">
                      avto yangiliklar
                    </a>
                  </li>
                  <li className="right-nav__item">
                    <a href="#sharhlar" className="right-nav__link">
                      sharhlar
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="right-social">
                <h4 className="right-social__title">
                  Biz ijtimoiy tarmoqlarda:
                </h4>
                <div className="right-social__box">
                  <a href="#icon" className="right-social__link">
                    <img src={svgFacebook} alt="dsa" />
                  </a>

                  <a href="#icon" className="right-social__link">
                    <img src={svgTwit} alt="dsa" />
                  </a>
                  <a href="#icon" className="right-social__link">
                    <img src={svgInsta} alt="dsa" />
                  </a>
                  <a href="#icon" className="right-social__link">
                    <img src={svgLink} alt="dsa" />
                  </a>
                </div>
              </div>
              <div className="right-biglogo">
                <img src={imgBigLogo} alt="das" />
              </div>
              <p className="right-copyright">
                © Copyright 2022 Giglink Barcha huquqlar himoyalangan.
                O‘zbekiston Matbuot va axborot agentligi tomonidan 2013-yil
                04-06-sonli ro‘yxatga olinganlik guvohnomasi № 0976
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="foter-mobile">
        <div className="container">
          <div className="mobile-box">
            <a href="/" className="mobile-box__link active">
              <img src={fHome} alt="asd" />
              <p>home</p>
            </a>
            <a href="/info" className="mobile-box__link">
              <img src={fList} alt="asd" />
              <p>list</p>
            </a>
            <a href="#wheel" className="mobile-box__link">
              <img src={fwheel} alt="asd" />
              <p>wheel</p>
            </a>
            <a href="#doc" className="mobile-box__link">
              <img src={fDocument} alt="asd" />
              <p>document</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
