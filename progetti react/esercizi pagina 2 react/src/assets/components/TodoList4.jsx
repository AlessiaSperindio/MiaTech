//Modifica TodoList per includere collegamenti ai dettagli di ogni to-do.
import { Link } from 'react-router-dom';


const todos = [
  { id: '1', title: 'Fare la spesa', description: 'Comprare frutta e verdura' },
  { id: '2', title: 'Studiare React', description: 'Imparare useParams e useNavigate' },
  
];

const TodoList4 = () => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
       
        <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
      </li>
    ))}
  </ul>
);

export default TodoList4;