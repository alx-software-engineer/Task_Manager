# Project Plan: TaskFlow - A Modern Frontend Task Manager
# Project Description
TaskFlow is a minimalist, client-side task management application. It's designed for anyone who needs a quick and simple way to organize their daily to-do lists without needing an account or an internet connection after the initial load.

This project matters because it demonstrates a strong command of modern frontend development principles, including component-based architecture, global state management, and local data persistence, all within a serverless application—making it an excellent portfolio piece.

# Tech Stack
The technology stack is focused purely on modern frontend development to create a fast and responsive user experience.

Frontend Framework: React (with Vite for the build tool)

Styling: Tailwind CSS

Global State Management: Zustand

Data Persistence: Browser localStorage (to save tasks so they persist after a page refresh)

Routing: React Router (for potential future multi-page features like dedicated "Completed" or "Active" views)

Testing: Vitest

# AI Integration Strategy
My plan is to leverage AI not just for simple code completion, but as a strategic partner in three key areas: feature generation, testing, and documentation, using context-aware techniques to get the best results.

1. # Code Generation
I will use an in-editor AI agent (GitHub Copilot) to accelerate development by scaffolding the boilerplate for components and data management functions. This will allow me to focus more on the application's logic and user experience.

# How it will work:

Component Scaffolding: I will prompt the AI to generate the basic structure of my React components. For example, once I decide a TaskItem component is needed, I'll ask the AI to create the initial JSX with props and event handlers for toggling completion and deleting a task.

State Management Scaffolding: I will use the AI to generate the initial structure of my Zustand store, including the state variables and the basic action functions (addTask, deleteTask, toggleTask).

localStorage Utilities: I will prompt the AI to create a set of utility functions to handle all interactions with localStorage, including the necessary JSON.stringify and JSON.parse operations.

2. # Testing
To ensure my application's logic is reliable, I will use AI to help generate unit tests for my core state management functions.

# How it will work:

I will provide the AI with a specific function from my Zustand store (e.g., the toggleTask action).

I will then prompt it to generate a complete test suite for that function using Vitest. The prompt will include the data schema of a task to ensure the tests are accurate. I will also ask it to cover edge cases, such as trying to toggle a task with an ID that doesn't exist.

3. # Documentation
I will use AI to ensure my project is well-documented at all levels, from inline comments to the final README.

# How it will work:

Docstrings: For complex functions (like the ones that interact with localStorage), I will ask the AI to generate a JSDoc-style comment block explaining what the function does, its parameters, and what it returns.

Inline Comments: For any non-obvious lines of code, I will use the AI to generate a concise, explanatory comment.

README Maintenance: After the project is complete, I will ask the AI to "proofread and professionalize" this README file, ensuring the language is clear and concise.

4. # Context-Aware Techniques
To get the most accurate and useful results from the AI, I will provide it with specific context about my project.

Schema-Aware Generation: My "schema" will be the shape of my task object. I will always provide this schema when asking for related code.

# My Task Schema:

{
  id: number,       // Unique ID (e.g., from Date.now())
  text: string,     // The content of the task
  completed: boolean // The status of the task
}

Example Prompt: "Using this Task schema, generate a Zustand toggleTask(id) action that finds a task by its ID and flips its completed status."

File Tree Awareness: To get correct import paths, I will provide the AI with a simplified file tree.

Example Prompt: "Given this file structure src/store/useTaskStore.js and src/components/TaskList.jsx, generate the correct import statement for the store in the component."

Diff-Aware Commit Messages: I will use GitHub Copilot's ability to analyze my code changes (git diff) to generate accurate and conventional commit messages, helping me maintain a professional and readable Git history.