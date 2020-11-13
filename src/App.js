import React, { useState } from "react";

import { Header } from "./Header";
import { IventList } from "./IventsList";
import { UserChoice } from "./userChoice";
import { UserBet } from './UserBet';
import { BtnSubmitBet } from './BtnSubmitBet';
import { RightPart } from './rightPart.jsx'

import "./styles.css";
import { Popup } from "./Popup";
import { useSelector } from "react-redux";

export default function App() {

  const flag = useSelector(state => state.user.flag);

  const onOff = () => {
    if (flag === 1) {
      return <Popup />
    } else {
      return "";
    }
  } 

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
    </div>
  );
}
