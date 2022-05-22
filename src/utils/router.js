import createHomePage from "../pages/homePage";
import createFavoritePage from "../pages/favoritePage";
import createSettingPage from "../pages/settingPage";
import setColorControlButtons from "./colorControlButtons";
import createNotFoundPageDiv from "../pages/notFoundPage";

const initUrl = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`;
const app = document.querySelector(".app");
const homeDiv = createHomePage(initUrl);
const favoriteDiv = createFavoritePage();
const settingDiv = createSettingPage();
const notFoundPage = createNotFoundPageDiv();

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
export { homeDiv, favoriteDiv, settingDiv, notFoundPage };
