import { CardCol, Hashtag } from "components/UI";
import React from "react";
import { News } from "store";

const final = () => {
  return (
    <section className="final base-frame">
      <div className="final__maintitle">
        <a href="#lastnews" className="title-top">
          So’ngi yangiliklar
        </a>
        <div className="final-hashtag">
          <Hashtag />
        </div>
      </div>
      <CardCol arr={News} />
      <div className="more-news">
        <a href="#koproq" className="more-news__btn">
          Ko’proq yangilik
        </a>
      </div>
    </section>
  );
};

export default final;
