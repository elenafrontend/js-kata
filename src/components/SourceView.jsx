import { useState, useEffect, useRef } from 'react';

const PRISM_CSS = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
const PRISM_JS = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
const PRISM_JS_LANG = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js';

let prismLoaded = false;

function loadPrism() {
  if (prismLoaded) return Promise.resolve();

  return new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = PRISM_CSS;
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = PRISM_JS;
    script.onload = () => {
      const lang = document.createElement('script');
      lang.src = PRISM_JS_LANG;
      lang.onload = () => {
        prismLoaded = true;
        resolve();
      };
      document.head.appendChild(lang);
    };
    document.head.appendChild(script);
  });
}

function stripSourceMap(code) {
  return code.replace(/\/\/#\s*sourceMappingURL=.*/g, '').trimEnd();
}

export default function SourceView({ task }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);
  const codeRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([task.loadSource(), loadPrism()])
      .then(([text]) => {
        setCode(stripSourceMap(text));
      })
      .catch((err) => setCode(`// Error loading source: ${err.message}`))
      .finally(() => setLoading(false));
  }, [task]);

  useEffect(() => {
    if (code && codeRef.current && window.Prism) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  if (loading) {
    return <div className="source-loading">Loading...</div>;
  }

  return (
    <div className="source-view">
      <pre className="source-code">
        <code ref={codeRef} className="language-javascript">{code}</code>
      </pre>
    </div>
  );
}
