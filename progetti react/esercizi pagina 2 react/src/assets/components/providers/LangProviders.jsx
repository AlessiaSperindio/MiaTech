import {createContext} from "react";
import {useState} from "react";


export const LangContext = createContext(null);

const LangProviders = ({children}) => {
    const [lang,setLang] = useState("it");


    return(
        <>
        <LangContext.Provider value = {[lang, setLang]}>
            {children}
        </LangContext.Provider>
        </>
    )
}
export default LangProviders;