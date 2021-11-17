const url = 'http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=Minsk&days=4&aqi=no&alerts=no';
const divCity = document.querySelector('.city');
const divCurrentTemp = document.querySelector('.currentTemp');
const divCurrentCondition = document.querySelector('.currentCondition');
const divHumidity = document.querySelector('.humidity');
const divPressure = document.querySelector('.pressure');
const divWindSpeed = document.querySelector('.windSpeed');
const divSunrise = document.querySelector('.sunrise');
const divSunset = document.querySelector('.sunset');
const divDayForecast = document.querySelector('.dayForecast');

function createDivWithCurrentInfo(location, current) {
    divCity.textContent = location.name;
    divCurrentTemp.textContent = current.temp_c + '°';
    divCurrentCondition.textContent = current.condition.text;
}
 
function createDivWithАdditionalInfo(current) {
    divHumidity.append(`${current.humidity} %`);
    divPressure.append(`${current.pressure_mb} mBar`);
    divWindSpeed.append(`${current.wind_kph} km/h`);
}

function createDivWithSunriseSunsetInfo(forecast) {
    divSunrise.append(forecast.forecastday[0].astro.sunrise);
    divSunset.prepend(forecast.forecastday[0].astro.sunset);
}

function createDivWithTodayForecast(day)  {
    const divGroup = document.createElement('div');
    divGroup.className = 'timeGroup';
    const divTime = document.createElement('div');
    divTime.className = 'time';
    divTime.append(day.time.substr(-5));
    const divIcon = document.createElement('div');
    divIcon.className = 'icon';
    const img = document.createElement('img');
    img.src = 'https:' + day.condition.icon;
    divIcon.append(img);
    const divTmp = document.createElement('div');
    divTmp.className = 'tmp';
    divTmp.append(day.temp_c + '°');
    divGroup.append(divTime);
    divGroup.append(divIcon);
    divGroup.append(divTmp);
    divDayForecast.append(divGroup);
}

 function getFullNameWeekDay(numDay) {
    switch (numDay) {
        case 0: return 'Sunday';
        case 1: return 'Monday';  
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';  
        case 5: return 'Friday';
        case 6: return 'Saturday';                 
        default: Error('error getting week day');
    }
}

/**
 * @param {string} url 
 * @returns {Promise} Promise
 */

async function getData(url) {
    const response = await fetch(url);

    if (response.status == 200) {
        const json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

getData(url)
    .then(data => createPage(data))
    .catch(alert);

function createPage(data) {
    const {location, current, forecast} = data

    createDivWithCurrentInfo(location, current);
    createDivWithАdditionalInfo(current);
    createDivWithSunriseSunsetInfo(forecast);

    forecast.forecastday[0].hour.forEach((day) => createDivWithTodayForecast(day));

    forecast.forecastday.forEach(day => {
        const nameDay = getFullNameWeekDay(new Date(day.date).getDay());
        console.log(nameDay);
    })

    console.log(location);
    console.log(current);
    console.log(forecast);
}

divDayForecast.addEventListener('mousewheel', (event) => {
    event = window.event || event;
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    divDayForecast.scrollLeft -= (delta * 40);
    event.preventDefault();
}, false);