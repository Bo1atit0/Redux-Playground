import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlice";

const TodoList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <section className="text-center py-10 text-2xl font-bold">
      <h1>Tasks:</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="my-4 text-lg font-medium space-x-3">
            <span className="font-bold text-2xl text-fuchsia-900 text-shadow-sm text-shadow-white">
              {task.id}
            </span>
            <span>{task.task}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 px-3 py-1 text-xs rounded-md 
            cursor-pointer active:scale-95 transition duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
