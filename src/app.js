import setColorControlButtons from "./colorControlButtons";
import { homeDiv, favouriteDiv, settingDiv, notFaundPage, app } from "./router";

const routes = {
  "#home": homeDiv,
  "#favourite": favouriteDiv,
  "#setting": settingDiv,
  "#notFaund": notFaundPage,
};

function onRouteChanged() {
  app.innerHTML = "";
  app.append(routes[window.location.hash]);
  setColorControlButtons(window.location.hash);
}

window.onload = () => {
  window.location.hash = "#home";
};
window.addEventListener("hashchange", onRouteChanged(routes));
