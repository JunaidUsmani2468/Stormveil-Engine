import "./SunProgress.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SatelliteAltSharpIcon from '@mui/icons-material/SatelliteAltSharp';


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
          className={`sun-marker-wrapper ${cityTime === "♾️" ? "crazy" : ""}`}
          style={{ left: `${cityTime === "♾️" ? 25 : sunrisePercent }%` }}
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
          className={`sun-marker-wrapper ${cityTime === "♾️" ? "crazy" : ""}`}
          style={{ left: `${cityTime === "♾️" ? 75 : sunsetPercent}%` }}
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
          className={`sun-indicator ${cityTime === "♾️" ? "crazy" : ""}`}
          style={{ left: `${currentPercent}%` }}
        >
          {isDay ?
            <SunnyIcon className="sun" style={{color: 'gold'}} /> :
            cityTime === '♾️' ?
            <SatelliteAltSharpIcon className="satellite" style={{color: 'purple'}}/> :
            <BedtimeIcon className="moon" style={{color: 'rgb(0, 195, 255)'}}
          />}
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