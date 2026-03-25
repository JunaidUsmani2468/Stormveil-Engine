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
          className="sun-marker-wrapper"
          style={{ left: `${sunrisePercent}%` }}
        >
          <div className="sun-marker">
            <span/>
          </div>

          <div className="sun-label">
            <p>Sunrise</p>
            <p>{sunrise}</p>
          </div>
        </div>

        {/* Sunset marker */}
        <div
          className="sun-marker-wrapper"
          style={{ left: `${sunsetPercent}%` }}
        >
          <div className="sun-marker">
            <span/>
          </div>
          
          <div className="sun-label">
            <p>Sunset</p>
            <p>{sunset}</p>
          </div>
        </div>

        {/* Moving Sun */}
        <div
          className="sun-indicator"
          style={{ left: `${currentPercent}%` }}
        >
          {isDay ? <SunnyIcon style={{color: 'gold'}} /> : <BedtimeIcon style={{color: 'rgb(0, 195, 255)'}} />}
          <div className="sun-label current">
            <p>Time</p>
            <p>{cityTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunProgress;