import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const name = useSelector((state) => state.user.name);
  const userBudget = useSelector((state) => state.user.budget);

  return (
    <div>
      <h2>{name}! Добро пожаловать на лохотрон!</h2>
      <p>У вас есть {userBudget} рублей</p>
    </div>
  );
};
