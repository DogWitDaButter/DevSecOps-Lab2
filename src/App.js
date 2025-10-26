import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const urlParams = new URLSearchParams(window.location.search);
  const urlName = urlParams.get('name') || ''; // Simulate untrusted URL input

  useEffect(() => {
    if (urlName) {
      setName(urlName); // Reflect URL param into state
    }
  }, [urlName]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Enter name: <input value={name} onChange={(e) => setName(e.target.value)} /></p>
        <h1 dangerouslySetInnerHTML={{ __html: name }} /> {/* XSS: Unsanitized dynamic HTML */}
      </header>
    </div>
  );
}

export default App;