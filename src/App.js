import React, { useState } from "react";

import { Header } from "./Header";
import { IventList } from "./IventsList";
import { UserChoice } from "./userChoice";
import { UserBet } from './UserBet';

import "./styles.css";

export default function App() {

  const [message, setMessage] = useState(`Вы еще не сыграли ни разу`);

  return (
    <div className="App">
      <Header />
      <IventList />
      <UserBet />
      <UserChoice />

      <button>Сделать ставку</button>

      <h1>{message}</h1>
    </div>
  );
}
