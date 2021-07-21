var searchInput = document.getElementById("search-input");
var apiKey = "1089299d5c54173e8dbf1138b2b530b5";
var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";

function getCurrent(){
    fetch(urlCurrent)
      .then(console.log(searchInput));
    .then(response => response.json())
  .then(data => console.log(data));
};

function getFiveDay(){
  fetch(urlFiveDay)
    .then(console.log(searchInput));
  .then(response => response.json())
.then(data => console.log(data));
};

document.button.addEventListener('click', getCurrent, getFiveDay);

function previousSearch() {
  localStorage.setItem(getCurrent);
  localStorage.setItem(getFiveDay);
};

document.button.addEventListener('click', previousSearch);






