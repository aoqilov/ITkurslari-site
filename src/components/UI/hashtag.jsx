import React, { useState } from "react";

const hashtag = ({ main = "m" }) => {
  const [tagColor, setTagColor] = useState(main);

  return (
    <div>
      <div className="main__hashtag">
        <div
          onClick={() => setTagColor("m")}
          className={`hashtag ${tagColor == "m" ? "blue" : ""}`}
        >
          <h4 className="hashtag__text">
            <p># </p> marketing
          </h4>
        </div>
        <div
          onClick={() => setTagColor("d")}
          className={`hashtag ${tagColor == "d" ? "red" : ""}`}
        >
          <h4 className="hashtag__text">
            <p>#</p>dasturlash
          </h4>
        </div>
        <div
          onClick={() => setTagColor("b")}
          className={`hashtag ${tagColor == "b" ? "yellow" : ""}`}
        >
          <h4 className="hashtag__text">
            <p>#</p>brending
          </h4>
        </div>
      </div>
    </div>
  );
};

export default hashtag;
