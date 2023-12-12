import { createSlice } from '@reduxjs/toolkit';
import { TodoStateType } from '../../types/TodoType';
import { INITIAL_TODO_STATE, INITIAL_TODO_ID } from '../../constants/InitialData';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_TODO_STATE,
  reducers: {
    saveTodo(state, action): void {
        if(!action.payload.id) {
            // for create
            const id: number = state.amount !== 0 ? Math.max(...state.todoItemsData.map(item => item.id)) + 1 : INITIAL_TODO_ID;
            state.todoItemsData.push({
                ...action.payload,
                id
            });
            return;
        }
        // for update
        const index: number = state.todoItemsData.findIndex(it => it.id === action.payload.id);
        if(index >= 0) {
            state.todoItemsData[index] = action.payload;
        }
    },
    deleteTodo(state, action): void {
        const newTodoArray = state.todoItemsData.filter(item => item.id !== action.payload);
        state.todoItemsData = newTodoArray;
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

export const { saveTodo, deleteTodo, clearTodo, searchTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
