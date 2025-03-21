let primoPiatto = {
    pasta: "pomodoro",
    riso: "cantonese",
    lasagna : "bolognese",
    
  };
  
  let json = JSON.stringify(primoPiatto);
  
 console.log(typeof json); 
  
  console.log(json);

  const jsonParse = JSON.parse(primoPiatto);

  console.log(typeof jsonParse);
  console.log(jsonParse);  

