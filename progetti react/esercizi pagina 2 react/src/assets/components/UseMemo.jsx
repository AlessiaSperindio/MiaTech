import { useState } from "react";

const UseMemo = () => {
    
  const [searchTerm, setSearchTerm] = useState('');
  const todos= useState([
    { id: 1, text: 'Fare la spesa' },
    { id: 2, text: 'Studiare React' },
    { id: 3, text: 'Andare in palestra' },
  ]);

  // Gestione del cambio dell'input di ricerca con useCallback
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Memoizzazione della lista filtrata con useMemo
  const filteredTodos = UseMemo(() => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]); // Ricostruisce solo se cambia uno di questi

  return (
    <>
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
   

    </>
    )
}
export default UseMemo;