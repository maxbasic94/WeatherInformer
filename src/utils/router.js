import createHomePage from "../pages/homePage";
import createfavouritePage from "../pages/favouritePage";
import createSettingPage from "../pages/settingPage";
import setColorControlButtons from "./colorControlButtons";
import createNotFaundPageDiv from "../pages/notFoundPage";

const initUrl = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`;
const app = document.querySelector(".app");
const homeDiv = createHomePage(initUrl);
const favouriteDiv = createfavouritePage();
const settingDiv = createSettingPage();
const notFaundPage = createNotFaundPageDiv();

/**
 *
 * @param {Object} routes
 */
function onRouteChanged(routes) {
  app.innerHTML = "";
  app.append(routes[window.location.hash]);
  setColorControlButtons(window.location.hash);
}

export default onRouteChanged;
export { homeDiv, favouriteDiv, settingDiv, notFaundPage };
