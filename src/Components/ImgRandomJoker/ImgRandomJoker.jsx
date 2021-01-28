import React from "react";

import "./ImgRandomJoker.css";
import ChuckNorrisImg from "../../ref/chuckNorris.png";

const ImgRandomJoker = () => {
  return (
    <div className="img-component mt-3">
      <img className="chuck-img img-fluid" src={ChuckNorrisImg} />
    </div>
  );
};
export default ImgRandomJoker;
