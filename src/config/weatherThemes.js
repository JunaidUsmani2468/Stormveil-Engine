import hotImg from "../assets/images/hot.jpg";
import coldImg from "../assets/images/cold.jpg";
import snowImg from "../assets/images/snow.jpg";
import defaultImg from "../assets/images/default.avif";
import cloudyImg from "../assets/images/cloudy.avif";
import fogImg from "../assets/images/fog.jpg";
import rainImg from "../assets/images/rain.jpg";
import stormImg from "../assets/images/storm.avif";

const weatherThemes = {
  hot: {
    image: hotImg,
    gradient: "linear-gradient(rgba(255,140,0,0.5), rgba(255,69,0,0.5))",
    icon: 'sun',
    textColor: "#7c1f13",
    glowColor: "rgba(255,140,0,0.9)"
  },

  cold: {
    image: coldImg,
    gradient: "linear-gradient(rgba(0,123,255,0.5), rgba(0,0,139,0.8))",
    icon: 'cold',
    textColor: "#ffffff",
    glowColor: "rgba(0, 0, 0, 0.9)"
  },

  rain: {
    image: rainImg,
    gradient: "linear-gradient( rgba(47, 142, 61, 0.3), rgba(103, 72, 181, 0.4))",
    icon: "rain",
    textColor: "#b2e7ff",
    glowColor: "rgba(33, 155, 255, 0.9)"
  },

  snow: {
    image: snowImg,
    gradient: "linear-gradient(rgba(200,220,255,0.8), rgba(148, 125, 211, 0.5))",
    icon: "snow",
    textColor: "#ffffff",
    glowColor: "rgba(255, 213, 98, 0.7)"
  },

  storm: {
    image: stormImg,
    gradient: "linear-gradient(rgba(80, 15, 117, 0.6), rgba(0,0,0,0.7))",
    icon: "storm",
    textColor: "#e437ff",
    glowColor: "rgba(255, 255, 255, 0.6)"
  },

  fog: {
    image: fogImg,
    gradient: "linear-gradient(rgba(200,200,200,0.5), rgba(223, 102, 27, 0.4))",
    icon: "fog",
    textColor: "#ffffff",
    glowColor: "rgba(255, 55, 0, 0.9)"
  },

  cloudy: {
    image: cloudyImg,
    gradient: "linear-gradient(rgba(120,150,180,0.7), rgba(80,110,140,0.8))",
    icon: "cloudy",
    textColor: "#fff0e7",
    glowColor: "rgba(205, 134, 80, 0.7)"
  },

  default: {
    image: defaultImg,
    gradient: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
    icon: "default",
    textColor: "#ffffff",
    glowColor: "rgba(0,0,0,0.6)"
  },
};

export default weatherThemes;