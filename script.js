   
 function getWeather() {
    event.preventDefault();
    let city = document.getElementById("cityname").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=941af581e4065b39f1bdcfd992d37cb8`
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        let tempt = data.main.temp-273;
        tempt=tempt.toFixed(2);
        document.getElementById("temp").textContent = `${tempt}℃`;

        tempt = data.main.temp_max-273;
        tempt=tempt.toFixed(2);
        document.getElementById("temp_max").textContent =`${tempt}℃` ;

        tempt = data.main.temp_min-273;
        tempt=tempt.toFixed(2);
        document.getElementById("temp_min").textContent = `${tempt}℃` ;

        document.getElementById("humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("Wind_speed").textContent = `${data.wind.speed}Km/hr`;
        document.getElementById("pressure").textContent = data.main.pressure;
        document.getElementById("visibility").textContent = data.visibility;
        document.getElementById("clouds").textContent = data.weather[0].description;
    });  
 }








