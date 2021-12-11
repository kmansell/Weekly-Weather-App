function showTemp(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#synopsis");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=0f30e5290972eab7b9c525cbd0acc84b&units=metric";

axios.get(apiURL).then(showTemp);
