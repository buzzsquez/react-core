import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ItemType = {
  id: number;
  item: string;
  completed: boolean;
};

export type StoreType = ItemType[];

const initialState: StoreType = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (
      state: StoreType,
      action: PayloadAction<ItemType>
    ) => {
      state.push(action.payload);
      return state;
    },
    removeTodo: (state, action) => state.filter((item: ItemType) => item.id !== action.payload),
    updateTodo: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      }),
    completeTodo: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      }),
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } = addTodoReducer.actions;

export const { reducer } = addTodoReducer;
