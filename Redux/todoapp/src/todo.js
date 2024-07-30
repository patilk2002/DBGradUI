import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete, editTodo } from './todoSlice';

const Todo = () => {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setEditText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleEditTodo = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTodo({ id, text: editText }));
    setEditingId(null);
    setEditText("");
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />{" "}
      <button onClick={handleAddTodo}>Add Todo</button>{" "}
      <ul>
        {" "}
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditInputChange}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}{" "}
                <button onClick={() => handleToggleComplete(todo.id)}>
                  {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>{" "}
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
              </>
            )}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};

export default Todo;
