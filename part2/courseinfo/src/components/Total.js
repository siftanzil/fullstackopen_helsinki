import React from "react";

const Total = ({ parts }) => {
   // console.log(parts);
   return (
      <p>
         <b>
            total of {parts.reduce((sum, part) => (sum += part.exercises), 0)}{" "}
            exercises
         </b>
      </p>
   );
};

export default Total;
