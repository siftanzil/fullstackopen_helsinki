import React from "react";
import Part from "./Part";

const Content = (props) => {
   // console.log(props);
   return (
      <>
         <Part {...props.parts[0]} />
         <Part {...props.parts[1]} />
         <Part {...props.parts[2]} />
      </>
   );
};

export default Content;
