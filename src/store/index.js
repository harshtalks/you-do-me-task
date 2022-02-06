import { configureStore } from '@reduxjs/toolkit';
import { humanSlice } from './HumanSlice';
import { taskSLice } from './Taskslice';

export const store = configureStore({
  reducer: {
    tasks: taskSLice.reducer,
    humans: humanSlice.reducer
  }
});
