import React from "react";
import { createContext, useEffect, useReducer, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import FilterForm from "./FilterForm";
import "./todo.scss";
import { Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "TODOS";
const ACTIONS = {
  ADD: "add",
  UPDATE: "update",
  TOGGLE: "toggle",
  DELETE: "delete",
};

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];

    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id)
          return { ...todo, completed: payload.completed };
        return todo;
      });

    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload.id);

    case ACTIONS.UPDATE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name };
        }
        return todo;
      });

    default:
      throw new Error(`No action found for ${type}`);
  }
}

export const TodoContext = createContext();

function TodoProject() {
  const [filterName, setfilterName] = useState("");
  const [hidecompletedFilter, setHideCompletedFilter] = useState(false);
  const [todos, dispatch] = useReducer(reducer, [], (iniValue) => {
    const localValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    return JSON.parse(localValue) || iniValue;
  });

  const filteredList = todos.filter((todo) => {
    if (hidecompletedFilter && todo.completed) return false;
    return todo.name.includes(filterName);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({
      type: ACTIONS.TOGGLE,
      payload: { id: todoId, completed },
    });
  }

  function deleteTodo(todoId) {
    dispatch({
      type: ACTIONS.DELETE,
      payload: { id: todoId },
    });
  }

  function updateTodo(id, name) {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { id, name },
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filteredList,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      <div className="container portfolio-todo">
        <h1>Todo List</h1>

        <FilterForm
          name={filterName}
          setName={setfilterName}
          hidecompleted={hidecompletedFilter}
          setHideCompleted={setHideCompletedFilter}
        />

        <TodoList />
        <NewTodoForm />
        <div className="button-double">
          <Link to=".." relative="path">
            <button>Back</button>
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default TodoProject;
