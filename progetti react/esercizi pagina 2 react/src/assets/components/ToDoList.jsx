import {useFetch} from "react";

const TodoList = () => {
    const data =["red","blue ", "green", "yellow"];
    return(
        <>
        <ul>
        {
            data.map((color,index)=> (
<li key = {`colors-item-${index}`}>{color} </li>
            ))
        }
        </ul>
        </>

    )
}
export default TodoList
