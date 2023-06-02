import React from "react";

const Filter = ({ filterPersons }) => {
   console.log();
   return (
      <div>
         filter shown with
         <input
            onChange={(e) => {
               filterPersons(e.target.value);
            }}
         />
      </div>
   );
};

export default Filter;
