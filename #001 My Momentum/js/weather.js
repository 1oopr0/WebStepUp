// It will be deleted
const API_KEY = "testkey";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch 는 network 에서 debug 가능
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather");
        const weather = weatherContainer.querySelector("span:first-child");
        const city = weatherContainer.querySelector("span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);