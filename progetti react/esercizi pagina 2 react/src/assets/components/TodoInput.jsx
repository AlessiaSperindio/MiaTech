
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/todosSlices';
import { useState } from 'react';

const TodoInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nuovo to-do"
            />
            <button onClick={handleAdd}>Aggiungi</button>
        </div>
    );
}

export default TodoInput;