import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import services from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
   const [persons, setPersons] = useState([]);
   const [newName, setNewName] = useState("");
   const [newNumber, setNewNumber] = useState("");
   const [filteredPersons, setFilteredPersons] = useState(persons);
   const [message, setMessage] = useState("");
   const [error, setError] = useState("");

   useEffect(() => {
      services.getAll().then((response) => {
         setFilteredPersons(response.data);
         setPersons(response.data);
      });
   }, []);

   // add new contact

   const addName = (event) => {
      event.preventDefault();
      let nameObject = { name: newName, number: newNumber };
      let present = persons.find((person) => person.name === nameObject.name);
      console.log(present);
      if (present) {
         if (
            window.confirm(
               `${newName} is already added to phonebook, replace the old number with a new one?`,
            )
         ) {
            // update contact if name exist already
            services
               .update(present.id, nameObject)
               .then((response) => {
                  console.log(response);
                  let latest = persons.map((person) =>
                     person.id !== present.id ? person : response.data,
                  );
                  setPersons(latest);
                  setFilteredPersons(latest);
                  setMessage(`Updated ${response.data.name}`);
                  setTimeout(() => {
                     setMessage(null);
                  }, 5000);
               })
               .catch((error) => {
                  setError(
                     `Information of ${nameObject.name} has already been removed from server.`,
                  );
                  setTimeout(() => {
                     setError(null);
                  }, 5000);
               });
         }
      } else {
         // create new contact if name doesn't exist
         services.create(nameObject).then((response) => {
            let latest = persons.concat(response.data);
            setPersons(latest);
            setFilteredPersons(latest);
            setMessage(`Added ${response.data.name}`);
            setTimeout(() => {
               setMessage(null);
            }, 5000);
         });
      }
      setNewName("");
      setNewNumber("");
   };

   const handleDelete = (clicked) => {
      if (window.confirm(`Delete ${clicked.name} ?`)) {
         services
            .remove(clicked.id)
            .then((response) => {
               if (response.status === 200) {
                  let latest = persons.filter(
                     (person) => person.id !== clicked.id,
                  );
                  setPersons(latest);
                  setFilteredPersons(latest);
                  setMessage(`Deleted ${clicked.name}`);
                  setTimeout(() => {
                     setMessage(null);
                  }, 5000);
               }
            })
            .catch((error) => {
               setError(`${clicked.name} is already deleted from server.`);
               setTimeout(() => {
                  setError(null);
               }, 5000);
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
         {message && <Notification message={message} />}
         {error && <Notification error={error} />}
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
