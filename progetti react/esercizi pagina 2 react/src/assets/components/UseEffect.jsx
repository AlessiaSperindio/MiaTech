
//  Crea una componente chiamata TodoList che utilizza useFetch per recuperare una lista di to-do da un'API (puoi usare un endpoint fittizio come https://jsonplaceholder.typicode.com/todos). Visualizza i to-do in una lista, mostrando un messaggio di caricamento finché i dati non sono disponibili e un messaggio di errore se qualcosa va storto.

import { useEffect, useState } from "react";
import TodoList from "./ToDoList";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
const UseEffect = () => {

    const [posts, setPosts] = useState(null);
    const fetchData = async () => {
        try {
            const response = await fetch(API_URL, { method: "GET" });
            if (!response.ok) {
                throw new Error("error during fetch data");
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>User Id </th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts && posts.map((post) => (
                            <tr key={post.UserId}>
                                <td>{post.UserId}</td>
                                <td>{post.Id}</td>
                                <td>{post.Title}</td>
                                <td>{post.Completed}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default UseEffect;