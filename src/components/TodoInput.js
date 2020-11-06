import React, { useState } from "react";
import { addTodo } from "../action";
import { useSelector, useDispatch } from "react-redux";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (e) => setNewTodo(e.target.value);
  const handleClick = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <>
      <input onChange={handleChange} value={newTodo} />
      <button onClick={handleClick}>ADD</button>
    </>
  );
};
