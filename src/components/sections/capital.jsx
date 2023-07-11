import React from "react";
import imgMain from "assets/imgbox/png/capitalmain.png";
import svgClock from "assets/imgbox/svg/clock.svg";
import { Clock, Hashtag } from "components/UI";
const capital = () => {
  return (
    <section className="news base-frame">
      <div className="big-news">
        <div className="big-news__imgbox">
          <img src={imgMain} alt="mainpost" />
        </div>
        <div className="big-news__content">
          <div className="big-news__hashtagbox">
            <Hashtag main="m" />
          </div>
          <a
            className="big-news__title title-24"
            href="#Rebranding va restyling - farqi nimada?"
          >
            Rebranding va restyling - farqi nimada?
          </a>
          <a href="#rebreding" className="big-news__description des-14">
            Hayotdagi eng doimiy narsa - bu oʻzgarish. Brendlar ham bundan
            mustasno emas. Rebranding yoki restayling'dan oʻtmagan uzoq tarixga
            ega boʻlgan brend deyarli...
          </a>
          <div className="big-news__timebox time-clock">
            <Clock time={"5-dekabr, 09:24"} />
          </div>
        </div>
      </div>
      <div className="border-32"></div>
      <div className="small-news">
        <div className="small-news__card">
          <div className="small-news__hashtagbox">
            <Hashtag main="b" />
          </div>
          <a
            href="# Process, Project, Case va Product management — asosiy farqlari
            nimada?"
            className="small-news__title title-18"
          >
            Process, Project, Case va Product management — asosiy farqlari
            nimada?
          </a>
          <p className="small-news__description des-14-max">
            Boshqaruvning har xil turlari mavjud. Eng mashhurlari process
            (jarayon) va project (loyiha) boshqarish boʻlib, hozirda ular...
          </p>
          <div className="small-news__timebox time-clock">
            <Clock time={"4-dekabr, 09:24"} />
          </div>
        </div>
        <div className="border-inline-32"></div>
        <div className="small-news__card">
          <div className="small-news__hashtagbox">
            <Hashtag main="d" />
          </div>
          <a
            href="# Process, Project, Case va Product management — asosiy farqlari
            nimada?"
            className="small-news__title title-18"
          >
            Process, Project, Case va Product management — asosiy farqlari
            nimada?
          </a>
          <p className="small-news__description  des-14-max">
            Boshqaruvning har xil turlari mavjud. Eng mashhurlari process
            (jarayon) va project (loyiha) boshqarish boʻlib, hozirda ular...
          </p>
          <div className="small-news__timebox time-clock">
            <Clock time={"5-dekabr,16:00"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default capital;
