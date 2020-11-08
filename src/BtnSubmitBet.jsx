import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setBudget, setCurrentProfit } from './userSlice';

export const BtnSubmitBet = () => {
  const dispatch = useDispatch();
  const userBet = useSelector(state => state.user.currentBet); // Получаем ставку, которую сделал пользователь
  const selectedIvent = useSelector(state => state.user.selectedIvent); // Получаем событие, выбранное пользователем

  const onSubmitUserBet = () => {
    dispatch(setCurrentProfit(userBet * selectedIvent.percent / 100)); // Текущий выйгрыш
    if (userBet && selectedIvent) {
      const gameResult = Math.random();

      if (gameResult.toFixed(2) <= selectedIvent.percent / 100) {
        dispatch(setBudget(userBet * selectedIvent.percent / 100));
      } else {
        dispatch(setBudget(-(userBet)));
      }
    }
  };

  return (
    <button
      onClick={() => onSubmitUserBet()}
    >
      Сделать ставку
    </button>
  );
};
