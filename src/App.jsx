import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'
import getWeatherTheme from "./utils/getWeatherTheme";
import weatherThemes from './config/weatherThemes';

const data = {
  cityName: "Delhi",
  condition: "clear sky",
  feelsLike: 29,
  humidity: 19,
  icon: "https://openweathermap.org/img/wn/02d@2x.png",
  temp: 31,
  windDeg: 168,
  windSpeed: 3.99,
}

function App() {
  const [weatherInfo, setWeatherInfo] = useState(data);

  const themeName = getWeatherTheme(weatherInfo);
  console.log(themeName);
  const theme = weatherThemes[themeName] || weatherThemes.default;
  console.log(theme);

  let updateWeather = (result) => {
    setWeatherInfo(result);
  }

  return (
    <>
      <div
        className="app"
        style={{
          "--bg-image": `url(${theme.image})`,
          "--gradient": theme.gradient,
        }}
      >
        <SearchBox updateWeather={updateWeather} />
        <WeatherCard weather={weatherInfo} theme={theme} />
      </div>
    </>
  )
}

export default App