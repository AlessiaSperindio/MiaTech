// Modifica TodoList per utilizzare useSearchParams per memorizzare il termine di ricerca nei parametri della query.
import { useSearchParams } from 'react-router-dom';


import { Link } from 'react-router-dom';

// Esempio di dati dei To-Do
const todos = [
  { id: '1', title: 'Fare la spesa', description: 'Comprare frutta e verdura' },
  { id: '2', title: 'Studiare React', description: 'Imparare useParams e useNavigate' },
  { id: '3', title: 'Pulire casa', description: 'Spazzare e passare l’aspirapolvere' },
];

const TodoList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('search') || '';

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Lista To-Do</h2>
      <input
        type="text"
        placeholder="Cerca..."
        value={searchTerm}
        onChange={handleChange}
      />

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;