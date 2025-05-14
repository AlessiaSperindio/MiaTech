// Crea un contesto per lo stato dei to-do e un provider che fornisca i to-do e la funzione di aggiornamento. Utilizza useContext per accedere ai to-do nel componente TodoList.
  import {useContext} from "react";
import {ToDoState} from"src/providers/ToDoState.jsx";

const ContextToDo = () => {
    const [toDo,settoDo] = useContext(ToDoState);
    const handleChangetoDo= () => {
        settoDo((done)=>done == "ok" ? "todo" : "go!");
    }
return(
    <>
    <button onClick={handleChangetoDo}>Change toDo: {toDo}</button>
    <p>
        {toDo == "go!" ? "text" : "done"}
    </p>

    </>
)
}
export default ContextToDo
          