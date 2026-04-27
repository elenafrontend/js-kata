import { useState } from 'react';
import { createTestRunner } from '../lib/test-runner.js';

export default function TestRunner({ task }) {
  const [results, setResults] = useState([]);
  const [running, setRunning] = useState(false);

  async function handleRunTests() {
    setRunning(true);
    setResults([]);

    try {
      // Load the solution first (attaches to prototype, etc.)
      await task.load();

      // Fetch test source code, strip import/export lines
      const rawCode = await task.loadTests();
      const testCode = rawCode
        .replace(/^import\s.+;?\s*$/gm, '')
        .replace(/^export\s.+;?\s*$/gm, '');

      // Create a fresh runner for each execution
      const runner = createTestRunner();

      // Execute test code with runner's describe/it/expect in scope
      const fn = new Function('describe', 'it', 'expect', testCode);
      fn(runner.describe, runner.it, runner.expect);

      setResults(runner.results);
    } catch (err) {
      setResults([{ name: 'Load error', status: 'fail', error: err.message }]);
    } finally {
      setRunning(false);
    }
  }

  const passCount = results.filter((r) => r.status === 'pass').length;
  const total = results.length;

  return (
    <div className="test-runner">
      <div className="test-header">
        <button
          className="run-btn"
          onClick={handleRunTests}
          disabled={running}
        >
          {running ? 'Running...' : 'Run tests'}
        </button>
        {total > 0 && (
          <span className={`test-summary ${passCount === total ? 'all-pass' : ''}`}>
            {passCount}/{total} passed
          </span>
        )}
      </div>

      <div className="test-results">
        {results.map((result, i) => (
          <div key={i} className={`test-result ${result.status}`}>
            <span className="test-dot" />
            <span className="test-name">{result.name}</span>
            <span className="test-status">{result.status}</span>
            {result.error && (
              <div className="test-error">
                <code>{result.error}</code>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
