import { useState } from "react";

function AddForm({addName}) {

  const [newName,setNewName] = useState('');

  return (
    <>
       <label htmlFor="addName">
          New Name:
          <input
            name="addName"
            type="text"
            placeholder="enter new name"            
            onChange={e => setNewName(e.target.value) }
          />
        </label>
        <button onClick={() => {
          alert('in click handler name=',newName);
          addName(newName);
        }}>Add</button>
    </>
  )
}

export default AddForm;
