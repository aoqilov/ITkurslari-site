import React, { useState } from "react";

const hashtag = ({ main = "m" }) => {
  const [tagColor, setTagColor] = useState(main);

  return (
    <div className="haw-com">
      <div
        onClick={() => setTagColor("m")}
        className={`haw-com__box ${tagColor == "m" ? "blue" : ""}`}
      >
        <h4 className="haw-com__text">
          <p>#</p> marketing
        </h4>
      </div>
      <div
        onClick={() => setTagColor("b")}
        className={`haw-com__box ${tagColor == "b" ? "yellow" : ""}`}
      >
        <h4 className="haw-com__text">
          <p>#</p> brending
        </h4>
      </div>
      <div
        onClick={() => setTagColor("d")}
        className={`haw-com__box ${tagColor == "d" ? "red" : ""}`}
      >
        <h4 className="haw-com__text">
          <p>#</p> dasturlash
        </h4>
      </div>
    </div>
  );
};

export default hashtag;
