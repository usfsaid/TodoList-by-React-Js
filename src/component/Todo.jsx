const Todo = (props) => {
  return (
    <div className="d-f">
      <div>{props.todo.text}</div>
      <button className="delete-btn">X</button>
    </div>
  );
};

export default Todo;
