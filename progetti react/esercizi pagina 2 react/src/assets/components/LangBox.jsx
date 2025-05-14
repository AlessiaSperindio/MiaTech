import { useLang } from "./hooks/useLang";


const LangBox = () => {
    const [lang, setLang] = useLang();
    return(
        <>
        <button onClick={()=> setLang((l)=> l == "it")}>Change lang:{lang}</button>
        <span>{lang == "it" ? "Mondo" : "World"}</span>
        

        </>
    )
}
export default LangBox;