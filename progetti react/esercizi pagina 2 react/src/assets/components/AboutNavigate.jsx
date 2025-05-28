
//Utilizza useNavigate per aggiungere un pulsante nella pagina About che reindirizzi l'utente alla pagina Home.
            
import { useNavigate } from 'react-router-dom';

const AboutNavigate = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div>
      <h1>About Page</h1>
      
      <button onClick={handleGoHome}>Torna alla Home</button>
    </div>
  );
};

export default AboutNavigate;