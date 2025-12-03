import { createSlice } from "@reduxjs/toolkit";

// Slice
const initialState = {
  tasks: [
    { id: 1, task: "Sample Task 1" },
    { id: 2, task: "Sample Task 2" },
    { id: 3, task: "Sample Task 3" },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  //Reducer
  reducers: {
    addTask: (state, action) => {
      // logic to add a task
      const newTask = {
        id: state.tasks.length + 1,
        task: action.payload,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      // logic to delete a task
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
