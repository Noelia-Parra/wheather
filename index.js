function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".form-control");
  let span = document.querySelector("span");
  if (searchInput.value) {
    span.innerHTML = `${searchInput.value}`;
    searchCity(searchInput.value);
  } else {
    span.innerHTML = null;
    alert("Please type a city");
  }
}
function searchCity(city) {
  let apiKey = "efdb90508378d538c76c3382a5e5f2bb";
  let urlKey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(`${urlKey}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature}`;
}
searchCity("Madrid");

