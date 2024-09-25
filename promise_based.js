function fetchWeather() {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            const weatherData = {
                city: "Lagos",
                temperature: 50,
                condition: "Sunny"
            };
            resolve(weatherData);
        }, 2000);
    });
}


fetchWeather()
    .then((data) => {
        console.log("Weather data fetched:", data);
        return data.temperature;
    })
    .then((temperature) => {
        console.log("Temperature in Lagos:", temperature + "°C");
        return temperature > 25 ? "It's hot!" : "It's cool!";
    })
    .then((message) => {
        console.log("Weather message:", message);
    })
    .catch((error) => {
        console.log("Error fetching weather:", error);
    });


    
async function fetchWeather() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = {
                city: "Lagos",
                temperature: 50,
                condition: "Sunny"
            };
            resolve(weatherData);
        }, 2000);
    });
}


