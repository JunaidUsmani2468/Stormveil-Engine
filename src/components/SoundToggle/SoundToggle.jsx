import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import './SoundToggle.css';

export default function SoundToggle({ isSoundOn, setIsSoundOn }) {

  return (
    <button
      className={`btn-container ${isSoundOn ? "active" : ""}`}
      onClick={() => setIsSoundOn(prev => !prev)}
    >
      {isSoundOn ? <VolumeUpIcon className="sounnd-btn" /> : <VolumeOffIcon className="sounnd-btn" /> }
    </button>
  );
}