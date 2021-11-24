import searchImg from "../images/search.png";
import setColorControlButtons from "./colorControlButtons";
import getResponseData from "./getResponse";
import windSpeed from "../images/windSpeed.png";
import humidity from "../images/humidity.png";
import getTempWindUnits from "./tempWindUnits";
import createDomElement from "./createDomElement";
import createList from "./similarCityList";

/**
 *
 * @param {promise} favCity
 * @returns {div} favCityDiv
 */
function createFavCityDiv(favCity) {
  const favCityDiv = createDomElement("div", "favCityDiv");
  favCity
    .then((data) => {
      const { location, current } = data;
      const { temperatureUnit = "c", windSpeedUnit = "kph" } = localStorage;
      const { tempRequest, tempSign, windUnit, windSpeedRequest } =
        getTempWindUnits(temperatureUnit, windSpeedUnit, current);
      favCityDiv.innerHTML = `
         <div class="favCityTempDiv">${tempRequest}${tempSign}<img src="https:${current.condition.icon}"  height="50px" width="50px"></div>
         <div class="favCityLocDiv">${location.name}</div>
         <div class="favCountryLocDiv">${location.country}</div>
         <div class="favCityExtraInfoDiv">
            <div class="humidity"><img сlass='imgHumPresSpeed' src="${humidity}" alt="Hum" height="30px" width="30px">${current.humidity}%</div>
            <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${windSpeed}" height="30px" width="30px">${windSpeedRequest} ${windUnit}</div>
         </div>
         `;
    })
    .catch(alert);
  favCityDiv.addEventListener("click", (event) => {
    const cityName = event.currentTarget.childNodes[3].innerText;
    localStorage.cityUrl = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${cityName}&days=4&aqi=no&alerts=no`;
    window.location.hash = "#city";
  });
  return favCityDiv;
}

/**
 *
 * @returns {div} divFavouriteCities
 */
function createDivFavouriteCities() {
  const divFavouriteCities = createDomElement("div", "favouriteCities");
  const favCityNamesArray = JSON.parse(
    localStorage.getItem("favouriteCitiesArr")
  );
  if (favCityNamesArray.length > 0) {
    favCityNamesArray.forEach((favCity) => {
      divFavouriteCities.append(
        createFavCityDiv(
          getResponseData(
            `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${favCity}&days=4&aqi=no&alerts=no`
          )
        )
      );
    });
  }
  return divFavouriteCities;
}

/**
 *
 * @returns {div} divSearch
 */
function createDivSearch() {
  const divSearch = createDomElement("div", "searchDiv");
  divSearch.innerHTML = `
   <form class="searchForm">
         <input class="search" type="text" placeholder="Search">
         <input class="submit" type="submit" value="" style="background: url(${searchImg}) no-repeat">
   </form>
   `;
  return divSearch;
}

function createfavouritePage() {
  if (localStorage.getItem("favouriteCitiesArr") === null) {
    localStorage.setItem("favouriteCitiesArr", JSON.stringify([]));
  }
  setColorControlButtons("#a37695", "#37515e", "#37515e");
  const divFavouritePage = createDomElement("div", "favouritePage");
  const divSearch = createDivSearch();
  const divFavouriteCities = createDivFavouriteCities();

  divFavouritePage.append(divSearch);
  divFavouritePage.append(divFavouriteCities);

  document.querySelector(".app").prepend(divFavouritePage);
  document
    .querySelector(".searchForm")
    .addEventListener("input", (event) => createList(event));
}

export default createfavouritePage;
