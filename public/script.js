const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const Weather_img=document.getElementsByClassName("Weather-img")[0];
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
async function checkWeather(city){
    const api_key="cadb2d0894eee8628c2aec7406968434";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await fetch(`${url}`).then(response => response.json());
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML= `${weather_data.wind.speed}Km/H`;
    switch(weather_data.weather[0].main){
    case 'Clouds':
        Weather_img.src = "/assets/cloud.png";
        break;
        case 'Clear':
        Weather_img.src = "/assets/clear.webp";
        break;
        case 'Mist':
        Weather_img.src = "/assets/mist.png";
        break;
        case 'Haze':
        Weather_img.src = "/assets/rainy.png";
        break;
        case 'Snow':
        Weather_img.src = "/assets/snow.png";
        break;

    }
    }
searchBtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
});