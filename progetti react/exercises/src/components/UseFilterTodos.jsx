import React from "react";
//Crea un hook personalizzato chiamato useFilteredTodos che accetta una lista di to-do e un termine di ricerca. Utilizza useEffect per filtrare i to-do in base al termine di ricerca e restituisci i to-do filtrati.
            
import { useFilteredTodos } from "../src/hooks/useFilteredTodos";

const url = "https://jsonplaceholder.typicode.com/comments";

const UseFilterTodos = () => {
    const { data } = useFilteredTodos(url, { method: "GET" });
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>postId</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>

                </thead>

                <tbody>
                    {data === null || data.length === 0 ? (
                        <tr>
                            <td colSpan={4}>
                                empty data
                            </td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.postId}>


                                <td>{item.postId}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))
                    )
                    }

                </tbody>
            </table>
        </>)
}
export default UseFilterTodos;
