import React from "react";

const Persons = ({ filteredPersons, handleDelete }) => {
   return (
      <p>
         {filteredPersons.map((person, i) => {
            return (
               <span key={i}>
                  {person.name} {person.number}{" "}
                  <button onClick={() => handleDelete(person.id)}>
                     delete
                  </button>
                  <br />
               </span>
            );
         })}
      </p>
   );
};

export default Persons;
