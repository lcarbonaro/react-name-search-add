import { useState } from "react";

function AddForm({addName}) {

  const [newName,setNewName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addName(newName);
    setNewName('');
  }

  return (
    <form onSubmit={handleSubmit}>

       <label htmlFor="addName">
          New Name:
          <input
            name="addName"
            type="text"
            value={newName}
            placeholder="enter new name"            
            onChange={e => setNewName(e.target.value) }
          />
        </label>
        <button>Add</button>
    </form>
  )
}

export default AddForm;
