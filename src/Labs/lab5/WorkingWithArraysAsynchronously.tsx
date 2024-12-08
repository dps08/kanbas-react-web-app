import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]); // State to store todos
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages

  // Fetch all todos from the server
  const fetchTodos = async () => {
    try {
      const todos = await client.fetchTodos();
      setTodos(todos);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to fetch todos.");
    }
  };

  // Create a new todo and fetch the updated list
  const createTodo = async () => {
    try {
      const todos = await client.createTodo();
      setTodos(todos);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to create a new todo.");
    }
  };

  // Add a new todo with default properties
  const postTodo = async () => {
    try {
      const newTodo = await client.postTodo({
        title: "New Posted Todo",
        completed: false,
      });
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to post a new todo.");
    }
  };

  // Remove a todo using a custom server-side remove operation
  const removeTodo = async (todo: any) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(`Failed to remove todo with ID ${todo.id}.`);
    }
  };

  // Delete a todo using the HTTP DELETE method
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(`Failed to delete todo with ID ${todo.id}.`);
    }
  };

  // Update a todo item (e.g., marking it as completed or editing its title)
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === todo.id ? todo : t))
      );
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(`Failed to update todo with ID ${todo.id}.`);
    }
  };

  // Enable edit mode for a todo item
  const editTodo = (todo: any) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...todo, editing: true } : t
      )
    );
  };

  // Fetch todos when the component loads
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2 mt-2"
        >
          {errorMessage}
        </div>
      )}
      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
              id="wd-delete-todo"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
            />
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              className="form-check-input me-2 float-start"
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            ) : (
              <input
                className="form-control w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) =>
                  updateTodo({ ...todo, title: e.target.value })
                }
              />
            )}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}