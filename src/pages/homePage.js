import humidity from "../../images/humidity.png";
import barometer from "../../images/barometer.png";
import windSpeed from "../../images/windSpeed.png";
import sunrise from "../../images/sunrise.png";
import sunset from "../../images/sunset.png";
import getTempWindUnits from "../utils/tempWindUnits";
import getResponseData from "../utils/getResponse";
import createDomElement from "../utils/createDomElement";

/**
 * 
 * @param {string} nameDay 
 * @param {number} maxTemp 
 * @param {number} minTemp 
 * @param {string} tempSign 
 * @param {object} day 
 * @returns {strinf} InnexHtml
 */
function insertContentToDivNextDay(nameDay, maxTemp, minTemp, tempSign, day) {
  return `
  <div class="nameNextDay">${nameDay}</div>
  <div class="iconNextDay"><img src="https:${day.day.condition.icon}"></div>
  <div class="maxTempNextDay">${maxTemp}${tempSign}</div>
  <div class="minTempNextDay">${minTemp}${tempSign}</div>`
}

/**
 *
 * @param {Object} day
 * @param {string} tempSign
 * @param {string} tempUnit
 * @returns {HTMLDivElement} divNextDay
 */
function createDivWithNextDaysInfo(day, tempSign, tempUnit) {
  const nameDay = getFullNameWeekDay(new Date(day.date).getDay());
  const divNextDay = createDomElement("div", "nextDay");
  let maxTemp, minTemp;
  if (tempUnit === "Celsius") {
    maxTemp = day.day.maxtemp_c;
    minTemp = day.day.mintemp_c;
  } else {
    maxTemp = day.day.maxtemp_f;
    minTemp = day.day.mintemp_f;
  }
  divNextDay.innerHTML = insertContentToDivNextDay(nameDay, maxTemp, minTemp, tempSign, day);
  return divNextDay;
}

/**
 *
 * @param {Object} location
 * @param {Object} current
 * @param {string} tempRequest
 * @param {string} tempSign
 * @returns {HTMLDivElement} divCurrentInfo
 */
function getDivWithCurrentInfo(location, current, tempRequest, tempSign) {
  const divCurrentInfo = createDomElement("div", "currentInfo");
  divCurrentInfo.innerHTML = `
        <div class="city">${location.name}</div>
        <div class="currentTemp">${tempRequest}${tempSign}<img src="https:${current.condition.icon}"></div>
        <div class="currentCondition">${current.condition.text}</div>`;
  return divCurrentInfo;
}

/**
 *
 * @param {Object} current
 * @param {string} windUnit
 * @param {string} windSpeedRequest
 * @returns {HTMLDivElement} divHumPresSpeed
 */
function getDivWithАdditionalInfo(current, windUnit, windSpeedRequest) {
  const divHumPresSpeed = createDomElement("div", "humPresSpeed");
  divHumPresSpeed.innerHTML = `
    <div class="humidity"><img сlass='imgHumPresSpeed' src="${humidity}" alt="Hum" height="30px" width="30px">${current.humidity} %</div>
    <div class="pressure"><img сlass='imgHumPresSpeed' src="${barometer}" alt="Pres" height="30px" width="30px">${current.pressure_mb} mBar</div>
    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${windSpeed}" height="30px" width="30px">${windSpeedRequest} ${windUnit}</div>`;
  return divHumPresSpeed;
}

/**
 *
 * @param {Object} forecast
 * @returns {HTMLDivElement} divSun
 */
function getDivWithSunriseSunsetInfo(forecast) {
  const divSun = createDomElement("div", "sun");
  divSun.innerHTML = `
    <div class="sunrise"><img class="sunrise" src="${sunrise}" alt="sunrise" height="30px" width="30px">${forecast.forecastday[0].astro.sunrise}</div>
    <div class="sunset">${forecast.forecastday[0].astro.sunset}<img class="sunset" src="${sunset}" alt="sunset" height="30px" width="30px"></div>`;
  return divSun;
}

/**
 * 
 * @param {number} temp 
 * @param {string} tempSign 
 * @param {object} day 
 * @returns {string} innerHTML
 */
