import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, deleteAllTodos } from "../action";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo}
            <button onClick={() => dispatch(deleteTodo(todo))}>DELETE</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(deleteAllTodos())}>DELETE ALL</button>
    </>
  );
};
