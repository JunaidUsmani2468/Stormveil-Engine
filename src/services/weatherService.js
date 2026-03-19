const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
    const data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const jsonData = await data.json();

    if (jsonData.cod !== 200) {
        throw new Error("City not found");
    }

    const icon = jsonData.weather[0].icon;

    const result = {
        cityName: jsonData.name,
        temp: Math.round(jsonData.main.temp),
        humidity: jsonData.main.humidity,
        feelsLike: Math.round(jsonData.main.feels_like),
        condition: jsonData.weather[0].description,
        windSpeed: jsonData.wind.speed,
        windDeg: jsonData.wind.deg,
        icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    }

    return result;
}