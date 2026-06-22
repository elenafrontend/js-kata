import { useState } from 'react';
import TestRunner from './TestRunner.jsx';
import SourceView from './SourceView.jsx';

const TABS = ['description', 'tests', 'source'];

export default function TaskPanel({ task }) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="task-panel">
      <div className="task-header">
        <h1 className="task-title">{task.title}</h1>
        <span className="task-badge">{task.category}</span>
      </div>

      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab ${tab === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'description' && (
          <div className="task-description-tab">
            <div className="task-signature">
              <code>{task.signature}</code>
            </div>
            <p className="task-description">{task.description}</p>
          </div>
        )}
        {activeTab === 'tests' && <TestRunner task={task} />}
        {activeTab === 'source' && <SourceView task={task} />}
      </div>
    </div>
  );
}
