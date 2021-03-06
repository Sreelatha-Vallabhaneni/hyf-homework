const API_KEY = "83c8eb465eeda9a497ff8013c1364722";
//First call to the weather api
/*const copenhagenWeatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=" +
  API_KEY;*/
//Fetch weather data from a city

function fetchJSON(url) {
  return fetch(url).then(response => response.json());
}

document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("input").value.toLowerCase();
  const ROOT_URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input +
    "&appid=" +
    API_KEY;
  if (input) {
    fetchJSON(ROOT_URL,/* for allowing map { mode: 'no-cors'}*/).then(json =>
      renderWeatherDetails(json)
    );
  } else if (input === "") {
    document.querySelector(".message").textContent = "Please enter city name";
  }
});

function renderWeatherDetails(json) {
  document.querySelector(".message").textContent = `City Name: ${json.name}`; // choosen city
  //temperature
  const temperature = document.querySelector(".temperature");
  temperature.textContent = Math.round(json.main.temp - 273.15) + "°C";
  // Icon for the weather type
  document.querySelector("img").src =
    "http://openweathermap.org/img/wn/" + json.weather[0].icon + ".png";
  document.querySelector(".icon-reltd-info").textContent =
    json.weather[0].description;
  //wind speed
  document.querySelector(".wind-speed").textContent =
    "Wind Speed:" + " " + json.wind.speed + "m/s";
  //How clowdy it is
  document.querySelector(".how-cloudy").textContent =
    "clouds:" + " " + json.clouds.all + "%";
  //When sunrise and sunset is
  document.querySelector(".sunrise").textContent = `Sunrise: ${new Date(
    json.sys.sunrise * 1000
  ).toLocaleTimeString()}`;
  document.querySelector(".sunset").textContent = `Sunset: ${new Date(
    json.sys.sunset * 1000
  ).toLocaleTimeString()}`;
  //Optional a map showing where the city is located
  function renderLocationOnGoogleMap() {  
    const mapDiv = document.getElementById("map");
    mapDiv.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="650" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=${json.name}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>`;
    // const mapDiv = document.getElementById("map");
    // const map = new google.maps.Map(mapDiv, {     
    //   center: { lat, lng },
    //   zoom: 11
    // });
    // const marker = new google.maps.Marker({
    //   //my time to create unique feature
    //   position: { lat, lng },
    //   map: map,
    //   // zoom: 10,
    //   label: {
    //     color: "darkblue",
    //     fontWeight: "bold",
    //     fontSize: "24px",
    //     text: `${Math.round(json.main.temp - 273.15) + "°C"}`
    //   }
    // });
    // console.log(map);
  }
  renderLocationOnGoogleMap()
  // json.coord.lat, json.coord.lon
  //Save my location optional - when enter city name and click button
  saveLocation(json);
}
//Save my location optional
const saveLocation = json => {
  localStorage.setItem("City", json.name);
  localStorage.setItem("Country", json.sys.country);
  //location.reload();
};
//Use my current position optional
document.querySelector(".btn2").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const BASE_URL =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      API_KEY;
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => renderWeatherDetails(json))
      //Save my location optional - when click the current position button
      .then(data => {
        localStorage.setItem("City", data.name);
        localStorage.setItem("Country", data.sys.country);
        //location.reload();
      });
  });
  document.querySelector("input").value = " ";    
});