function insertContetnToDivTimeGroup(temp, tempSign, day) {
  return `
  <div class="time">${day.time.substr(-5)}</div>
  <div class="icon"><img src="https:${day.condition.icon}"></div>
  <div class="time">${temp}${tempSign}</div>`;
}

/**
 *
 * @param {Object} day
 * @param {string} tempUnit
 * @param {string} tempSign
 * @returns {HTMLDivElement} divGroup
 */
function createDivWithTodayForecast(day, tempUnit, tempSign) {
  const divGroup = createDomElement("div", "timeGroup");
  let temp;
  if (tempUnit === "Celsius") {
    temp = day.temp_c;
  } else {
    temp = day.temp_f;
  }
  divGroup.innerHTML = insertContetnToDivTimeGroup(temp, tempSign, day);
  return divGroup;
}

/**
 *
 * @param {number} numDay
 * @returns {string} day of week
 */
function getFullNameWeekDay(numDay) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[numDay]
}

/**
 *
 * @param {Object} forecast
 * @param {string} tempSign
 * @param {string} tempUnit
 * @returns {HTMLDivElement} divNextDays
 */
function getDivWithNextDaysForecast(forecast, tempSign, tempUnit) {
  const divNextDays = createDomElement("div", "nextDays");
  forecast.forecastday
    .slice(1)
    .forEach((day) =>
      divNextDays.append(createDivWithNextDaysInfo(day, tempSign, tempUnit))
    );
  return divNextDays;
}

/**
 *
 * @param {Object} forecast
 * @param {Object} current
 * @param {string} tempUnit
 * @param {string} tempSign
 * @returns {HTMLDivElement} divTodayForecast
 */
function getDivWithTodayForecats(forecast, current, tempUnit, tempSign) {
  const divTodayForecast = createDomElement("div", "today");
  const divdayForecast = createDomElement("div", "dayForecast");
  const currentTime = current.last_updated.slice(-5).split(":")[0];
  const arrTodayForecast = forecast.forecastday[0].hour
    .slice(currentTime)
    .concat(forecast.forecastday[1].hour)
    .splice(1, 24);
  divTodayForecast.innerHTML = `<div class="caption">Today</div>`;

  arrTodayForecast.forEach((hour) =>
    divdayForecast.append(createDivWithTodayForecast(hour, tempUnit, tempSign))
  );
  divTodayForecast.append(divdayForecast);
  return divTodayForecast;
}

/**
 *
 * @param {Object} data
 * @param {HTMLDivElement} divInformer
 */
function createPage(data, divInformer) {
  const { location, current, forecast } = data;
  const { temperatureUnit = "c", windSpeedUnit = "kph" } = localStorage;
  const { tempRequest, tempSign, tempUnit, windUnit, windSpeedRequest } =
    getTempWindUnits(temperatureUnit, windSpeedUnit, current, forecast);

  const divCurrentInfo = getDivWithCurrentInfo(
    location,
    current,
    tempRequest,
    tempSign
  );
  const divHumPresSpeed = getDivWithАdditionalInfo(
    current,
    windUnit,
    windSpeedRequest
  );
  const divSun = getDivWithSunriseSunsetInfo(forecast);
  const divTodayForecast = getDivWithTodayForecats(
    forecast,
    current,
    tempUnit,
    tempSign
  );
  const divNextDays = getDivWithNextDaysForecast(forecast, tempSign, tempUnit);

  divInformer.append(divCurrentInfo);
  divInformer.append(divHumPresSpeed);
  divInformer.append(divSun);
  divInformer.append(divTodayForecast);
  divInformer.append(divNextDays);

  document.querySelector(".dayForecast").addEventListener(
    "mousewheel",
    (event) => {
      event = window.event || event;
      var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
      document.querySelector(".dayForecast").scrollLeft -= delta * 40;
      event.preventDefault();
    },
    false
  );
}

/**
 *
 * @param {string} url
 * @returns {HTMLDivElement} home page
 */
function createHomePage(url) {
  const divInformer = createDomElement("div", "informer");

  getResponseData(url)
    .then((data) => createPage(data, divInformer))
    .catch(alert);

  return divInformer;
}

export default createHomePage;
