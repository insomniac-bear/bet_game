import React from "react";
import { useSelector } from "react-redux";

import { Ivent } from "./Ivent";

export const IventList = () => {
  const events = useSelector((state) => state.events);
  return (
    <div className="choice">
      {/* <h2 className="choice__title">Вы выбрали:</h2> */}
      <ul className="events">
        {events.map((it) => (
          <li className="choice__event" key={Math.random()}>
            <Ivent name={it.name} percent={it.percent} />
          </li>
        ))}
      </ul>
    </div>
  );
};
