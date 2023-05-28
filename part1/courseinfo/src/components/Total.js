import React from "react";

const Total = ({ props }) => {
   console.log(props);
   return (
      <p>Number of exercises {props.reduce((sum, prop) => (sum += prop))}</p>
   );
};

export default Total;
