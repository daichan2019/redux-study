import { ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS } from "./actionTypes";

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};

export const deleteAllTodos = () => {
  return {
    type: DELETE_ALL_TODOS,
  };
};
