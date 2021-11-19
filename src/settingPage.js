function createLocationDescriptionDiv(location) {
    const locationDescriptionDiv = document.createElement('div');
    locationDescriptionDiv.className = 'locationDescriptionDiv';
    locationDescriptionDiv.textContent = `${location.name}, ${location.country}`;
    return locationDescriptionDiv;
}

function createLocationCaptionDiv() {
    const locationCaptionDiv = document.createElement('div');
    locationCaptionDiv.textContent = 'Your Location Now'
    locationCaptionDiv.className = 'locationCaptionDiv';
    return locationCaptionDiv;
}

function createLocationDiv(location) {
    const locationDiv = document.createElement('div');
    const locationCaptionDiv = createLocationCaptionDiv();
    const locationDescriptionDiv = createLocationDescriptionDiv(location);
    locationDiv.className = 'locationDiv';
    locationDiv.append(locationCaptionDiv);
    locationDiv.append(locationDescriptionDiv);
    return locationDiv
}

function createPage(data) {
    const {current, location} = data;
    const locationDiv = createLocationDiv(location);
    console.log(current);
    console.log(location);
    document.querySelector('.settingPage').append(locationDiv);
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