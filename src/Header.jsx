import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const name = useSelector((state) => state.user.name);
  const userBudget = useSelector((state) => state.user.budget);

  return (
    <div className="header">
      <h2 className="header__title">Добро пожаловать на лохотрон {name}!</h2>
      <p className="header__title-sub">На вашем счету: {'\u00A0'} {'\u00A0'} {userBudget} рублей</p>
    </div>
  );
};
