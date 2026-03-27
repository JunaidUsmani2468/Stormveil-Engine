import { useState } from "react";
import { playSound, stopSound } from "../../utils/soundManager";
import defaultSound from "../../assets/sounds/default.mp3";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import './SoundToggle.css';

export default function SoundToggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    if (isOn) {
      stopSound();
    } else {
      playSound(defaultSound);
    }

    setIsOn(!isOn);
  };

  return (
    <button
      className={`btn-container ${isOn ? "active" : ""}`}
      onClick={handleToggle}
    >
      {isOn ? <VolumeUpIcon className="sounnd-btn" /> : <VolumeOffIcon className="sounnd-btn" /> }
    </button>
  );
}