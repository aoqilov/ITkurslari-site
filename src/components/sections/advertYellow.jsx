import React from "react";
import adv2 from "assets/imgbox/png/advert2.png";
const advertYellow = () => {
  return (
    <section className="advyel">
      <div className="advyel-imgbox">
        <img src={adv2} alt="das" />
      </div>
      <div className="advyel-content">
        <a href="#link" className="title-24">
          {" "}
          ingliz tilini biz bilan o'rganing
        </a>
        <a href="#batafsil" className="btn">
          batafsil
        </a>
      </div>
    </section>
  );
};

export default advertYellow;
