import { useState } from 'react';

export default function Playground({ task }) {
  const [input, setInput] = useState(task.defaultInput || '');
  const [callback, setCallback] = useState(task.defaultCallback || '');
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);

  async function handleRun() {
    setError(null);
    setOutput(null);

    try {
      await task.load();

      // eslint-disable-next-line no-eval
      const inputValue = eval(`(${input})`);
      // eslint-disable-next-line no-eval
      const callbackFn = eval(`(${callback})`);

      let result;

      if (Array.isArray(inputValue) && typeof callbackFn === 'function') {
        result = inputValue.myMap(callbackFn);
      } else {
        result = callbackFn(inputValue);
      }

      setOutput(JSON.stringify(result, null, 2));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="playground">
      <div className="playground-inputs">
        <div className="input-group">
          <label className="input-label">Input</label>
          <input
            type="text"
            className="input-field mono"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Callback</label>
          <input
            type="text"
            className="input-field mono"
            value={callback}
            onChange={(e) => setCallback(e.target.value)}
            spellCheck={false}
          />
        </div>
        <button className="run-btn" onClick={handleRun}>
          Run
        </button>
      </div>

      <div className="playground-output">
        <label className="input-label">Output</label>
        <div className={`output-box ${error ? 'error' : ''}`}>
          <code>{error || output || 'Click Run to see result'}</code>
        </div>
      </div>
    </div>
  );
}
