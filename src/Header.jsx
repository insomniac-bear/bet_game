import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const name = useSelector((state) => state.user.name);
  const userBudget = useSelector((state) => state.user.budget);

  return (
    <div className="header">
      <h2 className="header__title">Добро пожаловать на лохотрон {name}!</h2>
    </div>
  );
};
