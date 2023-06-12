import axios from "axios";

const getWeather = async (city) => {
   const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${city}` },
      headers: {
         "X-RapidAPI-Key": process.env.REACT_APP_WEATHER_API_KEY,
         "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
   };

   try {
      const response = await axios.request(options);
      return response.data;
   } catch (error) {
      console.error(error);
   }
};

export default getWeather;
