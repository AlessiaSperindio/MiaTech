//Modifica TodoList per includere un campo di input per la ricerca. Utilizza useFilteredTodos per visualizzare solo i to-do che corrispondono al termine di ricerca.
import { useState } from "react";
import { useFilteredTodos } from "./hooks/useFilteredTodos";

const TodoList = ({ todos }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const filteredTodos = useFilteredTodos(todos, searchTerm);
    const handleSearchChange = (e) => { setSearchTerm(e.target.value); };

    return (
        <>
            <ul>
                {filteredTodos.map((todo) => handleSearchChange(
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    )

}
export default TodoList


