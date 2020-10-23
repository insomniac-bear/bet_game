import React from "react";
import { useDispatch } from "react-redux";

import { setSelectedIvent } from "./userSlice";

export const Ivent = ({ name, percent }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor={name}>
      <input
        id={name}
        type="radio"
        value={name}
        onChange={(event) => {
          dispatch(setSelectedIvent({name, percent}));
        }}
        name="ivents"
      />
      {name}
      <p>Веротность наступления: {percent}%</p>
    </label>
  );
};
