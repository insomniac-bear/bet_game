import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setBudget, setCurrentProfit } from './userSlice';
import { useEffect } from 'react';

export const BtnSubmitBet = () => {
  const dispatch = useDispatch();
  const userBet = useSelector(state => state.user.currentBet); // Получаем ставку, которую сделал пользователь
  const selectedIvent = useSelector(state => state.user.selectedIvent); // Получаем событие, выбранное пользователем
  const currentProfit = useSelector(state => state.user.currentProfit); // Получаем текущий выйгрыш пользователя
  
  const onSubmitUserBet = () => {
    dispatch(setCurrentProfit(userBet * selectedIvent.percent / 100)); // Текущий выйгрыш
    if (userBet && selectedIvent) {
      const gameResult = Math.random();
      
      console.log('it is selectedivent', selectedIvent);
      console.log('fsf', userBet * selectedIvent.percent / 100)
      
      console.log('gem', gameResult.toFixed(1))
      if (gameResult.toFixed(2) <= selectedIvent.percent / 100) {
        console.log('tue',currentProfit)
        dispatch(setBudget(userBet * selectedIvent.percent / 100));
      } else {
        console.log('false', currentProfit)
        dispatch(setBudget(-(userBet * selectedIvent.percent / 100)));
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
