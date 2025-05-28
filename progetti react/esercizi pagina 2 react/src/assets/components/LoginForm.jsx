
import  { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Login</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
          required
        />
      </div>
      <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
    </form>
  );
}

export default LoginForm;
