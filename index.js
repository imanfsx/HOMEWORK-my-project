//Feature #1 Week 4
function formatDate(date) {
  let day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hour}:${minutes}`;
}

//Feature #2 Week 4
function citySearch(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#search-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${citySearchInput.value}`;
}

let formCity = document.querySelector("#search-form");
formCity.addEventListener("submit", citySearch);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);

// Default Provided
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// Capitalise the City to Look Nicer
function capitalizeCity(city) {
  return city.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

// Homework
let city = prompt("Enter a city?");
let capitalizedCity = capitalizeCity(city.toLowerCase()); // Capitalize the city name
if (weather[city.toLowerCase()] !== undefined) {
  // Check for the lowercase city name
  let temperature = weather[city.toLowerCase()].temp;
  let humidity = weather[city.toLowerCase()].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${capitalizedCity} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${capitalizedCity}`
  );
}
