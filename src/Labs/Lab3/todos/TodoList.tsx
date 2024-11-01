import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

interface Todo {
  id: string;
  title: string;
  status: string;
  done: boolean;
}

interface RootState {
  todosReducer: {
    todos: Todo[];
  };
}

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todosReducer);

  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </>
  );
};

export default TodoList;
