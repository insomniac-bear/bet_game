import React from "react";
import { useDispatch } from "react-redux";

import { setSelectedIvent } from "./userSlice";

export const Ivent = ({ name, percent }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor={name} className="wrapp__oneOfEvent active">
      <input className="oneOfEvent"
        id={name}
        type="radio"
        value={name}
        onChange={(event) => {
          dispatch(setSelectedIvent({name, percent}));
        }}
        name="ivents"
      />
      <p className="oneOfEvent__name">{name}</p>
      <p className="oneOfEvent__percent">{percent}%</p>
    </label>
  );
};
