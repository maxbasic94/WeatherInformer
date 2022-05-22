import onRouteChanged from "./utils/router";
import { homeDiv, favoriteDiv, settingDiv, notFoundPage } from './utils/router'

import './style.css'

const routes = {
  "#home": homeDiv,
  "#favorite": favoriteDiv,
  "#setting": settingDiv,
  "#notFound": notFoundPage,
};

window.onload = () => {
  window.location.hash = "#home";
  onRouteChanged(routes);
};


window.addEventListener("hashchange", () => onRouteChanged(routes));