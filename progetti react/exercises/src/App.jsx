import React, { useState, useEffect, useRef } from "react";
import { useFilteredTodos } from "../hooks/useFilteredTodos";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef();

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error during fetch data");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);






    const filteredTodos = useFilteredTodos(posts, searchTerm);

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleFocusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
  
    return (
      <>
        <button onClick={handleFocusInput}>Focus sulla ricerca</button>
        <input
          type="text"
          placeholder="Cerca..."
          value={searchTerm}
          onChange={handleSearchChange}
          ref={inputRef}
        />
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
            {filteredTodos.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.completed ? "Sì" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
  
  
export default App;