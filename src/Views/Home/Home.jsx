import React from "react";
import {
  ButtonJokes,
  ImgRandomJoker,
  RandomMessaje,
} from "../../Components/BrowserComponent";
import { useAxios } from "../../Hooks/useAxios";

export const Home = () => {
  const { data } = useAxios("https://api.chucknorris.io/jokes/categories");

  return (
    <div className="background-home">
      <div className="row justify-content-center">
        <div className="col">
          <ImgRandomJoker />
        </div>
      </div>
      <div className="col">
        <RandomMessaje />
      </div>
      <div className="row">
        {data.map((values) => {
          return (
            <div
              className="col-md-3 col mt-3 align-items-sm-center"
              key={values}
            >
              <ButtonJokes category={values} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
