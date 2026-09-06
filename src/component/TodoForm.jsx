import { useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: text,
      compleate: false,
    });
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-field "
          placeholder="Add Task"
          onChange={handleChange}
          value={text}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
