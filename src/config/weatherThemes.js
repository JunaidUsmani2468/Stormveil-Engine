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
import defaultSound from "../assets/sounds/default.mp3";

// STORM SOUNDS
import stormSound from "../assets/sounds/storm/storm_base.mp3";
import lightning1 from "../assets/sounds/storm/lightning1_loud.mp3";
import lightning2 from "../assets/sounds/storm/lightning2_loud.mp3";
import lightning3 from "../assets/sounds/storm/lightning3_loud.mp3";

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
    sound: {
      base: stormSound,
      lightning: [
        lightning1,
        lightning2,
        lightning3
      ]
    },

    primary: "rgb(204, 0, 204)",
    accent: "rgb(200, 100, 255)",
    
    secondary: "rgb(120, 20, 140)",
    textPrimary: "#ffffff",
    textSecondary: "rgb(195, 0, 195)",

    border: "rgb(195, 0, 195)",

    overlay: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0) 50%,
        rgba(60,0,80,0.6) 100%
      )
    `,
    bgGradient: "linear-gradient(rgba(80, 15, 117, 0.4), rgba(0,0,0,0.7))",

    glow: "rgba(0, 0, 0, 0.6)",
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

    gradient: "linear-gradient(rgba(120,150,180,0.5), rgba(80,110,140,0.5))",
    textColor: "#ffffff",
    glowColor: "rgba(255, 223, 100, 0.8)",
  },

  // cloudy: {
  //   image: cloudyImg,
  //   icon: "cloudy",
  //   sound: cloudySound,

  //   gradient: "linear-gradient(rgba(180, 210, 255, 0.35), rgba(255, 240, 200, 0.25))",
  //   textColor: "#fdfaf3",
  //   glowColor: "rgba(255, 223, 120, 0.65)"
  // },

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