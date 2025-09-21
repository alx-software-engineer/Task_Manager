import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <header className="text-center my-6">
        <h1 className="text-4xl font-bold text-blue-600">TaskFlow</h1>
        <p className="text-gray-500">Your simple and effective to-do list</p>
      </header>
      
      <main>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;