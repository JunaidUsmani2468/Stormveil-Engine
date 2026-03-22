import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Compass from './compass';
import './WeatherCard.css';

// ICONS
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BlurOnIcon from "@mui/icons-material/BlurOn";

const iconMap = {
  sun: <WbSunnyIcon />,
  cold: <AcUnitIcon />,
  snow: <SevereColdIcon />,
  rain: <WaterDropIcon />,
  storm: <ThunderstormIcon />,
  fog: <BlurOnIcon />,
  cloudy: <CloudIcon />,
  default: <WbSunnyIcon />,
};

export default function WeatherCard({weather, theme}) {

    let mood;

    if (weather.temp <= -5) mood = "extremely cold 🧊";
    else if (weather.temp <= 10) mood = "quite cold ❄️";
    else if (weather.temp <= 25) mood = "pleasant 🌿";
    else if (weather.temp <= 35) mood = "warm ☀️";
    else mood = "very hot 🔥";

    return (
        <div>
            <Card
                sx={{
                    width: 350,
                    boxShadow: '8px 8px 20px rgba(0,0,0,0.4)',
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
                <CardContent>
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
                            {weather.cityName} feels {mood} right now with {weather.condition}.
                            The temperature is {weather.temp}°C (feels like {weather.feelsLike}°C).
                        </p>
                        {/* <p className='icon'>{iconMap[theme.icon]}</p> */}
                        <p>Humidity : {weather.humidity}%</p>
                        <div className='wind'>
                            <div>
                                <p>Wind Speed : {weather.windSpeed} m/s</p>
                                <p>Wind Direction : {weather.windDir}</p>
                            </div>
                            <Compass deg={weather.windDeg} />
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}