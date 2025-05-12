
import React, { useState } from 'react';

function TodoList({ todos }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Hook per filtrare i todo in base al termine di ricerca
  const useFilteredTodos = () => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredTodos = useFilteredTodos();

  return (
    <div>
      {/* Campo di input per la ricerca */}
      <input
        type="text"
        placeholder="Cerca..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lista dei todo filtrati */}
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;