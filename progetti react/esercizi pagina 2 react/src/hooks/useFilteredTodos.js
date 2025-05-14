
import { useState, useEffect } from "react";

//Crea un hook personalizzato chiamato useFilteredTodos che recupera dati da una URL passata
//  come argomento.
//  L'hook dovrebbe restituire i dati recuperati, uno stato di caricamento e uno stato di errore.


const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: {}
}


export const useFilteredTodos = ( url,options={DEFAULT_OPTIONS}) => {
    

    const [data, setData] = useState(null);
    const [filter, setFilter] = useState(true);
    const [error, setError] = useState(false);


    const filterData = async () => {
        if (error) setError(false);
        if (!filter) setFilter(true);

        try {
            const response = await filter(url, options);

            if (!response.ok) {
                throw new Error("Error during data fetch, try again later ");
            }
            const result = await response.json();
            setData(result);

        } catch (error) {
            setError(error.message);
        } finally {
            setFilter(false);
        }
    }
    useEffect(() => {
    filterData()
  }, []);



    return {
        data,
        error,
        filter,
        reload : filterData
    }
}