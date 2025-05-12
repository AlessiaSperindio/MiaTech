import { useState, useEffect } from "react";

const ShowCounter = () => {
     const [counter, setCounter] = useState(0)
     useEffect(() => {
             console.log("showcounter")
         }, [counter]);
    return(
        <>
        <p>show your counter{counter}</p>
        <div className="flex flex-col columns-3 items-center w-[1260] bg-[#0f192eff] text-[#4281a4ff]">
                            <span>
                                <button onClick={() => setCounter(counter - 1)}>previous Counter{counter}</button>
                                <button onClick={() => setCounter(counter + 1)}>next Counter:{counter}</button>
                                <button onClick={() => setCounter(counter == 0)}>reset Counter:{counter}</button>
                            </span>
                        </div>
        </>
    )
}
export default ShowCounter