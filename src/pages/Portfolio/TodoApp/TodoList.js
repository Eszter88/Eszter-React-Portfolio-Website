import React, { useContext } from "react";
import { TodoContext } from "./TodoProject";
import { TodoItem } from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul id="list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
}

export default TodoList;
