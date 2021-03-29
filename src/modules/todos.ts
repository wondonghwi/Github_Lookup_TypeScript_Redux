const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 2;

type TodoAction = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo> | ReturnType<typeof removeTodo>;

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

const initialState: Todo[] = [
  {
    id: 1,
    text: '1',
    done: false,
  },
];

const todos = (state: Todo[] = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map(todo => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
