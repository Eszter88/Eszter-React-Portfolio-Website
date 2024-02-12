import React from "react";

function FilterForm({ name, setName, hidecompleted, setHideCompleted }) {
  return (
    <form className="filter-form">
      <input
        placeholder="Search Todo..."
        type="text"
        id="search-todo-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="hide-completed-container">
        <label>
          <input
            type="checkbox"
            checked={hidecompleted}
            onChange={(e) => setHideCompleted(e.target.checked)}
          />
          Hide Completed
        </label>
      </div>
    </form>
  );
}

export default FilterForm;
