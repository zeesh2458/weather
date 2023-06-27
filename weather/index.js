const weather ={
fetchWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=de8fb46bb59f7457e2fcbd50678fa786")
    .then((response)=>{ return response.json()})
    .then((data)=>{this.displayWeather(data, city)})
    .catch((error)=>{console.log(error)})
},
displayWeather: function(data, city){
    // object destructuring assignment to extract the value of name, icon, description,temp, etc 
    const{name} =data;
    const{icon, description}= data.weather[0];
    const{temp, humidity}=data.main;
    const{speed}=data.wind;
   
    document.querySelector(".city").innerText="Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png"
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = "Temprature is " + temp + "°C";
    document.querySelector(".humidity").innerText= "Humidity is "+ humidity + "%"
    document.querySelector(".wind").innerText = "Wind Speed is " + speed + "km/h"
    
},
search: function(){
   this.fetchWeather(document.querySelector(".search-bar").value)
}
}

document.querySelector(".search button").addEventListener("click", function(){
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=='Enter'){
    weather.search()
}
})
//background: rgba(76, 175, 80, 0.3);