import { useState } from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import Todo from "./component/Todo";

function App() {
  let [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  return (
    <>
      <div className="container">
        <TodoForm onSubmit={addTodo} />
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
    </>
  );
}

export default App;
