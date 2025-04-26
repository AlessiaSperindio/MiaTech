import { useEffect, useState } from "react";
//exercise "contatore semplice-parte 2"
import Counter from "./assets/components/Counter";


const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {

        if (error) setError(false);
        if (!loading) setLoading(true);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");

            if (response.ok) {
                setData(await response.json());
            } else {
                throw new Error("Error during data fetch, try again later ");
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect (() => {
        fetchData();
    },[])
    if (loading){
        return(
            <p>loading ...</p>
        )
    }
    if (error) {
        return(
            <p>{error}</p>
        )
    }
    return (
        <>
        <table>
        <thead>
            <tr>
                <th>id</th>
                <th>userId</th>
                <th>title</th>
                <th>body</th>
            </tr>
            
        </thead>
        
        <tbody>
            {data === null || data.length === 0 ?(
                 <tr>
                    <td colSpan = {4}>
                        empty data
                    </td>
                 </tr>
            ):(
                data.map((item)=>(
                    <tr key ={item.id}>
            
                    
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))
                )
            }
           
        </tbody>
        </table>
        </>
    )
}
export default App;
//chiamata API