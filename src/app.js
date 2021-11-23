import createHomePage from "./homePage";
import createfavouritePage from "./favouritePage";
import createSettingPage from "./settingPage";

const controlMenu = document.querySelector(".controlMenu");
const url = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`;

/**
 * @param {target} target
 * @returns {target} button
 */
function checkTarget(target) {
  if (target.tagName === "path") {
    return target.parentNode;
  } else {
    return target;
  }
}

controlMenu.addEventListener("click", ({ target }) => {
  const clickedButton = checkTarget(target);
  switch (clickedButton.id) {
    case "favouriteButton":
      createfavouritePage();
      break;
    case "homeButton":
      createHomePage(url);
      break;
    case "settingButton":
      createSettingPage();
      break;
    default:
      break;
  }
});

createHomePage(url);
