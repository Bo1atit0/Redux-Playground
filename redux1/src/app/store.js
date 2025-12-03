import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/tasksSlice";

// Store
export const store = configureStore({
  reducer: {
    todo: taskReducer,
  },
});
