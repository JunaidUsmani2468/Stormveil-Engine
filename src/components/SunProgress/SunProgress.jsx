import "./SunProgress.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';


function SunProgress({
    sunrisePercent,
    sunsetPercent,
    currentPercent,
    isDay,
    sunrise,
    sunset,
    cityTime
}) {
  console.log(cityTime, sunrise, sunset);
  
  return (
    <div className="sun-container">
      <div className="sun-track">
        
        {/* Sunrise marker */}
        <div
          className="sun-marker"
          style={{ left: `${sunrisePercent}%` }}
        >
            <span/>
            <p className="sun-label">{sunrise}</p>
        </div>

        {/* Sunset marker */}
        <div
          className="sun-marker"
          style={{ left: `${sunsetPercent}%` }}
        >
            <span/>
            <p className="sun-label">{sunset}</p>
        </div>

        {/* Moving Sun */}
        <div
          className="sun-indicator"
          style={{ left: `${currentPercent}%` }}
        >
            {isDay ? <SunnyIcon style={{color: 'gold'}} /> : <BedtimeIcon style={{color: 'rgb(0, 195, 255)'}} />}
            <p className="sun-label current">{cityTime}</p>
        </div>
      </div>
    </div>
  );
}

export default SunProgress;