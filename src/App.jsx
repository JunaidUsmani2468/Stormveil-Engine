import { useState, useEffect } from 'react'
import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import WeatherCard from './components/WeatherCard/WeatherCard'
import getWeatherTheme from "./utils/getWeatherTheme";
import weatherThemes from './config/weatherThemes';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SoundToggle from "./components/SoundToggle/SoundToggle";
import { playSound, stopSound, playStormSound } from "./utils/soundManager";

const data = {
  country: "Jupiter 🚀",
  cityName: "Nowhere",
  condition: "chaos",
  isDay: false,
  feelsLike: "you don't search yet 😈 T°R°A°G°I",
  humidity: 999,
  sunrise: { formatted: "♾️" },
  sunset: { formatted: "♾️" },
  cityTime: { formatted: "♾️" },
  icon: "01n",
  temp: 999,
  windDeg: 0,
  windSpeed: 999,
  windDir: "404",
};

function App() {
  const [weatherInfo, setWeatherInfo] = useState(data);
  const [isSoundOn, setIsSoundOn] = useState(false);

  const themeName = getWeatherTheme(weatherInfo);
  const theme = weatherThemes[themeName];
  // const theme = weatherThemes.storm;

  let updateWeather = (result) => {
    setWeatherInfo(result);
  }

  useEffect(() => {
    if (isSoundOn && theme?.sound) {
      if (typeof theme.sound === "object") {
        playStormSound(theme.sound.base, theme.sound.lightning);
      } else {
        playSound(theme.sound);
      }
    } else {
      stopSound();
    }
  }, [theme, isSoundOn]);

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
        <SoundToggle isSoundOn={isSoundOn} setIsSoundOn={setIsSoundOn} />
      </div>
    </>
  )
}

export default App