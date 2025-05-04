import React from 'react';
import { useState, useEffect } from 'react';
//start of exercise" contatore semplice-parte 2"
const Counter = () => {
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


  //exercise "incrementa contatore":first button
  //exercise "decrementa il contatore":second button
  //exercise "resetta il contatore":third button
  

return(
    <>
    <p>Count:0</p>
    <button onClick={()=> setCounter(counter-1)}>previous Counter{counter}</button>
    <button onClick={()=> setCounter(counter+1)}>next Counter:{counter}</button>
  <button onClick={()=> setCounter(counter == 0)}>reset Counter:{counter}</button>
    </>
)
}
export default Counter;
// exercise "Creare un contatore semplice "
// exercise" contatore semplice-parte 2"