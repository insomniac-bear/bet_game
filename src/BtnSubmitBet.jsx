import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setBudget, setCurrentProfit, setBetResult, setFlag, setStatusBet } from './userSlice';
import { ModulResult } from './ModulResult.jsx'

export const BtnSubmitBet = () => {

  const dispatch = useDispatch();
  const userBet = useSelector(state => state.user.currentBet); // Получаем ставку, которую сделал пользователь
  const selectedIvent = useSelector(state => state.user.selectedIvent); // Получаем событие, выбранное пользователем
  const currentProfit = useSelector(state => state.user.currentProfit); // Получаем текущий выйгрыш пользователя
  const betResult = useSelector(state => state.user.betResult);
  const flag = useSelector(state => state.user.flag);
  const statusBet = useSelector(state => state.user.statusBet);

  const onSubmitUserBet = () => {
    dispatch(setFlag(1));
    dispatch(setCurrentProfit(userBet * selectedIvent.percent / 100)); // Текущий выйгрыш
    if (userBet && selectedIvent) {
      const gameResult = Math.random();

      if (gameResult <= selectedIvent.percent / 100) {
        dispatch(setBetResult('Поздравляем, ваша ставка выиграла'))
        dispatch(setStatusBet(`Размер выигрыша: ${userBet * selectedIvent.percent / 100} монет`))
        dispatch(setBudget(userBet * selectedIvent.percent / 100));
        return <ModulResult p={true}/>
      } else {
        dispatch(setBetResult('Ваша ставка проиграла ('))
        dispatch(setStatusBet(`Размер проигрыша: ${userBet * selectedIvent.percent / 100} монет`))
        dispatch(setBudget(-(userBet * selectedIvent.percent / 100)));
        return <ModulResult p={false}/>
    }
    };
  };

  return (
    <div>
      <button className="game"
        onClick={() => onSubmitUserBet()}
      >
        Играть!
      </button>
    </div>
  );
}
