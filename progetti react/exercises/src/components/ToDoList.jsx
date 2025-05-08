import React from "react";

//Modifica TodoList per includere un campo di input per la ricerca.
//  Utilizza useFilteredTodos per visualizzare solo i to-do che corrispondono al termine di ricerca.

import {useState, useEffect} from "react";

import { useFilteredTodos } from "../hooks/useFilteredTodos";


const API_URL = "https://jsonplaceholder.typicode.com/todos";



const ToDoList = () => {

    const [posts, setPosts] = useState(null);
   

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL, { method: "GET" });
            if (!response.ok) {
                throw new Error("Error during fetch data")
            }
            const data = await response.json();

            setPosts(data);

        }catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
       fetchData();
    }, []);
    

    

    //const handleFocusInput =()=>{
      //  inputRef.current.focus();
    //}
    const filter= useFilteredTodos(handleFilterInput);
    const handleFilterInput=()=>{
        filter.current.focus();
    }
    
    /*
    useEffect(()=>{
        inputRef.current.focus();
    }, []);*/

    return (
        <>

        <button onClick={filter}>SEARCH ON LIST:{posts}</button>
        <input value={posts} ref={filter}/>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
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
                                <td>{post.completed}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default ToDoList;