import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        className="form-control me-2"
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        placeholder="Enter a todo"
      />
      <button
        className="btn btn-warning me-2"
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
      >
        Update
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
      >
        Add
      </button>
    </li>
  );
}
