import { useState } from 'react';
import Playground from './Playground.jsx';
import TestRunner from './TestRunner.jsx';
import SourceView from './SourceView.jsx';

const TABS = ['playground', 'tests', 'source'];

export default function TaskPanel({ task }) {
  const [activeTab, setActiveTab] = useState('playground');

  return (
    <div className="task-panel">
      <div className="task-header">
        <h1 className="task-title">{task.title}</h1>
        <span className="task-badge">{task.category}</span>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-signature">
        <code>{task.signature}</code>
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
        {activeTab === 'playground' && <Playground task={task} />}
        {activeTab === 'tests' && <TestRunner task={task} />}
        {activeTab === 'source' && <SourceView task={task} />}
      </div>
    </div>
  );
}
