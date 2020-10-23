import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, deleteTask, deleteAllTasks } from "../actions";

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = {
  addTask,
  deleteTask,
  deleteAllTasks,
};

const Todo = ({ tasks, addTask, deleteTask, deleteAllTasks }) => {
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <h1>Todo App by React Redux</h1>
      <div>
        <input onChange={handleInput} value={title} />
        <button onClick={addTask}>ADD</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
