import React from "react";
import { useSelector } from "react-redux";

export const UserChoice = () => {
  const event = useSelector((state) => state.user.selectedIvent);
  // console.log(event);
  let userChoice;
  if (event.name === ``) {
    userChoice = <p>Событие не выбрано</p>;
  } else {
    userChoice = <p>Выбрано событие {event.name}, шанс выигрыша {event.percent}%</p>;
  }
  return (
    <div>
      {userChoice}
    </div>
  );
};
