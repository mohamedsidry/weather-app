const api_key = "80fc6846d6deea6670c13fab06c7e932";
const api_url = "https://api.openweathermap.org/data/2.5/weather?";


const input_box = document.getElementById("input-box");
const btn_search = document.getElementById("btn-search");
const sky_state = document.querySelector(".sky-state");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector(".w-speed");

async function checkWeather(cityName){

    const response = await fetch(`${api_url}q=${cityName}&units=metric&appid=${api_key}`);
    const data = await response.json();

    temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind_speed.innerHTML = data.wind.speed + "Km/h";

    setSkyState(data.weather[0].main);
    console.log(data.weather[0].main);
    
    
};

btn_search.addEventListener("click", ()=>{
    if(input_box.value)
    {
        checkWeather(input_box.value);
    }else{
        console.log("Empty Value")
    }
});



function setSkyState(state){
    switch(state){

        case "Clear":
            sky_state.src = "/static/images/clear.png";
            break;

        case "Clouds":
            sky_state.src = "/static/images/clouds.png";
            break;

        case "Drizzle":
            sky_state.src = "/static/images/drizzle.png";
            break;

            case "Mist":
            sky_state.src = "/static/images/mist.png";
            break;

        case "Rain":
            sky_state.src = "/static/images/rain.png";
            break;

        case "Snow":
            sky_state.src = "/static/images/snow.png";
            break;
        
        
        default:
            sky_state.src = "/static/images/clear.png";
            break;

    }


}