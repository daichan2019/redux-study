import { ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS } from "./actionTypes";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((selected) => selected !== action.payload),
      };

    case DELETE_ALL_TODOS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
