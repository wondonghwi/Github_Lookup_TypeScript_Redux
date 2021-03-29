import { createAction } from 'typesafe-actions';

let nextId = 2;

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const addTodo = createAction('todos/ADD_TODO', (text: string) => ({
  id: nextId++,
  text,
  done: false,
}))<Todo>();
export const toggleTodo = createAction('todos/TOGGLE_TODO')<number>();
export const removeTodo = createAction('todos/REMOVE_TODO')<number>();
