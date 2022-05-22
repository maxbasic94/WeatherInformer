import onRouteChanged from "./utils/router";
import { homeDiv, favouriteDiv, settingDiv, notFaundPage } from './utils/router'

import './style.css'

const routes = {
  "#home": homeDiv,
  "#favourite": favouriteDiv,
  "#setting": settingDiv,
  "#notFaund": notFaundPage,
};

window.onload = () => {
  window.location.hash = "#home";
  onRouteChanged(routes);
};


window.addEventListener("hashchange", () => onRouteChanged(routes));