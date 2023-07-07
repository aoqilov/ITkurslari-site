import React from "react";
import svgClock from "assets/imgbox/svg/clock.svg";

const clock = ({ time }) => {
  return (
    <div className="infobox__timebox time-clock">
      <img src={svgClock} alt="icon-clock" />
      <p>{time}</p>
    </div>
  );
};

export default clock;
