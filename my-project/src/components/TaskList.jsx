import useTaskStore from '../store/useTaskStore';
import TaskItem from './TaskItem';

function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  if (tasks.length === 0) {
    return <p className="text-center text-gray-500 mt-8">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;