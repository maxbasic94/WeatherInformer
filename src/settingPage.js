import humidity from '../images/humidity.png'
import barometer from '../images/barometer.png'
import windSpeed from '../images/windSpeed.png'

function createLocationExtraInfoDiv(current) {
    const locationExtraInfoDiv = document.createElement('div');
    locationExtraInfoDiv.innerHTML = `
    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${windSpeed}" height="30px" width="30px">${current.wind_kph} km/h</div>
    <div class="humidity"><img сlass='imgHumPresSpeed' src="${humidity}" alt="Hum" height="30px" width="30px">${current.humidity} %</div>
    <div class="pressure"><img сlass='imgHumPresSpeed' src="${barometer}" alt="Pres" height="30px" width="30px">${current.pressure_mb} mBar</div>`;
    locationExtraInfoDiv.className = 'locationExtraInfoDiv'
    return locationExtraInfoDiv;
}

function createLocationInfoDiv(current) {
    const locationInfoDiv = document.createElement('div');
    locationInfoDiv.innerHTML = `
    <div class="locationIconDiv"><img class="sunrise" src="https:${current.condition.icon}" alt="sunrise" height="150px" width="150px"></div>
    <div class="locationIconDescriptionDiv">${current.condition.text}</div>
    <div class="localTempDiv">${current.temp_c}°</div>`;
    locationInfoDiv.className = 'locationInfoDiv';
    return locationInfoDiv;
}

function createLocationDiv(location) {
    const locationDiv = document.createElement('div');
    locationDiv.innerHTML = `
    <div class="locationCaptionDiv">Your Location Now</div>
    <div class="locationDescriptionDiv">${location.name}, ${location.country}</div>`
    locationDiv.className = 'locationDiv';
    return locationDiv
}

function createPage(data) {
    const {current, location} = data;
    const locationDiv = createLocationDiv(location);
    const locationInfoDiv = createLocationInfoDiv(current);
    const locationExtraInfoDiv = createLocationExtraInfoDiv(current);
    console.log(current);
    console.log(location);
    document.querySelector('.settingPage').append(locationDiv);
    document.querySelector('.settingPage').append(locationInfoDiv);
    document.querySelector('.settingPage').append(locationExtraInfoDiv);    
}

async function getData() {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no', {mode: 'cors'});
    if (response.status == 200) {
        const json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

function createSettingPage() {
    const divSettingPage = document.createElement('div');
    divSettingPage.className = 'settingPage'
    document.querySelector('.app').prepend(divSettingPage);
    let data = getData();
    data
        .then(data => createPage(data))
        .catch(alert);

}

export default createSettingPage;