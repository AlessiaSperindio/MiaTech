//Modifica TodoList per utilizzare TodoContext per gestire lo stato dei to-do, anziché useFetch direttamente. Crea un componente App che avvolga TodoList con TodoProvider




import { createContext, useState, useContext, useCallback, useMemo } from 'react';


const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
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
  const { todos } = useTodos(); 
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


const App =() => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;