//  Crea una componente chiamata TodoList che utilizza useFetch per recuperare una
//  lista di to-do da un'API (puoi usare un endpoint fittizio come https://jsonplaceholder.typicode.com/todos). Visualizza i to-do in una lista, mostrando un messaggio di caricamento finché i dati non sono disponibili e un messaggio di errore se qualcosa va storto.


import { useFetch } from "../../hooks/useFetch";

function TodoList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p>Si è verificato un errore: {error}</p>;
  }

  return (
    <div>
      <h2>Lista di To-Do</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;