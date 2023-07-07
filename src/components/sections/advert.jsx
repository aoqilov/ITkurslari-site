import React from "react";
import imgAdv from "assets/imgbox/png/telgram.png";

const advert = () => {
  return (
    <section className="advert">
      <div className="advert-content">
        <h4>Bizni Telegramda kuzatib boring</h4>
        <a href="#giglink">@giglink</a>
      </div>
      <img src={imgAdv} className="advert-img" alt="sad" />
    </section>
  );
};

export default advert;
