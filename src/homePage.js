import humidity from '../images/humidity.png'
import barometer from '../images/barometer.png'
import windSpeed from '../images/windSpeed.png'
import sunrise from '../images/sunrise.png'
import sunset from '../images/sunset.png'
import getTempWindUnits from './tempWindUnits'
import setColorControlButtons from './colorControlButtons'
import getResponseData from './getResponse'

function createDivWithNextDaysInfo(day, tempSign, tempUnit) {
    const nameDay = getFullNameWeekDay(new Date(day.date).getDay());
    const divNextDay = document.createElement('div');
    let maxTemp, minTemp;
    if (tempUnit === 'Celsius') {
        maxTemp = day.day.maxtemp_c;
        minTemp = day.day.mintemp_c;
    } else {
        maxTemp = day.day.maxtemp_f;
        minTemp = day.day.mintemp_f;
    }
    divNextDay.className = 'nextDay';
    divNextDay.innerHTML = `
    <div class="nameNextDay">${nameDay}</div>
    <div class="iconNextDay"><img src="https:${day.day.condition.icon}"></div>
    <div class="maxTempNextDay">${maxTemp}${tempSign}</div>
    <div class="minTempNextDay">${minTemp}${tempSign}</div>`
    return divNextDay;
}

function getDivWithCurrentInfo(location, current, tempRequest, tempSign) {
    const divCurrentInfo = document.createElement('div');
    divCurrentInfo.className = 'currentInfo';
    divCurrentInfo.innerHTML = `
        <div class="city">${location.name}</div>
        <div class="currentTemp">${tempRequest}${tempSign}<img src="https:${current.condition.icon}"></div>
        <div class="currentCondition">${current.condition.text}</div>`
    return divCurrentInfo;
}
 
function getDivWithАdditionalInfo(current, windUnit, windSpeedRequest) {
    const divHumPresSpeed = document.createElement('div');
    divHumPresSpeed.className = 'humPresSpeed';
    divHumPresSpeed.innerHTML = `
    <div class="humidity"><img сlass='imgHumPresSpeed' src="${humidity}" alt="Hum" height="30px" width="30px">${current.humidity} %</div>
    <div class="pressure"><img сlass='imgHumPresSpeed' src="${barometer}" alt="Pres" height="30px" width="30px">${current.pressure_mb} mBar</div>
    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${windSpeed}" height="30px" width="30px">${windSpeedRequest} ${windUnit}</div>`;
    return divHumPresSpeed;
}

function getDivWithSunriseSunsetInfo(forecast) {
    const divSun = document.createElement('div');
    divSun.className = 'sun';
    divSun.innerHTML = `
    <div class="sunrise"><img class="sunrise" src="${sunrise}" alt="sunrise" height="30px" width="30px">${forecast.forecastday[0].astro.sunrise}</div>
    <div class="sunset">${forecast.forecastday[0].astro.sunset}<img class="sunset" src="${sunset}" alt="sunset" height="30px" width="30px"></div>`
    return divSun;
}

function createDivWithTodayForecast(day, tempUnit, tempSign)  {
    const divGroup = document.createElement('div');
    let temp;
    if (tempUnit === 'Celsius') {
        temp = day.temp_c;
    } else {
        temp = day.temp_f;
    }
    divGroup.className = 'timeGroup';
    divGroup.innerHTML = `
    <div class="time">${day.time.substr(-5)}</div>
    <div class="icon"><img src="https:${day.condition.icon}"></div>
    <div class="time">${temp}${tempSign}</div>`
    return divGroup;
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

function getDivWithNextDaysForecast(forecast, tempSign, tempUnit) {
    const divNextDays = document.createElement('div');
    divNextDays.className = 'nextDays';
    forecast.forecastday.slice(1).forEach(day => divNextDays.append(createDivWithNextDaysInfo(day, tempSign, tempUnit)));
    return divNextDays;
}

function getDivWithTodayForecats(forecast, current, tempUnit, tempSign) {
    const divTodayForecast = document.createElement('div');
    const divdayForecast = document.createElement('div');
    const currentTime = current.last_updated.slice(-5).split(':')[0];
    const arrTodayForecast = forecast.forecastday[0].hour.slice(currentTime).concat(forecast.forecastday[1].hour).splice(1, 24);
    divdayForecast.className = 'dayForecast';
    divTodayForecast.className = 'today';
    divTodayForecast.innerHTML = `<div class="caption">Today</div>`;

    arrTodayForecast.forEach((hour) => divdayForecast.append(createDivWithTodayForecast(hour, tempUnit, tempSign)));
    divTodayForecast.append(divdayForecast);
    return divTodayForecast;
}

function createPage(data) {
    const {location, current, forecast} = data;
    const {temperatureUnit = 'c', windSpeedUnit = 'kph'} = localStorage;
    const {tempRequest, tempSign, tempUnit, windUnit, windSpeedRequest} = getTempWindUnits(temperatureUnit, windSpeedUnit, current, forecast);
    const divInformer = document.createElement('div');
    divInformer.className = 'informer';

    const divCurrentInfo = getDivWithCurrentInfo(location, current, tempRequest, tempSign);
    const divHumPresSpeed = getDivWithАdditionalInfo(current, windUnit, windSpeedRequest);
    const divSun = getDivWithSunriseSunsetInfo(forecast);
    const divTodayForecast = getDivWithTodayForecats(forecast, current, tempUnit, tempSign);
    const divNextDays = getDivWithNextDaysForecast(forecast, tempSign, tempUnit);
    
    divInformer.append(divCurrentInfo);
    divInformer.append(divHumPresSpeed);
    divInformer.append(divSun);
    divInformer.append(divTodayForecast);
    divInformer.append(divNextDays);
    
    document.querySelector('.app').prepend(divInformer);
    document.querySelector('.dayForecast').addEventListener('mousewheel', (event) => {
        event = window.event || event;
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        document.querySelector('.dayForecast').scrollLeft -= (delta * 40);
        event.preventDefault();
    }, false);
}

function createHomePage(url) {
    document.querySelector('.app').firstChild.remove();
    setColorControlButtons("#37515e", "#a37695", "#37515e");
    
    getResponseData(url)
        .then(data => createPage(data))
        .catch(alert);
}

export default createHomePage;