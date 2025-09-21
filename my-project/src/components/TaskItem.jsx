import useTaskStore from '../store/useTaskStore';

function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTaskStore();

  return (
    <li className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
        />
        <span className={`text-gray-800 ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 font-bold transition px-2 rounded"
        aria-label={`Delete task: ${task.text}`}
      >
        &times;
      </button>
    </li>
  );
}

export default TaskItem;