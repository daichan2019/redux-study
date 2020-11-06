import React from "react";
import "./App.css";

import { TodoInput } from "./components/TodoInput";
import { Todos } from "./components/Todos";

const App = () => {
  return (
    <>
      <h1>Redux Study!!</h1>
      <TodoInput />
      <Todos />
    </>
  );
};

export default App;
