import "./App.css";

import { useEffect, useState } from "react";

import Name from "./Name";
import AddForm from "./AddForm";

function App() {
  let data = [
    { id: 1, name: "Jack" },
    { id: 2, name: "Jill" },
    { id: 3, name: "Bob" },
  ];

  const [names, setNames] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  function addName(name) {    
    let nameObj = { id: data.length + 1, name};
    //console.log(nameObj);
    data.push(nameObj);
    console.table(data);
    setNames(data);
    setSearchTerm("");
  }

  useEffect(()=>{
    let filteredNames = data.filter( n => n.name.toLowerCase().includes( searchTerm.toLowerCase())  );
    setNames(filteredNames);
  }, [searchTerm]);

  return (
    <>
      <div>
        <label htmlFor="search">
          Search:
          <input
            name="search"
            type="text"
            placeholder="enter search text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
     
      <ul>
        {names.map((n) => (
          <Name key={n.id} firstName={n.name} />
        ))}
      </ul>

      <hr/>

      <AddForm addName={addName}/>
     
    </>
  );
}

export default App;
