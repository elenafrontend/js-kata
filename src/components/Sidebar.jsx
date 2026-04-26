export default function Sidebar({ categories, activeTaskId, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">JS KATA</div>

      {Array.from(categories).map(([category, tasks]) => (
        <div key={category} className="sidebar-group">
          <div className="sidebar-category">{category}</div>
          {tasks.map((task) => (
            <button
              key={task.id}
              className={`sidebar-item ${task.id === activeTaskId ? 'active' : ''}`}
              onClick={() => onSelect(task.id)}
            >
              {task.title}
              {task.difficulty && (
                <span className="difficulty">
                  {'★'.repeat(task.difficulty)}
                </span>
              )}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}
