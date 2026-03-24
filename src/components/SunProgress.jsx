import "./sunProgress.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';


function SunProgress({ sunrisePercent, sunsetPercent, currentPercent, isDay }) {
  return (
    <div className="sun-container">
      <div className="sun-track">
        
        {/* Sunrise marker */}
        <div
          className="sun-marker"
          style={{ left: `${sunrisePercent}%` }}
        >
            <span/>
        </div>

        {/* Sunset marker */}
        <div
          className="sun-marker"
          style={{ left: `${sunsetPercent}%` }}
        >
            <span/>
        </div>

        {/* Moving Sun */}
        <div
          className="sun-indicator"
          style={{ left: `${currentPercent}%` }}
        >
            {isDay ? <SunnyIcon style={{color: 'gold'}} /> : <BedtimeIcon style={{color: 'rgb(0, 195, 255)'}} />}
        </div>
      </div>
    </div>
  );
}

export default SunProgress;