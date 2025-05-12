import { createContext, useState } from "react";

const LangContext= createContext(null);



const UseContextEx=({children})=>{
    const [lang,setLang]=useState("it");
    return(
    <>
    <LangContext.Provider value={[lang, setLang]}>
        {children}
    </LangContext.Provider>
    </>
    )
}
export default UseContextEx; 
/*import {useContext} from"react";
import {UseContextEx} from "./providers/LangProvider"

const App = ()=>{
    const [lang,setLang] = useContext(UseContextEx);

    const handleChangeLang=()=>{
        setLang((l) => l == "it" ? "en" : "it");
        }
    return(
    <>
    <button onClick={handleChangeLang}></button>
<p>
{lang == "it" ? "Ciao" : "Hello"}
</p>
    </>
    )
    }
    export default App;
    */