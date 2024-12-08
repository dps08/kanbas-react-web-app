import React, { useState } from "react";

const API = `https://kanbas-node-server-app-6-0e365f0d0bc9.herokuapp.com/lab5/todos`;

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({ id: "1", title: "Task 1", completed: false, description: "" });

  return (
    <div>
      <h2>Working with Arrays</h2>

      <h3>Retrieving Arrays</h3>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      <h3>Retrieving an Item from an Array by ID</h3>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />


      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      <h3>Creating new Items in an Array</h3>
      <a id="wd-create-todo" className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />

      <h3>Deleting from an Array</h3>
      <a
        id="wd-delete-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      <h3>Update Todo Title</h3>
      <a
        id="wd-update-todo-title"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title
      </a>
      <input
        placeholder="Enter Todo Title"
        value={todo.title}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        placeholder="Enter Todo ID"
        value={todo.id}
        className="form-control w-50 mt-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      <h3>Update Todo Description</h3>
      <a
        id="wd-update-todo-description"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description
      </a>
      <input
        placeholder="Enter Todo Description"
        value={todo.description}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        placeholder="Enter Todo ID"
        value={todo.id}
        className="form-control w-50 mt-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      <h3>Update Todo Completed Status</h3>
      <a
        id="wd-update-todo-completed"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed Status
      </a>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          className="form-check-input"
        />
        <label className="form-check-label ms-2">Completed</label>
      </div>
      <input
        placeholder="Enter Todo ID"
        value={todo.id}
        className="form-control w-50 mt-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
    </div>
  );
}