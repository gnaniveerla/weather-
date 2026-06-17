const apiKey = "be07e21036845ad5fad1c6153e2217d0";

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        document.getElementById("result").innerHTML =
            "<p>Please enter a city name.</p>";
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod == "404") {
            document.getElementById("result").innerHTML =
                "<p>City not found.</p>";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <hr>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

    } catch (error) {

        document.getElementById("result").innerHTML =
            "<p>Error fetching weather data.</p>";

        console.log(error);
    }
}