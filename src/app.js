import createHomePage from "./homePage";
import createfavouritePage from "./favouritePage";
import createSettingPage from "./settingPage";

const url = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`;
const app = document.querySelector(".app");

function onRouteChanged() {
  switch (window.location.hash) {
    case "#home":
      app.firstChild.remove();
      createHomePage(url);
      break;
    case "#city":
      app.firstChild.remove();
      createHomePage(localStorage.cityUrl);
      break;
    case "#favourite":
      app.firstChild.remove();
      createfavouritePage();
      break;
    case "#setting":
    case "#kph":
    case "#mph":
    case "#Celsius":
    case "#Fahrenheit":
      app.firstChild.remove();
      createSettingPage();
      break;
    case "#List":
      if (
        document.querySelector(".favouritePage").lastChild.className !== "searchDiv"
      ) {
        document.querySelector(".favouritePage").lastChild.remove();
      }
      break;
    default:
      break;
  }
}

if (window.location.hash === "#home") {
  createHomePage(url);
} else {
  window.location.hash = "#home";
}

window.addEventListener("hashchange", onRouteChanged);
