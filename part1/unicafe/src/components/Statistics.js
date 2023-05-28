import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
   //    console.log("g - " + good + ", n - " + neutral + ", b - " + bad);
   let all = good + neutral + bad;
   //    console.log(all);
   let average = ((good * 1 + neutral * 0 + bad * -1) / all).toFixed(1);
   //    console.log(average);
   let positive = ((good / all) * 100).toFixed(1);
   //    console.log(positive);

   return (
      <div>
         <h1>statistics</h1>

         {all ? (
            <table>
               <tbody>
                  <tr>
                     <StatisticLine text={"good"} value={good} />
                  </tr>
                  <tr>
                     <StatisticLine text={"neutral"} value={neutral} />
                  </tr>
                  <tr>
                     <StatisticLine text={"bad"} value={bad} />
                  </tr>
                  <tr>
                     <StatisticLine text={"all"} value={all} />
                  </tr>
                  <tr>
                     <StatisticLine text={"average"} value={average} />
                  </tr>
                  <tr>
                     <StatisticLine text={"positive"} value={positive} />
                  </tr>
               </tbody>
            </table>
         ) : (
            <p>No feedback given</p>
         )}
      </div>
   );
};

export default Statistics;
