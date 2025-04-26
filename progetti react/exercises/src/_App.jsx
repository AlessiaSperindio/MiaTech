import HelloWorld from "./assets/components/HelloWorld"
import ClassHelloWorld from "./assets/components/ClassHelloWorld"
import {useEffect, useState } from 'react';


const App = () => {
  const [counter,setCounter] = useState(0)

  //funzione eseguita al mounth del componente(primo rendering)
  useEffect(()=>{
    console.log("mounth del componente")
  },[]);

  //funzione eseguita in risposta a qualsiasi aggiornamento del componente
  useEffect(()=>{
    console.log("update del componente")
  });
  //funzione eseguita in risposta ad aggiornamenti specifici dello state(counter)
  useEffect(()=>{
    console.log("update del counter")
  },[counter]);

  return(<>
  <button onClick={()=> setCounter(counter+1)}>Counter:{counter}</button>
<HelloWorld/>
<ClassHelloWorld/>
 </> )
}
export default App;
//una volta messo l'undescore al nome e controllato che sia salvato senza undescore nel  main nell'import, abbiamo questo file come backup.