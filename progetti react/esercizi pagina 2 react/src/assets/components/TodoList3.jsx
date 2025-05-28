import  { useState, useCallback, useMemo } from 'react';
import  useFilteredTodos  from '../../hooks/useFilteredTodos'; 

function TodoList3({ todos }) {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  
  const filteredTodos = useMemo(() => {
 return useFilteredTodos(todos, searchTerm);
  }, [todos, searchTerm]);

  return (
    <div>
      
      <input
        type="text"
        placeholder="Cerca..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList3;