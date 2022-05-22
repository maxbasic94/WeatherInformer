import searchImg from "../../images/search.png";
import getResponseData from "../utils/getResponse";
import windSpeed from "../../images/windSpeed.png";
import humidity from "../../images/humidity.png";
import getTempWindUnits from "../utils/tempWindUnits";
import createDomElement from "../utils/createDomElement";
import createList from "../utils/similarCityList";

/**
 *
 * @param {object} location
 * @param {object} current
 * @param {number} tempRequest
 * @param {string} tempSign
 * @param {string} windUnit
 * @param {number} windSpeedRequest
 * @returns {string} innerHTML
 */
function insertContentToDivFavCity(
  location,
  current,
  tempRequest,
  tempSign,
  windUnit,
  windSpeedRequest
) {
  return `
  <div class="favCityTempDiv">${tempRequest}${tempSign}<img src="https:${current.condition.icon}"  height="50px" width="50px"></div>
  <div class="favCityLocDiv">${location.name}</div>
  <div class="favCountryLocDiv">${location.country}</div>
  <div class="favCityExtraInfoDiv">
     <div class="humidity"><img сlass='imgHumPresSpeed' src="${humidity}" alt="Hum" height="30px" width="30px">${current.humidity}%</div>
     <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${windSpeed}" height="30px" width="30px">${windSpeedRequest} ${windUnit}</div>
  </div>
  `;
}

/**
 *
 * @param {promise} favCity
 * @returns {HTMLDivElement} favCityDiv
 */
function createFavCityDiv(favCity) {
  const favCityDiv = createDomElement("div", "favCityDiv");
  favCity
    .then((data) => {
      const { location, current } = data;
      const { temperatureUnit = "c", windSpeedUnit = "kph" } = localStorage;
      const { tempRequest, tempSign, windUnit, windSpeedRequest } =
        getTempWindUnits(temperatureUnit, windSpeedUnit, current);
      favCityDiv.innerHTML = insertContentToDivFavCity(
        location,
        current,
        tempRequest,
        tempSign,
        windUnit,
        windSpeedRequest
      );
    })
    .catch(alert);
  // favCityDiv.addEventListener("click", ({currentTarget}) => {
  //   const cityName = currentTarget.children[1].textContent;
  //   const newUrl = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${cityName}&days=4&aqi=no&alerts=no`;
  //   localStorage.setItem('url', newUrl);
  //   window.location.hash = '#home';
  // });
  return favCityDiv;
}

/**
 *
 * @returns {HTMLDivElement} divfavoriteCities
 */
function createDivfavoriteCities() {
  const divfavoriteCities = createDomElement("div", "favoriteCities");
  const favCityNamesArray = JSON.parse(
    localStorage.getItem("favoriteCitiesArr")
  );
  if (favCityNamesArray.length > 0) {
    favCityNamesArray.forEach((favCity) => {
      divfavoriteCities.append(
        createFavCityDiv(
          getResponseData(
            `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${favCity}&days=4&aqi=no&alerts=no`
          )
        )
      );
    });
  }
  return divfavoriteCities;
}

/**
 *
 * @returns {string} innerHTML
 */
function insertContentToDivSearch() {
  return `
  <form class="searchForm">
        <input class="search" type="text" placeholder="Search">
        <input class="submit" type="submit" value="" style="background: url(${searchImg}) no-repeat">
  </form>`;
}

/**
 *
 * @returns {HTMLDivElement} divSearch
 */
function createDivSearch() {
  const divSearch = createDomElement("div", "searchDiv");
  divSearch.innerHTML = insertContentToDivSearch();
  return divSearch;
}

/**
 * 
 * @param {HTMLDivElement} divfavoritePage 
 */
function performSearchForm(divfavoritePage) {
  const newfavoriteCitiesDiv = createDivfavoriteCities();
  document.querySelector(".favoritePage").lastChild.remove();
  document.querySelector(".favoritePage").append(newfavoriteCitiesDiv);
  divfavoritePage.querySelector(".search").value = "";
}

/**
 *
 * @returns {HTMLDivElement} favorite page
 */
function createfavoritePage() {
  if (localStorage.getItem("favoriteCitiesArr") === null) {
    localStorage.setItem("favoriteCitiesArr", JSON.stringify([]));
  }
  const divfavoritePage = createDomElement("div", "favoritePage");
  const divSearch = createDivSearch();
  const divfavoriteCities = createDivfavoriteCities();

  divfavoritePage.append(divSearch, divfavoriteCities);

  divfavoritePage
    .querySelector(".searchForm")
    .addEventListener("input", (event) => createList(event));
  divfavoritePage
    .querySelector(".searchForm")
    .addEventListener("submit", () => performSearchForm(divfavoritePage));
  return divfavoritePage;
}

export default createfavoritePage;
