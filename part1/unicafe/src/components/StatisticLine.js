import React from "react";

const StatisticLine = ({ text, value }) => {
   return (
      <>
         <td>{text}</td>
         <td>
            {value} {text === "positive" && " %"}
         </td>
      </>
   );
};

export default StatisticLine;
