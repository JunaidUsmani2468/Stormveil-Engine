const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
    const data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const jsonData = await data.json();

    if (jsonData.cod !== 200) {
        throw new Error("City not found");
    }

    function formatTime(timestamp, timezone) {
        const date = new Date((timestamp + timezone) * 1000);
        return date.toUTCString().slice(17, 22); // HH:MM format
    }

    const getWindDirection = (deg) => {
        const directions = ["North","North/East","East","South/East","South","South/West","West","North/West"];
        return directions[Math.round(deg / 45) % 8];
    };

    const result = {
        cityName: jsonData.name,
        country: jsonData.sys.country,

        temp: Math.round(jsonData.main.temp),
        feelsLike: Math.round(jsonData.main.feels_like),

        humidity: jsonData.main.humidity,
        pressure: jsonData.main.pressure,
        
        condition: jsonData.weather[0].description,
        icon: jsonData.weather[0].icon,

        windSpeed: jsonData.wind.speed,
        windDeg: jsonData.wind.deg,
        windDir: getWindDirection(jsonData.wind.deg),

        sunrise: formatTime(jsonData.sys.sunrise, jsonData.timezone),
        sunset: formatTime(jsonData.sys.sunset, jsonData.timezone),

        isDay: jsonData.weather[0].icon.includes("d"),
    }

    return result;
}