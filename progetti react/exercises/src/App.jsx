


import { useRef } from "react";
import { useState, useEffect } from "react"

import { Route, Routes } from "react-router-dom"




const App = () => {
    const { data } = useState();
    const inputRef = useRef();

    const handleFocusInput = () => {
        inputRef.current.focus();
    }

    const [counter, setCounter] = useState(0)

    //funzione eseguita al mounth del componente(primo rendering)
    useEffect(() => {
        console.log("mounth del componente")
    }, []);

    //funzione eseguita in risposta a qualsiasi aggiornamento del componente
    useEffect(() => {
        console.log("update del componente")
    });
    //funzione eseguita in risposta ad aggiornamenti specifici dello state(counter)
    useEffect(() => {
        console.log("update del counter")
    }, [counter]);

//handleevents
const handleClick = () => {
        console.log("click on button");
    }

    const handleInput = (event) => {
console.log(event.target.value);
    }

    const handleChange = (event) => {
console.log(event.target.value);
    }
const [acquari, setAcquari] = useState([]);
  // Stato per il nuovo acquario o quello in modifica
  const [nomeAcquario, setNomeAcquario] = useState('');
  // Stato per tenere traccia dell'acquario in modifica
  const [editIndex, setEditIndex] = useState(null);

  // Funzione per aggiungere un nuovo acquario
  const aggiungiAcquario = () => {
    if (nomeAcquario.trim() === '') return;
    setAcquari([...acquari, nomeAcquario]);
    setNomeAcquario('');
  };

  // Funzione per eliminare un acquario
  const eliminaAcquario = (index) => {
    const nuoviAcquari = [...acquari];
    nuoviAcquari.splice(index, 1);
    setAcquari(nuoviAcquari);
  };

  // Funzione per iniziare la modifica
  const modificaAcquario = (index) => {
    setNomeAcquario(acquari[index]);
    setEditIndex(index);
  };

  // Funzione per salvare la modifica
  const salvaModifica = () => {
    if (nomeAcquario.trim() === '') return;
    const nuoviAcquari = [...acquari];
    nuoviAcquari[editIndex] = nomeAcquario;
    setAcquari(nuoviAcquari);
    setNomeAcquario('');
    setEditIndex(null);
  };
  const [searchTerm, setSearchTerm] = useState('');
  //const filteredAquari =data.filter =((a) =>
    //a.nome.toLowerCase().includes(searchTerm.toLowerCase())
  //);




    return (
        <>

            <div className="flex flex-col columns-3 items-center w-[1260] bg-gray-100 text-[] ">
                <h1>All Tanks</h1>
                <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
      />
                <select onChange={handleChange}>VIEW ALL
                    
                    <option value="one">My First Tank</option>
                    <option value="two">My Second Tank</option>
                    <option value="three">My Third Tank</option>
                </select>
                <input type="text" onInput={handleInput}/>
            </div>
            <div>
      <h2>Aquarium Management</h2>
      <input
        type="text"
        value={nomeAcquario}
        onChange={(e) => setNomeAcquario(e.target.value)}
        placeholder="My new tank"
      />
      {editIndex !== null ? (
        <button onClick={salvaModifica}>Save</button>
      ) : (
        <button onClick={aggiungiAcquario}>Add</button>
      )}

      <ul>
        {acquari.map((acquario, index) => (
          <li key={index}>
            {acquario}
            <button onClick={() => modificaAcquario(index)}>Edit</button>
            <button onClick={() => eliminaAcquario(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

            <div>
                <div>
                    <div>
                        <h1>My Tanks</h1>


                        <button onClick={handleInput}>Add Tank
                            <input type="text" onInput={handleInput}/>
                        </button>
                        
                        <Routes>
                            <Route path="/addnew" element={<NewTank />} />


                        </Routes>

                        <button onClick={handleChange}>Filter
                            <select onChange={handleChange}>
                            <option value="one"></option>
                            <option value="two"></option>
                            <option value="three"></option>
                        </select>
                        </button>
                        <button onClick={() => setCounter(counter - 1)}>previous Counter{handleClick}</button>
                        <input type="text" onInput={handleInput}/>
                        <select onChange={handleChange}>Last Month
                            <option value="one"></option>
                            <option value="two"></option>
                            <option value="three"></option>
                        </select>

                    </div>

                    <div>
                        <button onClick={handleFocusInput}>
                            Search </button>
                        <input ref={inputRef} />
                        <button onClick={handleClick}>search</button>
                        <div>
                            <span>
                                <button onClick={() => setCounter(counter - 1)}>previous Counter{counter}</button>
                                <button onClick={() => setCounter(counter + 1)}>next Counter:{counter}</button>
                                <button onClick={() => setCounter(counter == 0)}>reset Counter:{counter}</button>
                            </span>
                        </div>




                    </div>
                </div>
            </div>



            <table>
                <thead>

                    <tr>

                        <th>User Id
                            <select onChange={handleChange}>
                    
                    <option value="one"></option>
                    <option value="two"></option>
                    <option value="three"></option>
                </select>
                        </th>
                        <th>E mail
                            <select onChange={handleChange}>
                    
                    <option value="one"></option>
                    <option value="two"></option>
                    <option value="three"></option>
                </select>
                        </th>
                        <th>Location
                            <select onChange={handleChange}>
                    
                    <option value="one"></option>
                    <option value="two"></option>
                    <option value="three"></option>
                </select>
                        </th>
                        <th>Activities
                            <select onChange={handleChange}>
                    
                    <option value="one"></option>
                    <option value="two"></option>
                    <option value="three"></option>
                </select>
                        </th>
                        <th>Last Update
                            <select onChange={handleChange}>
                    
                    <option value="one"></option>
                    <option value="two"></option>
                    <option value="three"></option>
                </select>
                        </th>
                        <th>All Activities
                            <select onChange={handleChange}>
                    
                    <option value="one"></option>
                    <option value="two"></option>
                    <option value="three"></option>
                </select>
                        </th>
                        <th>Call Support
                            <select onChange={handleChange}>
                    
                    <option value="one"></option>
                    <option value="two"></option>
                    <option value="three"></option>
                </select>
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {data === null || data.length === 0 ? (
                        <tr>
                            <td colSpan={7}>

                            </td>
                        </tr>

                    ) : (
                        data.map((item) => (
                            <tr key={item.UserId}>


                                <td>{item.UserId}</td>
                                <td>{item.Email}</td>
                                <td>{item.Location}</td>
                                <td>{item.Activities}</td>
                                <td>{item.LastUpdate}</td>
                                <td>{item.AllActivities}</td>
                                <td>{item.CallSupport}</td>
                            </tr>
                        ))
                    )
                    }

                </tbody>
            </table>

            
        </>
    )

}
export default App;
