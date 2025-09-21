import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: (text) => {
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              text,
              completed: false,
            },
          ],
        }));
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },

      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        }));
      },
    }),
    {
      name: 'task-storage', // The name for the item in localStorage
    }
  )
);

export default useTaskStore;