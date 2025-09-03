const apikey= "5fdf984586a89921c4e83eb1776effe0";

const apiurl= "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const input = document.querySelector(".search input");
const btn= document.querySelector(".search button");
const weather= document.querySelector(".weather-icon");

const humidity= document.querySelector("#humidity");
const wind = document.querySelector("#wind");



async function checkweather(city){
    const response= await fetch(apiurl + `&q=${city}`+ `&appid=${apikey}`);

    let data= await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+"°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)+" km/hr";

    weather.src= `images/${data.weather[0].main}.png`

    humidity.src= `images/humidity.png`

    wind.src= `images/wind.png`



}

btn.addEventListener("click", ()=>{
    checkweather(input.value);
})

