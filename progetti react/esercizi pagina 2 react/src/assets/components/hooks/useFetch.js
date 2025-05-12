import {useEffect, useState } from "react";


export const UseFetch = (url,options={method:"GET",headers:{},data:{}}) => {
const [data, setData] = useState(null);
const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
       if(error) setError(false)
       if(!loading) setLoading(true)

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("error during fetch data");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        }finally{
            if(loading) setLoading(false);
        }
    }
   
    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        error,
        loading,
        reload :fetchData
}
}
