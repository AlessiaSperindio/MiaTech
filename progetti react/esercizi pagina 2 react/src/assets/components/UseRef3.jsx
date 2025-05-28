import  { useState } from 'react';

function UseRef3() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [textInput, setTextInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  const handleShowInput = () => {
    alert(`Valore input di testo: ${textInput}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="textInput">Testo:</label>
          <input
            type="text"
            id="textInput"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>


      <button onClick={handleShowInput}>Mostra Valore Input</button>
    </div>
  );
}

export default UseRef3;