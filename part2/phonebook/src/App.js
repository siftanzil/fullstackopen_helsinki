import { useState } from "react";

const App = () => {
   const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
   const [newName, setNewName] = useState("");
   const addName = (event) => {
      event.preventDefault();
      let nameObject = { name: newName };
      // console.log(nameObject);
      persons.push(nameObject);
      // console.log(persons);
      setNewName("");
   };

   return (
      <div>
         <h2>Phonebook</h2>
         <form onSubmit={addName}>
            <div>
               name:{" "}
               <input
                  value={newName}
                  onChange={(e) => {
                     setNewName(e.target.value);
                  }}
               />
            </div>
            <div>
               <button type="submit">add</button>
            </div>
         </form>
         <h2>Numbers</h2>
         <p>
            {persons.map((person, i) => {
               return (
                  <span key={i}>
                     {person.name}
                     <br />
                  </span>
               );
            })}
         </p>
      </div>
   );
};

export default App;
