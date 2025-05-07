import { useEffect, useState } from "react";
const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: {}
};

export const useFilterTodos = (todos,searchTerm) => {
    
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

   
   const todos=[1,2,3,4];

    return {
        
    }
}
