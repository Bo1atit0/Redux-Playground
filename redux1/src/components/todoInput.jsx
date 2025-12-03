import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { useState } from "react";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask("");
    }
  };
  return (
    <section className="flex gap-4 ">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border-2 border-gray-400 px-4 py-1 rounded-md"
      />
      <button
        onClick={() => handleAddTask()}
        className="bg-fuchsia-900 py-1 px-6 font-bold rounded-md 
      cursor-pointer shadow-xs shadow-white active:scale-95 transition-all 
      duration-300 hover:bg-fuchsia-950"
      >
        Add Task
      </button>
    </section>
  );
};

export default TodoInput;
