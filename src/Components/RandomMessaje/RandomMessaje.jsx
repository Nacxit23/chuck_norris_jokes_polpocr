import React from "react";

import "./RandomMessage.css";
import "../GlobalStype/GlobalStype.css";
import { useAxios } from "../../Hooks/useAxios";
import { useSelector } from "react-redux";

const RandomMessaje = () => {
  const { category } = useSelector((state) => state);

  const url =
    category.category === undefined
      ? "https://api.chucknorris.io/jokes/random"
      : `https://api.chucknorris.io/jokes/random?category=${category.category}`;
  const { data } = useAxios(url);

  return (
    <div className="container-text">
      <p className="textColorFont PottaFamilyFont">"{data.value}"</p>
    </div>
  );
};

export default RandomMessaje;
