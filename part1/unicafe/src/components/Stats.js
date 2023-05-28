import React from "react";

const Stats = ({ good, neutral, bad }) => {
   //    console.log("g - " + good + ", n - " + neutral + ", b - " + bad);

   return (
      <div>
         <h1>statistics</h1>
         <p>good {good}</p>
         <p>neutral {neutral}</p>
         <p>bad {bad}</p>
      </div>
   );
};

export default Stats;
