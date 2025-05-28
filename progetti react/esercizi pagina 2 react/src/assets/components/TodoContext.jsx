//Crea un contesto per lo stato dei to-do e un provider che fornisca i to-do e la funzione di aggiornamento. Utilizza useContext per accedere ai to-do nel componente TodoList.

import React, { createContext, useState, useContext, useCallback, useMemo } from 'react';

const TodoContextUse = createContext();


export const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([
    
    { id: 1, text: 'Fare la spesa' },
    { id: 2, text: 'Studiare React' },
  ]);

  
  const updateTodos = useCallback((newTodos) => {
    setTodos(newTodos);
  }, []);

  return (
    <TodoContext.Provider value={{ todos, updateTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);

const TodoList() {
  const { todos, updateTodos } = useTodos();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
export default TodoContext;