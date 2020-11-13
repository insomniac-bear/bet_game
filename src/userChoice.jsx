import React from "react";
import { useSelector } from "react-redux";

export const UserChoice = () => {
  const event = useSelector((state) => state.user.selectedIvent);
 
  let userChoice;
  // let userPercent;
  if (event.name === undefined) { 
    userChoice = <p className="u__events-cheked">Событие не выбрано</p>;
  } else {
    userChoice = <p className="u__events-cheked">{event.name}</p>;
    // userPercent = <p className="percent__user"> Шанс выйгрыша {event.percent} %</p>;
  }
  return (
    <div>
      {userChoice}
      {/* {userPercent} */}
    </div>
  );
};
