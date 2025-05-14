
import About from "../src/pages/About"
import Home from "../src/pages/Home"
import { useState } from "react"
const App = () => {
    const [data] = useState({
        title:"my custom title",
        text: "my custom text"
    })
    return(
        <>
<Home/>
        <About data={data}/>
        </>
    )
       
}
export default App