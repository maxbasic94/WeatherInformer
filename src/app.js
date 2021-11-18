import createHomePage from "./homePage";

const city = 'Minsk';
const url = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${city}&days=4&aqi=no&alerts=no`;

createHomePage(url);

