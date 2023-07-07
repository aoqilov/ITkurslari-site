import { CardCol } from "components/UI";
import React from "react";
import { lastNews } from "store";

const last = () => {
  return (
    <section className="last base-frame">
      <div className="last__maintitle">
        <a href="#lastnews" className="title-top">
          So’ngi yangiliklar
        </a>
      </div>
      <CardCol arr={lastNews} />
      <div className="more-news">
        <a href="#koproq" className="more-news__btn">
          Ko’proq yangilik
        </a>
      </div>
    </section>
  );
};

export default last;
