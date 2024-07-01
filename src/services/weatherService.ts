import { Weather, WeatherType } from "../models/Weather";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getWeather = async (cityName: string): Promise<WeatherType> => {
  const response = await fetch(
    `${BASE_URL}?access_key=${API_KEY}&query=${cityName}`
  );
  const data = await response.json();
  console.log(data);
  

  if (data.error) {
    throw new Error(data.error.info);
  }

  const city: string = data.location.name;
  const temperature: number = data.current.temperature;
  const description: string = data.current.weather_descriptions[0];
  const icon: string = data.current.weather_icons[0];
  const moreInfoUrl: string = `https://weatherstack.com/${city}`;

  return new Weather(city, temperature, description, icon, moreInfoUrl);
};
