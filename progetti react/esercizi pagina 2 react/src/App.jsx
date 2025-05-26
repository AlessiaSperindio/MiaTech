

import { useState, useEffect } from "react"
const App = () => {
    const [allData,setAllData] = useState ("All") 
    const [filter,setFilter] = useState("");
    const [status, setStatus ]= useState("")

    
    const fetchData = async () => {
        try {
            const allData = await (`${filter == "All" ? "" : `status=${filter}`}`);
            setAllData(allData.docs);
            setStatus({ hasNextPage: allData.hasNextPage, hasPrevPage: allData.hasPrevPage });
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchData();
        setFilter();
    }, [filter]);
    return(
        <>
         <div className="flex gap-2 overflow-x-auto pb-2 mb-4 justify-between">
                        <div className="flex gap-2">
                            {["All", "Pending", "Completed", "Canceled"].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => {
                                        setFilter(status);
                                       
                                    }}
                                    className={`whitespace-nowrap px-4 py-1 rounded-full text-sm border border-neutral-200 shadow-md dark:bg-gray-800 dark:text-white dark:border-neutral-600 cursor-pointer
                                ${filter === status ? "bg-black text-white dark:text-light" : "bg-light dark:bg-neutral-950"}`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                        </div>

        </>
    )
       
}
export default App