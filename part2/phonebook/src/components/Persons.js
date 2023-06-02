import React from "react";

const Persons = ({ filteredPersons }) => {
   return (
      <p>
         {filteredPersons.map((person, i) => {
            return (
               <span key={i}>
                  {person.name} {person.number}
                  <br />
               </span>
            );
         })}
      </p>
   );
};

export default Persons;
