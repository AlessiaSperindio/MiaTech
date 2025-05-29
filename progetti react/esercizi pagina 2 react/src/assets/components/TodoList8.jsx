import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from './actions';

const TodoList8 = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            dispatch(setTodos(data));
        };
        fetchData();
    }, [dispatch]);

    return (
        <div>
            <h2>La mia Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList8;