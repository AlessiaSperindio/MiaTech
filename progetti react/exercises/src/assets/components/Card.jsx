//Crea un componente Card che rende un div con una classe "card" e utilizza props.children per rendere il contenuto interno.
import React from 'react';

const Card = (props) => {
    
  return (
    <div className="card">
      {props.children}
    </div>
  );
};

export default Card;
            