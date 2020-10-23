import React from "react";
import { useSelector } from "react-redux";

import { Ivent } from "./Ivent";

export const IventList = () => {
  const events = useSelector((state) => state.events);
  return (
    <div>
      <h2>Выбирете событие на которое хотите сделать ставку:</h2>
      <ul>
        {events.map((it) => (
          <li key={Math.random()}>
            <Ivent name={it.name} percent={it.percent} />
          </li>
        ))}
      </ul>
    </div>
  );
};
