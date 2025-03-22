const apiKey = 'YOUR_API_KEY'; // Replace with OpenWeatherMap API key
const lat = 34.2746;
const lon = -119.2290;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const temp = Math.round(data.list[0].main.temp);
    const descriptions = data.list[0].weather.map(w =>
      w.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    ).join(', ');

    document.getElementById('current-temp').textContent = `Current Temp: ${temp}°F`;
    document.getElementById('weather-description').textContent = `Conditions: ${descriptions}`;

    const forecastContainer = document.getElementById('forecast');
    for (let i = 1; i <= 3; i++) {
      const forecast = data.list[i * 8];
      const day = new Date(forecast.dt_txt).toLocaleDateString(undefined, { weekday: 'long' });
      forecastContainer.innerHTML += `<p>${day}: ${Math.round(forecast.main.temp)}°F</p>`;
    }
  })
  .catch(err => console.error("Weather fetch error:", err));
