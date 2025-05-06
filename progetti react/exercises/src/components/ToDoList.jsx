import React from "react";
import { useEffect, useState } from "react";



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

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts && posts.map((post) => (
                            <tr key={post.Id}>

                                <td>{post.Id}</td>
                                <td>{post.UserId}</td>
                                <td>{post.Title}</td>
                                <td>{post.Body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default ToDoList;