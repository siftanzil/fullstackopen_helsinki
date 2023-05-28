import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
   //    console.log("g - " + good + ", n - " + neutral + ", b - " + bad);
   let all = good + neutral + bad;
   //    console.log(all);
   let average = (good * 1 + neutral * 0 + bad * -1) / all;
   //    console.log(average);
   let positive = (good / all) * 100;
   //    console.log(positive);

   return (
      <div>
         <h1>statistics</h1>

         {all ? (
            <p>
               <StatisticLine text={"good"} value={good} />
               <StatisticLine text={"neutral"} value={neutral} />
               <StatisticLine text={"bad"} value={bad} />
               <StatisticLine text={"all"} value={all} />
               <StatisticLine text={"average"} value={average} />
               <StatisticLine text={"positive"} value={positive} />
            </p>
         ) : (
            <p>No feedback given</p>
         )}
      </div>
   );
};

export default Statistics;
