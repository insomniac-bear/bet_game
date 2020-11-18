import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserBet } from './userSlice';

export const UserBet = () => {
  const dispatch = useDispatch();
  const budget = useSelector((state) => state.user.budget);
  const userBet = useSelector((state) => state.user.currentBet);
  const onSetUserBet = (value) => {
    if (value < budget) {
      dispatch(setUserBet(value))
    } else {
      dispatch(setUserBet(budget));
    }
  };


  return(
    <label htmlFor="userBet">
      <span className="user__bet-sub">Ваша ставка:</span>
      <input className="user__bet-input"
        type="number"
        id="userBet"
        value={userBet}
        onChange={(event) => onSetUserBet(event.target.value)}
      />
    </label>
  );
};
