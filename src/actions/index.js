import {
  ADD_TASK,
  DELETE_TASK,
  DELETE_ALL_TASKS,
} from "../constants/actionTypes";

export const addTask = (title) => {
  return {
    type: ADD_TASK,
    payload: title,
  };
};

export const deleteTask = () => {
  return {
    type: DELETE_TASK,
  };
};

export const deleteAllTasks = () => {
  return {
    type: DELETE_ALL_TASKS,
  };
};
