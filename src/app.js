import createHomePage from "./pages/homePage";
import createfavouritePage from "./pages/favouritePage";
import createSettingPage from "./pages/settingPage";
import setColorControlButtons from "./colorControlButtons"
import createNotFaundPageDiv from "./pages/notFaundPage";

const url = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`;
const app = document.querySelector(".app");
const homeDiv = createHomePage(url);
const favouriteDiv = createfavouritePage();
const settingDiv = createSettingPage();
const notFaundPage = createNotFaundPageDiv();

const routes = {
  '#home': homeDiv,
  '#favourite': favouriteDiv,
  '#setting': settingDiv,
  '#notFaund': notFaundPage
}

function onRouteChanged() {
  app.innerHTML='';
  app.append(routes[window.location.hash]);
  setColorControlButtons(window.location.hash)  
}

if (window.location.hash === "#home") {
  app.append(homeDiv);
} else {
  window.location.hash = "#home";
}

window.addEventListener("hashchange", onRouteChanged);
