
import { useLang } from "./hooks/useLang";
import LangBox from "./LangBox";
const UseContext = () => {

    const [lang, setLang] = useLang();
    const handleChangeLang = () => {
        setLang((l) => l == "it" ? "en" : "it");
    }
    return (
        <>
            <button onClick={handleChangeLang}>Change Lang:{lang}</button>
            <p>
                {lang == "it" ? "Ciao" : "Hello"}
                <LangBox />
            </p>
        </>
    )
}
export default UseContext;