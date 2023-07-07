import React from "react";
import imgMain from "assets/imgbox/png/capitalmain.png";
import svgClock from "assets/imgbox/svg/clock.svg";
import { Hashtag } from "components/UI";
import { hashitem } from "store";
const capital = () => {
  return (
    <section className="capital base-frame">
      <div className="capital__maincard maincard">
        <div className="maincard__imgbox">
          <img src={imgMain} alt="mainpost" />
        </div>
        <div className="maincard__infobox infobox">
          <div className="infobox__hashtagbox haw">
            <Hashtag main="m" />
          </div>
          <h2 className="infobox__title title-24">
            <a
              className="title-24"
              href="#Rebranding va restyling - farqi nimada?"
            >
              Rebranding va restyling - farqi nimada?
            </a>
          </h2>
          <p className="infobox__description">
            <a href="#rebreding" className="des-14">
              Hayotdagi eng doimiy narsa - bu oʻzgarish. Brendlar ham bundan
              mustasno emas. Rebranding yoki restayling'dan oʻtmagan uzoq
              tarixga ega boʻlgan brend deyarli...
            </a>
          </p>
          <div className="infobox__timebox time-clock">
            <img src={svgClock} alt="icon-clock" />
            <p>5-dekabr, 09:24</p>
          </div>
        </div>
      </div>
      <div className="border-32"></div>
      <div className="capital__othercard">
        <div className="othercard">
          <div className="othercard__hashtagbox haw">
            <Hashtag main="b" />
          </div>
          <h2 className="othercard__title title-18">
            <a
              href="# Process, Project, Case va Product management — asosiy farqlari
            nimada?"
              className="title-18"
            >
              Process, Project, Case va Product management — asosiy farqlari
              nimada?
            </a>
          </h2>
          <p className="othercard__description des-14-max">
            Boshqaruvning har xil turlari mavjud. Eng mashhurlari process
            (jarayon) va project (loyiha) boshqarish boʻlib, hozirda ular...
          </p>
          <div className="othercard__timebox time-clock">
            <img src={svgClock} alt="icon-clock" />
            <p>4-dekabr, 09:24</p>
          </div>
        </div>
        <div className="border-inline-32"></div>
        <div className="othercard">
          <div className="othercard__hashtagbox haw">
            <Hashtag main="d" />
          </div>
          <h2 className="othercard__title title-18">
            <a
              href="# Process, Project, Case va Product management — asosiy farqlari
            nimada?"
              className="title-18"
            >
              Process, Project, Case va Product management — asosiy farqlari
              nimada?
            </a>
          </h2>
          <p className="othercard__description  des-14-max">
            Boshqaruvning har xil turlari mavjud. Eng mashhurlari process
            (jarayon) va project (loyiha) boshqarish boʻlib, hozirda ular...
          </p>
          <div className="othercard__timebox time-clock">
            <img src={svgClock} alt="icon-clock" />
            <p>4-dekabr, 09:24</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default capital;
