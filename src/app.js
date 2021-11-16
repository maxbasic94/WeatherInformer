const url = 'http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=Minsk&days=5&aqi=no&alerts=no';
const divCity = document.querySelector('.city');
const divCurrentTemp = document.querySelector('.currentTemp');
const divCurrentCondition = document.querySelector('.currentCondition');
const divHumidity = document.querySelector('.humidity');
const divPressure = document.querySelector('.pressure');
const divWindSpeed = document.querySelector('.windSpeed');

/**
 * @param {string} url 
 * @returns {Promise} Promise
 */

async function getData(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}
getData(url)
    .then(data => f(data))
    .catch(alert);

function f(data) {
    const {location, current, forecast} = data
    divCity.textContent = location.name;
    divCurrentTemp.textContent = current.temp_c + '°';
    divCurrentCondition.textContent = current.condition.text;

    divHumidity.append(`${current.humidity} %`);
    divPressure.append(`${current.pressure_mb} mBar`);
    divWindSpeed.append(`${current.wind_kph} km/h`);

    console.log(current.humidity)

    console.log(location);
    console.log(current);
    console.log(forecast);
}