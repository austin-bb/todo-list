import React, { useState } from "react";

const TodoList = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    };

    props.setTodos([...props.todos, todoItem]);
    setNewTodo("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleNewTodo(e);
        }}
        className="TodoForm"
      >
        <input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          type="text"
          value={newTodo}
          placeholder="Type task here"
        />
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoList;
