import React, { useEffect, useReducer, useRef, useState } from "react";

const initialTodos = [{ id: 1, text: "Learn useReducer", done: false }];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t,
      );
    case "DELETE":
      return state.filter((t) => t.id !== action.id);
    case "CLEAR_DONE":
      return state.filter((t) => !t.done);

    default:
      state;
  }
}

const ReducerTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  const nextId = useRef(2);
  // console.log("nextId", nextId);
  // console.log("nextId.current++", nextId.current++);

  const handleAddtodo = () => {
    if (!text.trim()) return;
    const id = nextId.current++;
    dispatch({ type: "ADD", id, text });
    setText("");
  };

  return (
    <div>
      <h3>Todo Application</h3>
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo..."
          value={text}
          onKeyDown={(e) => e.key === "Enter" && handleAddtodo()}
        />
        <button onClick={handleAddtodo}>Add</button>
        <button onClick={() => dispatch({ type: "CLEAR_DONE" })}>
          Clear Completed Todos
        </button>
      </div>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <label
              htmlFor="check"
              style={{ textDecoration: t.done ? "line-through" : "none" }}
            >
              <input
                type="checkbox"
                onChange={() => dispatch({ type: "TOGGLE", id: t.id })}
                id="check"
                checked={t.done}
              />
              <span>{t.text}</span>
            </label>
            <button onClick={() => dispatch({ type: "DELETE", id: t.id })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReducerTodo;
