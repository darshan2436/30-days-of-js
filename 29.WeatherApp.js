const city = document.querySelector("#city");
const apiKey = "2217089fbd96a485bee7f1fbbb934240";
const weatherDataEl = document.querySelector(".weather-data");
const formEl = document.querySelector("form");

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const cityVal = city.value;
    getData(cityVal);
})


async function getData(city){
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if(!response.ok){
        throw new Error("Network Response Was Not Ok");
    }
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
        `Feels like: ${data.main.feels_like}`,
        `Humidity: ${data.main.humidity}%`,
        `Wind Speed:${data.wind.speed}m/s`
    ]
    weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather's icon">`;
    weatherDataEl.querySelector(".temperature").innerHTML = `${temperature}°C`;
    weatherDataEl.querySelector(".description").innerHTML = `${description}`;
    weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").innerHTML = "";
        weatherDataEl.querySelector(".description").innerHTML = `An error happened, try again later`;
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}