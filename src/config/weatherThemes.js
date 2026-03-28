// IMAGES
import hotImg from "../assets/images/hot.jpg";
import coldImg from "../assets/images/cold.jpg";
import snowImg from "../assets/images/snow.jpg";
import cloudyImg from "../assets/images/cloudy.avif";
import fogImg from "../assets/images/fog.jpg";
import rainImg from "../assets/images/rain.jpg";
import stormImg from "../assets/images/storm.avif";
import defaultImg from "../assets/images/default.avif";

// SOUNDS
import hotSound from "../assets/sounds/hot.mp3";
import coldSound from "../assets/sounds/cold.mp3";
import snowSound from "../assets/sounds/snow.mp3";
import cloudySound from "../assets/sounds/cloudy.mp3";
import fogSound from "../assets/sounds/fog.mp3";
import rainSound from "../assets/sounds/rain.mp3";
import stormSound from "../assets/sounds/rain.mp3";
import defaultSound from "../assets/sounds/default.mp3";

const weatherThemes = {
  hot: {
    image: hotImg,
    icon: 'sun',
    sound: hotSound,

    gradient: "linear-gradient(rgba(255,140,0,0.3), rgba(255,69,0,0.4))",
    textColor: "#ffc1b9",
    glowColor: "rgba(255, 140, 0, 0.93)"
  },

  cold: {
    image: coldImg,
    icon: 'cold',
    sound: coldSound,

    gradient: "linear-gradient(rgba(0, 123, 255, 0.2), rgba(0, 0, 139, 0.3))",
    textColor: "#ffffff",
    glowColor: "rgba(0, 0, 0, 0.9)"
  },

  rain: {
    image: rainImg,
    icon: "rain",
    sound: rainSound,
    
    gradient: "linear-gradient( rgba(47, 142, 61, 0.3), rgba(103, 72, 181, 0.4))",
    textColor: "#b2e7ff",
    glowColor: "rgba(33, 155, 255, 0.9)"
  },

  snow: {
    image: snowImg,
    icon: "snow",
    sound: snowSound,

    gradient: "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
    textColor: "#ffffff",
    glowColor: "#7bd5ff",
  },

  storm: {
    image: stormImg,
    icon: "storm",
    sound: stormSound,

    gradient: "linear-gradient(rgba(80, 15, 117, 0.4), rgba(0,0,0,0.7))",
    textColor: "rgba(255, 0, 255, 0.9)",
    glowColor: "rgba(0, 0, 0, .8)"
  },

  fog: {
    image: fogImg,
    icon: "fog",
    sound: fogSound,

    gradient: "linear-gradient(rgba(200,200,200,0.2), rgba(223, 102, 27, 0.1))",
    textColor: "#ffffff",
    glowColor: "rgba(255, 55, 0, 0.9)"
  },

  cloudy: {
    image: cloudyImg,
    icon: "cloudy",
    sound: cloudySound,

    gradient: "linear-gradient(rgba(120,150,180,0.7), rgba(80,110,140,0.8))",
    textColor: "#fff0e7",
    glowColor: "rgba(205, 134, 80, 0.7)"
  },

  default: {
    image: defaultImg,
    icon: "default",
    sound: defaultSound,
    
    gradient: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
    textColor: "#ffffff",
    glowColor: "rgba(0,0,0,0.8)"
  },
};

export default weatherThemes;