import React, { useState } from "react";
import Todo from "./../components/Todo";

import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const [todoText, setTodoText] = useState("");
  const [alert, setAlert] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        value={todoText}
      />

      <button
        onClick={() => {
          if (todoText.length > 0) {
            dispatch({ type: "ADD_TODO", payload: todoText });
            setTodoText("");
            setAlert("");
          } else {
            setAlert("Please enter your Todo!");
          }
        }}
      >
        Add
      </button>

      <p>{todoText.length === 0 && alert}</p>
      {todos.length > 0 ? <h3>My todos: </h3> : <p>No todos, add something</p>}

      <Todo todos={todos} setTodoText={setTodoText} dispatch={dispatch} />
    </div>
  );
};

export default Todos;
