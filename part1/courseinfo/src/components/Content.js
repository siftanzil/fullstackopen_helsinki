import React from "react";
import Part from "./Part";

const Content = (props) => {
   // console.log(props);
   return (
      <>
         <Part {...props.part1} />
         <Part {...props.part2} />
         <Part {...props.part3} />
      </>
   );
};

export default Content;
