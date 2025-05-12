import{useRef} from "react";


const UseRef=()=>{
    const inputRef = useRef();

    const handleFocusInput = () => {
        inputRef.current.focus();
    }
    

    return(
        <>
        <button onClick={handleFocusInput}> 
            Search </button>
        <input ref={inputRef}/>
        </>
    )
}
export default UseRef;