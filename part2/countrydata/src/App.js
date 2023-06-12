import { useEffect, useState } from "react";
import services from "./services/country";
import getWeather from "./services/weather";
// import data from "./services/data";
// import dummyWeather from "./services/dummyWeather";

const App = () => {
   const [countries, setCountries] = useState([]);
   const [searched, setSearched] = useState([]);
   const [search, setSearch] = useState("");
   const [capital, setCapital] = useState("Dhaka");
   const [weather, setWeather] = useState({
      current: {
         temp_c: " ",
         condition: {
            text: " ",
            icon: " ",
         },
         wind_kph: " ",
      },
   });

   useEffect(() => {
      services.getAll().then((response) => {
         // console.log(response.data);
         setCountries(response.data);
      });
   }, []);

   useEffect(() => {
      getWeather(capital).then((response) => {
         // console.log(response);
         setWeather(response);
      });
   }, [capital]);

   const handleChange = (search) => {
      let searched = countries.filter((country) =>
         country.name.common.toLowerCase().includes(search),
      );
      setSearch(search);
      setSearched(searched);
      if (searched.length === 1) setCapital(searched[0].capital);
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
            searched.map((country) => {
               return (
                  <>
                     <p key={country.name.common}>
                        {country.name.common}
                        <button
                           value={country}
                           onClick={() => {
                              setSearched([country]);
                              setCapital(country.capital);
                           }}>
                           show
                        </button>{" "}
                     </p>
                  </>
               );
            })}

         {searched.length === 1 && (
            <div>
               <h1>{searched[0].name.common}</h1>
               <p>
                  capital {searched[0].capital}
                  <br />
                  area {searched[0].area}
               </p>
               <h3>languages</h3>
               <ul>
                  {Object.keys(searched[0].languages).map((key, index) => {
                     return <li key={index}>{searched[0].languages[key]}</li>;
                  })}
               </ul>
               <img src={searched[0].flags.png} alt="Logo" />
               <h2>Weather in {searched[0].capital}</h2>
               {weather && (
                  <div>
                     <p>temperature {weather.current.temp_c} Celcius</p>
                     <img src={weather.current.condition.icon} alt="logo" />
                     <p>wind {weather.current.wind_kph} km/h</p>
                  </div>
               )}
            </div>
         )}
      </div>
   );
};

export default App;
