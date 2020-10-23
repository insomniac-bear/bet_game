import React, {useState} from 'react';
import { useSelector } from 'react-redux';

export const UserBet = () => {
  const budget = useSelector((state) => state.user.budget);
  const [userBudget, setUserBudget] = useState(budget);

  const [userBet, setUserBet] = useState(0);

  const onSetUserBet = (value) => {
    if (value < userBudget) {
      setUserBet(value);
    } else {
      setUserBet(userBudget);
    }
  };

  return(
    <label htmlFor="userBet">
      Введите вашу ставку:
      <input
        type="number"
        id="userBet"
        value={userBet}
        onChange={(event) => onSetUserBet(event.target.value)}
      />
    </label>
  );
};
