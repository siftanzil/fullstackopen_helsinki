import React from "react";

const StatisticLine = ({ text, value }) => {
   return (
      <>
         {text} {value} {text === "positive" && " %"}
         <br />
      </>
   );
};

export default StatisticLine;
