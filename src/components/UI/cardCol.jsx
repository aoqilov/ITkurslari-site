import React from "react";
import { Clock, Hashtag } from ".";

const cardCol = ({ arr }) => {
  return (
    <div className="card-col">
      {arr.map((item) => {
        return (
          <>
            <div className="border-24"></div>
            <div className="card">
              <div className="card-infobox">
                <a
                  href={`#${item.title}`}
                  className="card-infobox__title title-24"
                >
                  {item.title}
                </a>
                <div className="card-infobox__bottom">
                  <div className="bottom-hash">
                    <Hashtag main="m" />
                  </div>
                  <div className="bottom-time">
                    <Clock time={item.time} />
                  </div>
                </div>
              </div>
              <a href={`#${item.title}`} className="card-imgbox">
                <img src={item.foto} alt={item.title} />
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default cardCol;
