import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'
import getWeatherTheme from "./utils/getWeatherTheme";
import weatherThemes from './config/weatherThemes';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

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
  // const theme = weatherThemes[themeName] || weatherThemes.default;
  const theme = weatherThemes.snow;
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
        <h1>
          Stormveil Engine 
          <ThunderstormIcon sx={{
            fontSize: '3rem',
            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))',
          }}/>
        </h1>
        <SearchBox updateWeather={updateWeather} />
        <WeatherCard weather={weatherInfo} theme={theme} />
      </div>
    </>
  )
}

export default App