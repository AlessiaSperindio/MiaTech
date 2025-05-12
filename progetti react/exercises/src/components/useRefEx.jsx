
import{useRef} from "react";


const useRefEx=()=>{
    const inputRef = useRef();
const handleFocusInput=()=>{
     inputRef.current.focus();
};
    /*const useEffect(()=>{
        inputRef.current.focus();
    },[]);*/
    return(
        <>
        <input ref={inputRef}/>
        <button onClick={handleFocusInput}>focus:</button>
        </>
    )
}
export default useRefEx;
