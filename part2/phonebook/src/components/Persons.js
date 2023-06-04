import React from "react";

const Persons = ({ filteredPersons, handleDelete }) => {
   return (
      <p>
         {filteredPersons.map((person) => {
            return (
               <span key={person.id}>
                  {person.name} {person.number}{" "}
                  <button onClick={() => handleDelete(person)}>delete</button>
                  <br />
               </span>
            );
         })}
      </p>
   );
};

export default Persons;
