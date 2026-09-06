const Todo = (props) => {
  return (
    <div className="d-f">
      <div
        className={props.todo.compleate === true ? "completed" : ""}
        onClick={props.onCompleate}
      >
        {props.todo.text}
      </div>
      <button className="delete-btn" onClick={props.onDelete}>
        X
      </button>
    </div>
  );
};

export default Todo;
