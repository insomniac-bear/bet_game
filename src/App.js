import React, { useState } from "react";

import { Header } from "./Header";
import { IventList } from "./IventsList";
import { UserChoice } from "./userChoice";
import { UserBet } from './UserBet';
import { BtnSubmitBet } from './BtnSubmitBet';

import "./styles.css";

export default function App() {

  // const [message, setMessage] = useState(``);

  return (
    <div className="App">
      <Header />
      <div className="test">
      <IventList />
      <UserBet />
      <UserChoice />
      <BtnSubmitBet />
      </div>
      {/* <h1>{message}</h1> */}
    </div>
  );
}
