import humidity from '../images/humidity.png';
import barometer from '../images/barometer.png';
import windSpeed from '../images/windSpeed.png';
import getTempWindUnits from './tempWindUnits';
import setColorControlButtons from './colorControlButtons';
import getResponseData from './getResponse';

function changeTemperatureUnit() {
    if ( document.querySelector('.tempSettingUnit').textContent === 'Celsius') {
        document.querySelector('.tempSettingUnit').textContent = 'Fahrenheit';
        localStorage.temperatureUnit = 'f';
    } else {
        document.querySelector('.tempSettingUnit').textContent = 'Celsius';
        localStorage.temperatureUnit = 'c';
    }
    createSettingPage()
}

function changeWindSpeedUnit() {
    if (document.querySelector('.windSpeedSettingUnit').textContent === 'kph') {
        document.querySelector('.windSpeedSettingUnit').textContent = 'mph';
        localStorage.windSpeedUnit = 'mph';
    } else {
        document.querySelector('.windSpeedSettingUnit').textContent = 'kph';
        localStorage.windSpeedUnit = 'kph';
    }
    createSettingPage()
}

function createPage(data) {
    const {current, location} = data;
    const {temperatureUnit = 'c', windSpeedUnit = 'kph'} = localStorage;
    const {tempUnit, tempRequest, tempSign, windUnit, windSpeedRequest} = getTempWindUnits(temperatureUnit, windSpeedUnit, current);
    document.querySelector('.settingPage').innerHTML = `
    <div class="locationDiv">
        <div class="locationCaptionDiv">Your Location Now</div>
        <div class="locationDescriptionDiv">${location.name}, ${location.country}</div>
    </div>
    <div class="locationInfoDiv">
        <div class="locationIconDiv"><img class="sunrise" src="https:${current.condition.icon}" alt="sunrise" height="150px" width="150px"></div>
        <div class="locationIconDescriptionDiv">${current.condition.text}</div>
        <div class="localTempDiv">${tempRequest}${tempSign}</div>
    </div>
    <div class="locationExtraInfoDiv">
        <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${windSpeed}" height="30px" width="30px">${windSpeedRequest} ${windUnit}</div>
        <div class="humidity"><img сlass='imgHumPresSpeed' src="${humidity}" alt="Hum" height="30px" width="30px">${current.humidity} %</div>
        <div class="pressure"><img сlass='imgHumPresSpeed' src="${barometer}" alt="Pres" height="30px" width="30px">${current.pressure_mb} mBar</div>
    </div>
    <div class="locationEditDiv">
        <div class="tempSettingDiv">
            <div class="tempSettingCaption">Temperature</div>
            <div class="tempSettingUnit">${tempUnit}</div>
        </div>
        <div class="speedWindSettingDiv">
            <div class="windSpeedSettingCaption">Wind Speed</div>
            <div class="windSpeedSettingUnit">${windUnit}</div>
        </div>
        <div class="sourceSettingDiv">
            <div class="sourceSettingCaption">Source</div>
            <div class="sourceSettingUnit">weatherapi.com</div>
        </div>
    </div>`;
    document.querySelector('.tempSettingUnit').addEventListener('click', changeTemperatureUnit);
    document.querySelector('.windSpeedSettingUnit').addEventListener('click', changeWindSpeedUnit);
}

function createSettingPage() {
    document.querySelector('.app').firstChild.remove();
    setColorControlButtons("#37515e", "#37515e", "#a37695");
    const divSettingPage = document.createElement('div');
    divSettingPage.className = 'settingPage'
    document.querySelector('.app').prepend(divSettingPage);
    let data = getResponseData('http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no');
    data
        .then(data => createPage(data))
        .catch(alert);

}

export default createSettingPage;