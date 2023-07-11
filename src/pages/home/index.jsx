import { Advert, Auto, Capital, Last } from "components/sections";
import React from "react";

const index = () => {
  return (
    <div className="home">
      <div className="container">
        <Capital />
        <Last />
        <Advert />
        <Auto />
        <div className="bottom-footer"></div>
      </div>
    </div>
  );
};

export default index;
