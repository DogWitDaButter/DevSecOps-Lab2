import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState('');

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(username); }}>
      <input
        placeholder="Enter username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
