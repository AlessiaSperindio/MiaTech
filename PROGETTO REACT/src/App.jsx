import { useState } from "react";
import CustomButton from "./components/customButton";
import Dropdown from "./Dropdown";
const App = () => {
  const [len, setLen] = useState(25);
  const [isOpen, setIsOpen]= useState
  const [text] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus id at, quis deleniti tempore est in natus, porro, quo labore mollitia provident pariatur vitae quidem aliquid dicta odio eum.");
  const title = "Questa è una lezione di React";


  const formatText = (str, len) => {
    if (str.length > len) {
      return str.substring(0, len).trim() + "..."
    } else {
      return str;

    }
  }
  
  const toggleIsOpen = () =>{
    setIsOpen((isOpen)=>{
        return !isOpen;
    })
  }

  return (
    <>
    
      <h1>{title}</h1>
      <p>{formatText(text, 25)}</p>
      <CustomButton isActive={len==25}activeLabel="showmore" inactiveLabel="show less" onBtnClick="toggleshowmore"/>
      <CustomButton isActive={isOpen} activeLabel="close" inactiveLabel="open"onBtnClick={toggleIsOpen}/>
      <Dropdown isOpen={isOpen}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, numquam eius itaque nihil maiores quos tempore debitis velit recusandae eligendi, autem illum officiis voluptas officia quaerat temporibus consequatur incidunt ducimus!</p>
      </Dropdown>
      <div>{
           isOpen&&(
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facere explicabo tempora blanditiis laboriosam fugit unde. Vel velit nobis quo omnis, libero aliquid impedit facilis praesentium atque pariatur. Alias, dolorem.</p>
           )
           }</div>
      <button onClick={toggleShowMore}>{len == 25 ? "show more" : "show less"}</button>
    </>
  )
}




export default App;
