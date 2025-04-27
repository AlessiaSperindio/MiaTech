import React from 'react';
import { useState } from 'react';

const TextInput = () =>{
    const [inputValue, setInputValue] = useState({
        name: "",
        value: "",
        onChange: false,
       
    })

  
    const handleChange = (event) => {
        const { name, value} = event.target;
       setInputValue = ((_inputValue) => ({
            ..._inputValue,
            [name]:type == 'text' ? defaultChecked : value,
        })
        )
    }
  return (
      <>
      <form onChange={handleChange}>
        
        <input type='text' name='defaultChecked' value ={inputValue.handleChange} />
        
        <p>Hai scritto: {inputValue}</p>
        </form>
      </>
    )
  }

export default TextInput;
