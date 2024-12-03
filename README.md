# Pinia Tasks

## Overview

Pinia Tasks is a simple task management application built with Vue.js and Pinia for state management. It allows users to create, view, and manage tasks, including marking them as favorites.

## Features

- Add new tasks
- View all tasks and favorite tasks
- Delete tasks
- Toggle favorite status for tasks

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pinia-tasks
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## File Structure

- `src/`: Contains the source code for the application.
  - `components/`: Contains the Vue components.
  - `stores/`: Contains the Pinia stores.
  - `App.vue`: The main application component.
  - `main.js`: The entry point of the application.

  ## App.vue

The main application component that includes:

- A header with the title and logo
- A form for adding new tasks
- Navigation buttons to filter tasks
- A list of tasks displayed based on the selected filter

## TaskDetails.vue

A component to display individual task details, including:

- The task title
- Icons for deleting the task and toggling its favorite status

## TaskForm.vue

A component for creating new tasks with:

- An input field for the task title
- A button to submit the form

## State Management

The application uses Pinia for state management. The tasks are managed through a store defined in `stores/TaskStore`. Ensure you have defined this store with methods for adding, deleting, and toggling favorites for tasks.

## Usage

- **Adding a Task:** Enter a task title in the input field and click "Add" to create a new task.
- **Viewing Tasks:** Use the "All tasks" and "Fav tasks" buttons to filter the task list.
- **Managing Tasks:** Click the delete icon to remove a task or the favorite icon to toggle its status.

Open your web browser and navigate to `http://localhost:3000` to view the application.



