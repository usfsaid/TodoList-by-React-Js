import { useState } from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import Todo from "./component/Todo";

function App() {
  let [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateToto = (status) => {
    setFilter(status);
  };
  if (filter === "active") {
    todos = todos.filter((todo) => !todo.compleate);
  } else if (filter === "completed") {
    todos = todos.filter((todo) => todo.compleate);
  }

  const todoCompleate = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id && todo.compleate === false) {
          return { ...todo, compleate: !todo.compleate };
        } else if (todo.id === id && todo.compleate === true) {
          return { ...todo, compleate: !todo.compleate };
        }
        return todo;
      }),
    );
  };

  return (
    <>
      <div className="container">
        <TodoForm onSubmit={addTodo} />
        <button className="update-btn  btn" onClick={() => updateToto("all")}>
          All
        </button>
        <button className="update-btn btn" onClick={() => updateToto("active")}>
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateToto("completed")}
        >
          Completed
        </button>
        <button
          className="update-btn btn"
          onClick={() => setTodos(todos.filter((todo) => !todo.compleate))}
        >
          Remove Completed Task
        </button>
        <button
          className="update-btn btn"
          onClick={() =>
            setTodos(
              todos.map((todo) => ({ ...todo, compleate: !todo.compleate })),
            )
          }
        >
          Mark All Task
        </button>

        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              onDelete={() => handleDelete(todo.id)}
              onCompleate={() => todoCompleate(todo.id)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
