import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../modules/todos/types';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  console.log(todos);
  if (todos.length === 0) return <p>등록된 함수가 없습니다.</p>;
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TodoList;
