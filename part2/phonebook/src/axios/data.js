import { useEffect } from "react";
import axios from "axios";

export const Data = () => {
   useEffect(() => {
      console.log("effect");

      const eventHandler = (response) => {
         console.log("promise fulfilled");
      };

      axios.get("http://localhost:3001/persons").then((response) => {
         console.log("promise fulfilled");
         let persons = response.data;
         return persons;
      });
   }, []);
};

export default Data;
