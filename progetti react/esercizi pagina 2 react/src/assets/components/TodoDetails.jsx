// Modifica l'applicazione per includere una pagina dei dettagli del to-do.
//  Utilizza useParams per ottenere l'ID del to-do dalla URL e visualizzare i dettagli del to-do selezionato.
       
import { useParams } from 'react-router-dom';


const todos = [
  { id: '1', title: 'Fare la spesa', description: 'Comprare frutta e verdura' },
  { id: '2', title: 'Studiare React', description: 'Imparare useParams e useNavigate' },
  
];

const TodoDetails = () => {
  const { id } = useParams();

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return <div>To-Do non trovato</div>;
  }

  return (
    <div>
      <h2>Dettagli To-Do</h2>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoDetails;     