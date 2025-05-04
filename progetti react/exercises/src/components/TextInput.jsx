import React from 'react';
import { useState } from 'react';

const TextInput = () =>{
    const [inputValue, setInputValue] = useState({
        name: "",
        value: "",
        onChange: false,
       
    })

  
    const handleChange = (event) => {
        const { name, type, checked, onInput} = event.target;
       
        setInputValue ((inputValue) => ({
            ...inputValue,
            [name]:type == 'text' ? checked : onInput,
        })
        )
    }
    const handleInput = (event) => {
        event.preventDefault();
        console.log(inputValue);
        }    
  return (
      <>
      <form onChange={handleInput}>
      
        <input type='text' name='defaultChecked' checked={inputValue.defaultChecked} onInput={handleChange}>scrivi una frase:</input>
        
        <p>Hai scritto: {inputValue}</p>
        </form>
      </>
    )
  }

export default TextInput;
