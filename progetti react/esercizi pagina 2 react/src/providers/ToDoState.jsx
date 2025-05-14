import { createContext, useState } from "react";

export const StateContext = createContext(null);

const ToDoState = ({children}) => {
    const [state,setState] = useState("to-do");


    return(
        
        <StateContext.Provider value = {[state, setState]}>
            {children}
        </StateContext.Provider>
        
    )
}
export default ToDoState;