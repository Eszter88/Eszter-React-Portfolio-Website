import { useContext, useState, useRef } from "react";
import { TodoContext } from "./TodoProject";

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo, updateTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameRef === "") return;

    updateTodo(id, nameRef.current.value);
    setIsEditing(false);
  };

  return (
    <li className="list-item">
      {isEditing ? (
        <>
          <form className="edit-todo" onSubmit={handleSubmit}>
            <input type="text" defaultValue={name} ref={nameRef} />
            <button data-button-save> Save</button>
          </form>
        </>
      ) : (
        <>
          <label className="list-item-label">
            <input
              checked={completed}
              type="checkbox"
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <div className="list-item-buttons">
            <button
              data-button-edit
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button onClick={() => deleteTodo(id)} data-button-delete>
              X
            </button>
          </div>
        </>
      )}
    </li>
  );
}
