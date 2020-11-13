import React from 'react';
import { useSelector } from 'react-redux';
import { BtnSubmitBet } from './BtnSubmitBet';
import { UserBet } from './UserBet';
import { UserChoice } from './userChoice';

export const RightPart = () => {

  const userBudget = useSelector((state) => state.user.budget)
  return (
    <div className="right__block">
      <div className="u__budget">
        <p className="u__budget-text">На вашем счету: {'\u00A0'} {'\u00A0'}{userBudget} монет</p>
      </div>
      <div className="u__events-use">
        <span className="u__events-sub">Вы выбрали: </span>
        <span className="u__events"><UserChoice /></span>
      </div>
      <div className="u__bet">
        <UserBet />
      </div>
      <div className="btn__game">
        <BtnSubmitBet />
      </div>
    </div>
  )
}