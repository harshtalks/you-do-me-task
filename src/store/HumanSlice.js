import { createSlice, nanoid } from '@reduxjs/toolkit';
import { taskSLice } from './Taskslice';

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('steve'),
  createHuman('angela'),
  createHuman('lexi'),
  createHuman('fezz')
];

export const humanSlice = createSlice({
  name: 'human',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(taskSLice.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (id) => id !== action.payload.taskId
          );
        }
      }
    });
  }
});
