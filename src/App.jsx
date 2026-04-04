import { useState, useEffect } from 'react'
import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import WeatherCard from './components/WeatherCard/WeatherCard'
import getWeatherTheme from "./utils/getWeatherTheme";
import weatherThemes from './config/weatherThemes';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SoundToggle from "./components/SoundToggle/SoundToggle";
import ExperimentalBtn from './components/ExperimentalBtn/ExperimentalBtn';
import ExperimentalPanel from './components/ExperimentalPanel/ExperimentalPanel';
import { experimentalWeather } from './data/experimentalWeather';
import { playSound, stopSound, playStormSound } from "./utils/soundManager";

const data = {
  country: "Universe",
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
  const [isExperimentalOpen, setIsExperimentalOpen] = useState(false);
  const [forcedTheme, setForcedTheme] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isExperimentalMode = !!forcedTheme;

  const themeName = forcedTheme || getWeatherTheme(weatherInfo);
  const theme = weatherThemes[themeName];

  let updateWeather = (result) => {
    setForcedTheme(null);
    setWeatherInfo(result);
  }

  const handleExperimentalSelect = (themeKey) => {
    setWeatherInfo(experimentalWeather[themeKey]);
    setForcedTheme(themeKey); // 💥 override theme
    setIsExperimentalOpen(false);
  };

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
        <SearchBox
          updateWeather={updateWeather}
          theme={theme}
          isMobile={isMobile}
          isOpen={isExperimentalOpen} 
          onClick={() => setIsExperimentalOpen(true)}
        />
        <WeatherCard
          weather={weatherInfo}
          theme={theme}
          isExperimental={isExperimentalMode}
          isMobile={isMobile}
          isSoundOn={isSoundOn}
          setIsSoundOn={setIsSoundOn}
        />
        {!isMobile && (
          <>
            <SoundToggle
              isSoundOn={isSoundOn}
              setIsSoundOn={setIsSoundOn}
            />
            <ExperimentalBtn
              isOpen={isExperimentalOpen} 
              onClick={() => setIsExperimentalOpen(true)}
            />
          </>
        )}
        <ExperimentalPanel
          isOpen={isExperimentalOpen}
          onClose={() => setIsExperimentalOpen(false)}
          onSelect={handleExperimentalSelect}
        />
      </div>
    </>
  )
}

export default App