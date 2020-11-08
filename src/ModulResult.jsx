import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setBudget, setCurrentProfit } from './userSlice';

export const ModulResult = (props) => {
  const dispatch = useDispatch();
  const userBet = useSelector(state => state.user.currentBet); // Получаем ставку, которую сделал пользователь
  const selectedIvent = useSelector(state => state.user.selectedIvent); // Получаем событие, выбранное пользователем
  const currentProfit = useSelector(state => state.user.currentProfit); // Получаем текущий выйгрыш пользователя

  console.log(props)

  return (
    <button className="i">
      Ok!
    </button>
  );
};
