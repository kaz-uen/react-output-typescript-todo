import { createSlice } from '@reduxjs/toolkit';
import { TodoStateType } from '../../types/TodoType';
import { INITIAL_TODO_STATE, INITIAL_TODO_ID } from '../../constants/InitialData';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_TODO_STATE,
  reducers: {
    addTodo(state, action): void {
      const getMaxTodoId = (): number => Math.max(...state.todoItemsData.map((item) => item.id));
      state.todoItemsData.push({
        id: state.amount !== 0 ? getMaxTodoId() + 1 : INITIAL_TODO_ID,
        title: action.payload.title,
        content: action.payload.content
      });
      state.amount += 1;
      state.searchKeyword = '';
    },
    updateTodo(state, action): void {
      state.todoItemsData = state.todoItemsData.map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content
          };
        }
        return { ...item };
      });
    },
    deleteTodo(state, action): void {
      state.todoItemsData = state.todoItemsData.filter((item) => (item.id !== action.payload ? true : false));
      state.amount = state.todoItemsData.length;
    },
    clearTodo(): TodoStateType {
      return { todoItemsData: [], amount: 0, searchKeyword: '' };
    },
    searchTodo(state, action): void {
      state.searchKeyword = action.payload;
    }
  }
});

export const { addTodo, updateTodo, deleteTodo, clearTodo, searchTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
