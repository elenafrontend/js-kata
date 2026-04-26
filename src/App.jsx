import { useState } from 'react';
import { taskRegistry, getCategories } from '../tasks/index.js';
import Sidebar from './components/Sidebar.jsx';
import TaskPanel from './components/TaskPanel.jsx';
import './App.css';

export default function App() {
  const [activeTaskId, setActiveTaskId] = useState(taskRegistry[0]?.id);
  const categories = getCategories(taskRegistry);
  const activeTask = taskRegistry.find((t) => t.id === activeTaskId);

  return (
    <div className="app-layout">
      <Sidebar
        categories={categories}
        activeTaskId={activeTaskId}
        onSelect={setActiveTaskId}
      />
      <main className="main-panel">
        {activeTask ? (
          <TaskPanel task={activeTask} />
        ) : (
          <p className="empty-state">Select a task from the sidebar</p>
        )}
      </main>
    </div>
  );
}
