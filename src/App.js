import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Hello {name}</h1> {/* XSS vulnerability */}
    </div>
  );
}

export default App;