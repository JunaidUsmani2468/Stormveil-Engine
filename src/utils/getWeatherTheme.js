export default function getWeatherTheme(weather) {
  const condition = weather.condition.toLowerCase();
  const temp = weather.temp;
  const humidity = weather.humidity;
  const windSpeed = weather.windSpeed;

  if (condition.includes("thunderstorm") || windSpeed > 15) {
    return "storm";
  }

  if (condition.includes("snow") || temp < -5) {
    return "snow";
  }

  if (condition.includes("mist") || condition.includes("fog") || condition.includes("haze")) {
    return "fog";
  }

  if (condition.includes("rain") || condition.includes("drizzle") || humidity >= 80) {
    return "rain";
  }

  if (temp >= 30) {
    return "hot";
  }

  if (temp >= -5 && temp <= 10 && humidity < 80) {
    return "cold";
  }

  if (condition.includes("overcast") || condition.includes("broken clouds")) {
    return "cloudy";
  }

  return "default";
}