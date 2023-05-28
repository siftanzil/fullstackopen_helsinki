import React from "react";

const Total = ({ part1, part2, part3 }) => {
   // console.log(part1);
   // console.log(part2);
   // console.log(part3);
   return (
      <p>
         Number of exercises{" "}
         {part1.exercises + part2.exercises + part3.exercises}
      </p>
   );
};

export default Total;
