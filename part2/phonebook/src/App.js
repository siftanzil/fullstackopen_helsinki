import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import services from "./services/persons";

const App = () => {
   const [persons, setPersons] = useState([]);
   const [newName, setNewName] = useState("");
   const [newNumber, setNewNumber] = useState("");
   const [filteredPersons, setFilteredPersons] = useState(persons);

   useEffect(() => {
      services.getAll().then((response) => {
         setFilteredPersons(response.data);
         setPersons(response.data);
      });
   }, []);

   const addName = (event) => {
      event.preventDefault();
      let nameObject = { name: newName, number: newNumber };
      persons.find((person) => person.name === nameObject.name)
         ? alert(`${newName} is already added to phonebook`)
         : services.create(nameObject).then((response) => {
              //   console.log(response.data);
              let latest = persons.concat(response.data);
              setPersons(latest);
              setFilteredPersons(latest);
           });
      setNewName("");
      setNewNumber("");
   };

   const handleDelete = (clicked) => {
      if (window.confirm(`Delete ${clicked.name} ?`)) {
         services.remove(clicked.id).then((response) => {
            if (response.status === 200) {
               let latest = persons.filter(
                  (person) => person.id !== clicked.id,
               );
               setPersons(latest);
               setFilteredPersons(latest);
            }
         });
      }
   };

   const filterPersons = (query) => {
      const filteredPersons = persons.filter((person) =>
         person.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredPersons(filteredPersons);
   };

   return (
      <div>
         <h2>Phonebook</h2>
         <Filter filterPersons={filterPersons} />
         <h2>add a new</h2>
         <PersonForm
            newName={newName}
            setNewName={setNewName}
            newNumber={newNumber}
            setNewNumber={setNewNumber}
            addName={addName}
         />
         <h2>Numbers</h2>
         <Persons
            filteredPersons={filteredPersons}
            handleDelete={handleDelete}
         />
      </div>
   );
};

export default App;
