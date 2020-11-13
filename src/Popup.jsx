import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFlag } from './userSlice';

export const Popup = () => {
  const dispatch = useDispatch();
  const betResult = useSelector(state => state.user.betResult);
  const statusBet = useSelector(state => state.user.statusBet);
  return (
    <div className="result__block">
      <p className="result__message">{betResult}</p>
      <p className="result__message-sub">{statusBet}</p>
      <button className="btn__modal-hide" onClick={ () => dispatch(setFlag(0)) }>OK</button>
    </div>
  )
}