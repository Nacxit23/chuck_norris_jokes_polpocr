import React from "react";
import "./BottonJokes.css";
import { AiFillAlert } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CategoryAction } from "../../actions/CategoryAction";

const ButtonJokes = ({ category }) => {
  const dispatch = useDispatch();

  const handlegetCategory = (event) => {
    dispatch(CategoryAction(event.target.name));
  };

  return (
    <button
      onClick={handlegetCategory}
      type="button"
      name={category}
      className="btn gradient-color button-style font-weight-bold"
    >
      <i className="Icon-color text-left">
        <AiFillAlert />
      </i>
      {category}
    </button>
  );
};
export default ButtonJokes;
