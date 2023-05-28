import { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";

const App = () => {
   // save clicks of each button to its own state
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   const handleGoodClick = () => {
      setGood(good + 1);
      // console.log(good);
   };
   const handleNeutralClick = () => {
      setNeutral(neutral + 1);
      // console.log(neutral);
   };
   const handleBadClick = () => {
      setBad(bad + 1);
      // console.log(bad);
   };

   return (
      <div>
         <Header />
         <div>
            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral </button>
            <button onClick={handleBadClick}>bad</button>
         </div>
         <Stats good={good} bad={bad} neutral={neutral} />
      </div>
   );
};

export default App;
