import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import TodoReducer from '../features/todo/slice';
import ModalReducer from '../features/modal/slice';

const store = configureStore({
  reducer: {
    todo: TodoReducer,
    modal: ModalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type AppDispatch = typeof store.dispatch;

export default store;
