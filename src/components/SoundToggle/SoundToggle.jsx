import { useState } from "react";
import { playSound, stopSound } from "../../utils/soundManager";
import defaultSound from "../../assets/sounds/default.mp3";
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
    <button onClick={handleToggle}>
      {isOn ? "🔊 Sound On" : "🔇 Sound Off"}
    </button>
  );
}