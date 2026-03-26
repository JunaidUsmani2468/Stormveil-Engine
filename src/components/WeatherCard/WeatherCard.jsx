import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Compass from '../Compass/Compass';
import { getSunProgress } from "../../utils/sunProgress";
import SunProgress from "../SunProgress/SunProgress";
import './WeatherCard.css';

// ICONS
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BlurOnIcon from "@mui/icons-material/BlurOn";

const weatherVisual = {
  sun: { icon: <WbSunnyIcon />, text: "bright and sunny" },
  cold: { icon: <AcUnitIcon />, text: "cold and crisp" },
  snow: { icon: <SevereColdIcon />, text: "snowy and freezing" },
  rain: { icon: <WaterDropIcon />, text: "cool and rainy" },
  storm: { icon: <ThunderstormIcon />, text: "stormy and intense" },
  fog: { icon: <BlurOnIcon />, text: "foggy and low visibility" },
  cloudy: { icon: <CloudIcon />, text: "cloudy and calm" },
  default: { icon: <WbSunnyIcon />, text: "clear and pleasant" },
};

export default function WeatherCard({weather, theme}) {

    const sunData = getSunProgress({
        sunrise: weather.sunrise.raw,
        sunset: weather.sunset.raw,
        timezone: weather.timezone
    });

    console.log(sunData);

    return (
        <div>
            <Card
                sx={{
                    width: 350,
                    position: 'relative',
                }}
            >
                <div style={{position: 'relative'}}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={theme.image}
                        title="img"
                    />
                    <div className="mediaOverlay"></div>
                </div>
                <CardContent sx={{padding: '15px !important', paddingTop: '10px !important'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        <h2 className='cityName'>{weather.cityName}</h2>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black' }} component={"span"}>
                        <div className='condition'>
                            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather icon" />
                            <p>{weather.condition}</p>
                        </div>
                        <p className='temp'>{weather.temp}&deg;C</p>
                        <p className='para'>
                            In {weather.cityName}, {weather.country !== '' ? `${weather.country}, ` : '' }
                            the weather is {weatherVisual[theme.icon].text} with {weather.condition}.
                            It feels like {weather.feelsLike}°C with humidity at {weather.humidity}%.
                        </p>
                        <SunProgress
                            sunrisePercent={sunData.sunrisePercent}
                            sunsetPercent={sunData.sunsetPercent}
                            currentPercent={sunData.currentPercent}
                            isDay={sunData.isDayProgress}
                            sunrise={weather.sunrise.formatted}
                            sunset={weather.sunset.formatted}
                            cityTime={weather.cityTime.formatted}
                        />
                        {/* <p>Pressure: {weather.pressure} hPa</p> */}
                        {/* <p>{weatherVisual[theme.icon].icon}</p> */}
                        <div className='wind'>
                            <div>
                                <p>Wind Speed</p>
                                <p>{weather.windSpeed} m/s</p>
                            </div>
                            <Compass deg={weather.windDeg} cityName={weather.cityName} />
                            <div>
                                <p>Wind Direction</p>
                                <p>{weather.windDir}</p>
                            </div>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}