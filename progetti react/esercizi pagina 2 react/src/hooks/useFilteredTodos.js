import { useState, useEffect } from 'react';

export const useFilteredTodos =(todos, searchTerm) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {

    const filtered = todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm())
    );
    setFilteredTodos(filtered);
  }, [todos, searchTerm]);

  return filteredTodos;
}