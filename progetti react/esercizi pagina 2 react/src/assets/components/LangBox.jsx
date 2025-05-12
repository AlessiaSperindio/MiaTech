import { useLang } from "./hooks/useLang";


const LangBox = () => {
    const [lang] = useLang();
    return(
        <>
        <span>{lang == "it" ? "Mondo" : "World"}</span>
        </>
    )
}
export default LangBox;