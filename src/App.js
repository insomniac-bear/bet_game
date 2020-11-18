import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Header } from "./Header";
import { IventList } from "./IventsList";
import { UserChoice } from "./userChoice";
import { UserBet } from './UserBet';
import { BtnSubmitBet } from './BtnSubmitBet';
import { RightPart } from './rightPart.jsx'
import { fetchUser } from './userSlice';
import "./styles.css";
import { Popup } from "./Popup";

export default function App() {
  const dispatch = useDispatch();
  const userFetchStatus = useSelector(state => state.user.status);
  const error = useSelector(state => state.user.error);

  const flag = useSelector(state => state.user.flag);

  const onOff = () => {
    if (flag === 1) {
      return <Popup />
    } else {
      return "";
    }
  } 
  useEffect(() => {
    if (userFetchStatus === `idle`) {
      dispatch(fetchUser())
    }
  }, [userFetchStatus, dispatch]);

  const showError = () => {
    return error ? `${error}` : ``;
  };

  return (
    <div className="App">
      <Header />
      <IventList />
      {/* <UserBet /> */}
      {/* <UserChoice /> */}
      {/* <BtnSubmitBet /> */}
      <RightPart />
      {/* <Popup /> */}
      { onOff() }
      {/* <h1>{message}</h1> */}
      <UserBet />
      <UserChoice />
      <BtnSubmitBet />
      <h1>{showError()}</h1>
    </div>
  );
}
