import React from "react";
import imgAuto1 from "assets/imgbox/png/auto.png";

import { Clock, Hashtag } from "components/UI";
import imgA1 from "assets/imgbox/png/auto2.png";
import imgA2 from "assets/imgbox/png/auto3.png";

const auto = () => {
  return (
    <section className="auto base-frame">
      <a href="#auto" className="auto-toptitle title-top">
        Auto yangiliklar
      </a>
      <div className="border-24"></div>

      <div className="auto-mainbox">
        <a href="#img" className="auto-mainbox__img">
          <img src={imgAuto1} alt="" />
        </a>
        <div className="auto-mainbox__content">
          <div className="content">
            <div className="content-hashtagbox">
              <Hashtag main="d" />
            </div>
            <a href="#dasad" className="content-title title-24">
              Bentley ning birinchi elektromobili 1400 ot kuchiga ega bo'lib,
              1,5 soniyada 0-97 km tezlikka erishadi
            </a>
            <div className="content-time">
              <Clock time={"24 daqiqa oldin"} />
            </div>
          </div>
        </div>
      </div>
      <div className="another">
        <div className="border-24"></div>
        <div className="card">
          <div className="card-content">
            <a href="#title" className="card-content__title title-24">
              Process, Project, Case va Product management — asosiy farqlari
              nimada?
            </a>
            <p className="card-content__des des-14">
              MercedesBenz Vision EQXX uzoq masofali elektr konsept avtomobil
              bo‘lib, turli ilg‘or kelajak elektromobillari uchun sinov
              tajribasi bo‘lib xizmat qiladi.
            </p>
            <div className="card-content__bottom">
              <div className="bottom-hash">
                <Hashtag />
              </div>
              <div className="bottom-tiime">
                <Clock time={"5 daqiqa oldin"} />
              </div>
            </div>
          </div>
          <a href="#title" className="card-img">
            <img src={imgA1} alt="das" />
          </a>
        </div>
        <div className="border-24"></div>
        <div className="card">
          <div className="card-content">
            <a a href="#title" className="card-content__title title-24">
              Volkswagen ID.Aero - bu VW elektr ID oilasining yangi a’zosi
            </a>
            <p className="card-content__des des-14">
              Volkswagen Xitoyda AERO kontsept avtomobilini debyut qilish orqali
              potentsial mijozlarga brendning birinchi to'liq elektr sedanini
              taklif qilmoqda.
            </p>
            <div className="card-content__bottom">
              <div className="bottom-hash">
                <Hashtag />
              </div>
              <div className="bottom-tiime">
                <Clock time={"5 daqiqa oldin"} />
              </div>
            </div>
          </div>
          <a href="#title" className="card-img">
            <img src={imgA2} alt="das" />
          </a>
        </div>
      </div>
      <div className="auto-more more-news">
        <a href="#koproq" className="more-news__btn">
          Ko’proq yangilik
        </a>
      </div>
    </section>
  );
};

export default auto;
