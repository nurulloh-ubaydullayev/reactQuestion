/* eslint-disable */
import { useState, useRef, useEffect } from "react";

/**
 * This is a todo app with multiple bugs and badly written lines.
 * Can you fix these bugs and make code follow good practices?
 * В этом коде есть несколько багов и гавнокода, ты можешь это исправить?
 * Можно воспользоватся кодсандбоксом для исправления кода: https://codesandbox.io/s/new?file=/src/App.js:0-1806
 */

export default function App() {
  const generateId = (length) => {
    let id = length > 0 ? length : 0;

    return id;
  };

  const [todos, changeTodos] = useState([]);
  const [value, changeValue] = useState("");
  const inputRef = useRef("foo");
  const addTodo = () => {
    const newTodo = {
      text: value,
      id: generateId(todos.length),
    };
    todos.unshift(newTodo);

    changeTodos([...todos]);
  };

  const handleDelete = (id) => {
    if (todos.filter((e) => e.id === id).length > 0) {
      const newTodos = todos.filter((todo) => todo.id != id);
      changeTodos([...newTodos]);
    }
  };

  const handleComplete = (id, index) => {
    const item = todos.find((item, ii) => ii === index);
    item.complete = true;
    changeTodos([...todos]);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        ref={inputRef}
        // value={value}
        onChange={(ev) => changeValue(ev.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((todo, index) => (
        <li key={todo.id}>
          {todo.complete ? <strike>{todo.text}</strike> : todo.text}
          <button onClick={() => handleComplete(todo.id, index)}>
            complete
          </button>
          <button onClick={() => handleDelete(todo.id)}>delete</button>
        </li>
      ))}
    </div>
  );
}
