import { createReducer } from 'typesafe-actions';
import { Todo, TodosAction } from './types';
import { addTodo, removeTodo, toggleTodo } from './action';

const initialState: Todo[] = [
  {
    id: 1,
    text: '1',
    done: false,
  },
];

const todos = createReducer<Todo[], TodosAction>(initialState)
  .handleAction(addTodo, (state, action) =>
    state.concat({
      id: action.payload.id,
      text: action.payload.text,
      done: false,
    })
  )
  .handleAction(toggleTodo, (state, action) =>
    state.map(todo => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo))
  )
  .handleAction(removeTodo, (state, action) => state.filter(todo => todo.id !== action.payload));

export default todos;
