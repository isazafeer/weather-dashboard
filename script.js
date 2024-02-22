function getWeather () {
    const apiKey ='a8cd28286c4410694c1afe25449f53d9';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = '';

    const forecastUrl = '';
}

    // Displays a message in the console if there is an error // 

function getWeather() {
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetchting current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });
}

function getWeather() {
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data);
        })
        .catch(error => {
            console.error('Error fetchting hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

    // Display weather on main page //

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';
}