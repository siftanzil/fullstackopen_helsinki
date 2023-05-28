import React from "react";

const Stats = ({ good, neutral, bad }) => {
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
         <p>
            good {good}
            <br />
            neutral {neutral}
            <br />
            bad {bad}
            <br />
            all {all}
            <br />
            average {average ? average : 0}
            <br />
            positive {positive ? positive : 0} %
         </p>
      </div>
   );
};

export default Stats;
