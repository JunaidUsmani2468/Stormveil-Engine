import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'
import getWeatherTheme from "./utils/getWeatherTheme";
import weatherThemes from './config/weatherThemes';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const data = {
  country: "IN",
  cityName: "Delhi",
  condition: "clear sky",
  feelsLike: 29,
  humidity: 19,
  icon: "02d",
  temp: 31,
  windDeg: 168,
  windSpeed: 3.99,
  windDir: 'South',
}

function App() {
  const [weatherInfo, setWeatherInfo] = useState(data);

  const themeName = getWeatherTheme(weatherInfo);
  const theme = weatherThemes[themeName];
  // const theme = weatherThemes.storm;

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
          "--text-color": theme.textColor,
          "--glow-color": theme.glowColor,
        }}
      >
        <h1>
          Stormveil Engine 
          <span className="app-icon">
            <ThunderstormIcon />
          </span>
        </h1>
        <SearchBox updateWeather={updateWeather} theme={theme} />
        <WeatherCard weather={weatherInfo} theme={theme} />
      </div>
    </>
  )
}

export default App