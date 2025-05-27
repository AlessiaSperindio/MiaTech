import  { useState, useCallback } from 'react';
import { useFilteredTodos } from '../../hooks/useFilteredTodos';
const TodoList = () => {
  const filteredTodos = useFilteredTodos(todos, searchTerm);
  const [searchTerm, setSearchTerm] = useState('');
  const [todos, setTodos] = useState([
    
    { id: 1, text: 'Fare la spesa' },
    { id: 2, text: 'Studiare React' },
    { id: 3, text: 'Andare in palestra' },
  ]);

  
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []); 

  

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;