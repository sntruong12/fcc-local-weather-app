var latitude,
    longitude;

var xhr = new XMLHttpRequest(),
    method = "GET",
    url = `https://fcc-weather-api.glitch.me`;

var parsedInfo;

var userWeather,
    userTemperature = 6,
    userImage;

var buttonClasses = document.getElementById("disable").className;

//On page load - populate temperature
document.getElementById("temperature").innerHTML = userTemperature + "\xB0f";

//On click function
function coordinates (position) {
  longitude = Math.round(position.coords.longitude);
  latitude = Math.round(position.coords.latitude);
  console.log(`latitude = ${latitude}\nlongitude = ${longitude}`);

  url += `/api/current?lat=${latitude}&lon=${longitude}`;

//API GET Request
  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      parsedInfo = JSON.parse(xhr.responseText);
      console.log(parsedInfo);
//Pull weather from API response
      userWeather = parsedInfo.weather[0].description;
      document.getElementById("weather").innerHTML = userWeather;
//Pull temperature from API response
      userTemperature = Math.round(parsedInfo.main.temp);
      document.getElementById("temperature").innerHTML = userTemperature + "\xB0c";
      document.getElementById("temperature").className += " c";
//Pull image from API response
      userImage = parsedInfo.weather[0].icon;
      document.getElementById("icon").src = userImage;

// disable button after click
      buttonClasses += " disabled";
      document.getElementById("disable").setAttribute("class", buttonClasses);
      document.getElementById("disable").innerHTML = "f5 page!";
    }
  };
  xhr.send();
};

//Get coordinates
function getCoordinates () {
  navigator.geolocation.getCurrentPosition(coordinates);
};

//Convert Temperature
function convertTemperature () {
  if (document.getElementById("temperature").classList.contains("c")) {
    console.log("c to f");
    userTemperature = userTemperature * 1.8 + 32;
    userTemperature = Math.round(userTemperature);
    document.getElementById("temperature").innerHTML = `${userTemperature}\xB0f`;
    document.getElementById("temperature").classList.remove("c");
    document.getElementById("temperature").classList.add("f")
  } else {
    console.log("f to c");
    userTemperature -= 32;
    userTemperature *= 5;
    userTemperature /= 9;
    userTemperature = Math.round(userTemperature);
    document.getElementById("temperature").innerHTML = `${userTemperature}\xB0c`;
    document.getElementById("temperature").classList.remove("f");
    document.getElementById("temperature").classList.add("c");
  }
};
