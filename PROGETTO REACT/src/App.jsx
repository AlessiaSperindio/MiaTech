import { useState } from "react";
const App = () =>{
  const [len,setLen] = useState (25);
  const [text]= useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus id at, quis deleniti tempore est in natus, porro, quo labore mollitia provident pariatur vitae quidem aliquid dicta odio eum.");
  const title = "Questa è una lezione di React";
  
  
const formatText = (str,len) => {
  if (str.length >len){
    return str.substring (0,len).trim()+"..."
  }else { return str;
    
}
}
const toggleShowMore = () => {
    if (len == 25){
      setLen (text.length);
    }else{
      setLen(25);
    }
   }
return ( 
<>
<h1>{title}</h1>
<p>{formatText(text,25)}</p>
<button onClick = {toggleShowMore}>{len == 25 ? "show more" : "show less"}</button>
</>
)
}

  


export default App;
