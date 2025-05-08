
import { useState, useEffect } from "react";

//Crea un hook personalizzato chiamato useFilteredTodos che recupera dati da una URL passata
//  come argomento.
//  L'hook dovrebbe restituire i dati recuperati, uno stato di caricamento e uno stato di errore.


const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: {}
}

export const useFilteredTodos = (url, options = DEFAULT_OPTIONS) => {
    options = { ...DEFAULT_OPTIONS, ...options };

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const fetchData = async () => {
        if (error) setError(true);
        if (!loading) setLoading(true);

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error("Error during data fetch, try again later ");
            }
            const result = await response.json();
            setData(result);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [url])



    return {
        data,
        error,
        loading,
        
    }
}