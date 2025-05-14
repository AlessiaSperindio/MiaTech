import { useContext } from "react";
import { LangContext } from "../providers/LangProviders";


export const useLang = () => {
    return useContext(LangContext);
}