import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("mounth del componente");
  }, []);

  useEffect(() => {
    console.log("update del componente");
  }, []);

  useEffect(() => {
    console.log("update  del counter");
  }, [counter]);

  return (
    <button onClick={() => setCounter(counter + 1)}>Counter:{counter}</button>
  )
}
export default App;