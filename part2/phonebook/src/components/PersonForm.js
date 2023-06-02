import React from "react";

const PersonForm = ({
   newName,
   setNewName,
   newNumber,
   setNewNumber,
   addName,
}) => {
   return (
      <form onSubmit={addName}>
         <div>
            name:{" "}
            <input
               value={newName}
               onChange={(e) => {
                  setNewName(e.target.value);
               }}
            />
            <br />
            number:{" "}
            <input
               value={newNumber}
               onChange={(e) => {
                  setNewNumber(e.target.value);
               }}
            />
         </div>
         <div>
            <button type="submit">add</button>
         </div>
      </form>
   );
};

export default PersonForm;
