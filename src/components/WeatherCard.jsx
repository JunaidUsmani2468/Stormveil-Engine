import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div className='condition'>
                            <img src={weather.icon} alt="weather icon" />
                            <p>{weather.condition}</p>
                        </div>
                        {/* <p className='icon'>{iconMap[theme.icon]}</p> */}
                        <p className='temp'>{weather.temp}&deg;C</p>
                        <p>Humidity = {weather.humidity}</p>
                        <p>The Weather feels like = {weather.feelsLike}&deg;C</p>
                        <p>Wind Speed = {weather.windSpeed} m/s</p>
                        <p>Wind Direction = {weather.windDeg}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}