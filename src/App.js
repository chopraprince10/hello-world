import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome.js";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
function App() {
  return (
    <div className="App">
      <EventBind></EventBind>
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <Counter />
      <Message />
      <Greet name="Prince">
        <p>This is Children Props</p>
      </Greet>
      <Greet name="Jack">
        <button> Click Me</button>
      </Greet>
      <Greet name="Rahul" /> */}
      {/* <Greet name="Aman" heroName="SuperMan">
        <p>This is Children Props</p>
      </Greet> */}
      {/* <Welcome name="Prince" heroName = 'IronMan'>
        <p>This is Children Props in Class Component</p>
      </Welcome> */}
      {/* 
      <Welcome name="Jack">
        <button> Click Me</button>
      </Welcome>
      <Hello /> */}
    </div>
  );
}

export default App;
