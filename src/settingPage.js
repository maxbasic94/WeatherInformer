function createPage(data) {
    const {current, location} = data;
    console.log(current);
    console.log(location);
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