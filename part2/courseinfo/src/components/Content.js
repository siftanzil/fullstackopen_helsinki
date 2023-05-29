import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
   // console.log(parts);
   return (
      <>
         {parts.map((part, i) => (
            <Part {...part} key={Math.random(i)} />
         ))}
      </>
   );
};

export default Content;
