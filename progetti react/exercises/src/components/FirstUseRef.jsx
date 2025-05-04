 import React, { useRef } from 'react';
 const  FirstUseRef =()=> {
        const inputRef = useRef(null); 
      
        const secondUseRef = (event) => {
          if (inputRef.current) {
            inputRef.current.focus(event); 
          }
        };
      
        return (
          <>
          <form>
            <input type="text" ref={inputRef} /> 
            <button onClick={secondUseRef}>input button</button>
            </form>
          </>
        );
      }
      
      export default FirstUseRef;