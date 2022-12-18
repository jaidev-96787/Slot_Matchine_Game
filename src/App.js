import React, { Component } from "react";
import "./App.css";
import SlotM from "./SlotM";

const App = () => {
  return (
    <div>
      <h1 className="heading">
        Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>
      </h1>
      <div className="slot_box">
        <SlotM x="10" y="10" z="10" />
        <SlotM x="10" y="20" z="10" />
        <SlotM x="30" y="10" z="30" />
        <SlotM x="30" y="10" z="30" />
      </div>
    </div>
  );
};

export default App;
