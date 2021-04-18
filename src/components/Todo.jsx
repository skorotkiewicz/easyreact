import React from "react";

const Todo = ({ todos, setTodoText, dispatch }) => {
  return (
    <div>
      {todos.map((el, key) => (
        <div className={"todo-container " + (el.done && "todo-done")} key={key}>
          <p>{el.todo}</p>

          <button
            onClick={() => {
              dispatch({ type: "DELETE_TODO", payload: el.id });
              setTodoText("");
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "STATUS_TODO",
                payload: el.id,
              });
            }}
          >
            {el.done ? "Undone" : "Done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
