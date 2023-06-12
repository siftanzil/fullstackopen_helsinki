import { useEffect, useState } from "react";
// import services from "./services/country";
import data from "./services/data";

const App = () => {
   const [countries, setCountries] = useState([]);
   const [searched, setSearched] = useState([]);
   const [search, setSearch] = useState("");

   useEffect(() => {
      // services.getAll().then((response) => {
      //    console.log(response.data);
      //    setCountries(response.data);
      // });
      setCountries(data);
      console.log(countries[0]);
   }, []);

   const handleChange = (search) => {
      console.log(search);
      setSearch(search);
      setSearched(
         countries.filter((country) =>
            country.name.common.toLowerCase().includes(search),
         ),
      );
   };

   return (
      <div>
         <p>find countries</p>
         <input value={search} onChange={(e) => handleChange(e.target.value)} />
         {searched.length > 10 && (
            <p>Too many matches, specify another filter</p>
         )}
         {searched.length !== 1 &&
            searched.length <= 10 &&
            searched.map((country, key) => {
               return <p key={key}>{country.name.common}</p>;
            })}
         {searched.length === 1 &&
            searched.map((country, key) => {
               return (
                  <div key={key}>
                     <h1>{country.name.common}</h1>
                     <p>
                        capital {country.capital}
                        <br />
                        area {country.area}
                     </p>
                     <h3>languages</h3>
                     <ul>
                        {Object.keys(country.languages).map((key, index) => {
                           return <li key={index}>{country.languages[key]}</li>;
                        })}
                     </ul>
                     <img src={country.flags.png} alt="Logo" />
                  </div>
               );
            })}
      </div>
   );
};

export default App;
