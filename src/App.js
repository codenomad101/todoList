import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(["work", "study"]);
  const settInput = (e) => {
    setInput((input) => e.target.value);
  };
  const addTodo = () => {
    let todoList = [...todo];
    todoList.push(input);
    setTodo((todo) => todoList);
  };
  return (
    <div className="App">
      <div className="todo-main">
        <input className="todo-input" type="text" onChange={settInput} />
        <button className="todo-button" type="submit" onClick={addTodo}>
          Click to add new task
        </button>
      </div>
      {todo.map((item) => {
        return (
          <div className="main">
            <div className="todo-list">
              <li className="todo-list-items" key={item}>
                {item}:{new Date().toLocaleTimeString()}
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
}
