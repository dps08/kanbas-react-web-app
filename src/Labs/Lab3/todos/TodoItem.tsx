import React from 'react';

interface Todo {
  done: boolean;
  title: string;
  status: string;
}

interface TodoItemProps {
  todo?: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo = { done: true, title: 'Buy milk', status: 'COMPLETED' } }) => {
  return (
    <li className="list-group-item">
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title} ({todo.status})
    </li>
  );
};

export default TodoItem;
