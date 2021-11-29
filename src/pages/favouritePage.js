import searchImg from "../../images/search.png";
import getResponseData from "../utils/getResponse";
import windSpeed from "../../images/windSpeed.png";
import humidity from "../../images/humidity.png";
import getTempWindUnits from "../utils/tempWindUnits";
import createDomElement from "../utils/createDomElement";
import createList from "../utils/similarCityList";

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
  // favCityDiv.addEventListener("click", () => {console.log('test')});
  return favCityDiv;
}

/**
 *
 * @returns {HTMLDivElement} divFavouriteCities
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
 * @returns {HTMLDivElement} divSearch
 */
function createDivSearch() {
  const divSearch = createDomElement("div", "searchDiv");
  divSearch.innerHTML = `
   <form class="searchForm">
         <input class="search" type="text" placeholder="Search">
         <input class="submit" type="submit" value="" style="background: url(${searchImg}) no-repeat">
   </form>`;
  return divSearch;
}

/**
 * 
 * @returns {HTMLDivElement} favourite page
 */
function createfavouritePage() {
  if (localStorage.getItem("favouriteCitiesArr") === null) {
    localStorage.setItem("favouriteCitiesArr", JSON.stringify([]));
  }
  const divFavouritePage = createDomElement("div", "favouritePage");
  const divSearch = createDivSearch();
  const divFavouriteCities = createDivFavouriteCities();

  divFavouritePage.append(divSearch);
  divFavouritePage.append(divFavouriteCities);

  divFavouritePage.querySelector(".searchForm").addEventListener("input", (event) => createList(event));
  divFavouritePage.querySelector(".searchForm").addEventListener("submit", () => {
    const newFavouriteCitiesDiv = createDivFavouriteCities();
    document.querySelector('.favouritePage').lastChild.remove();
    document.querySelector('.favouritePage').append(newFavouriteCitiesDiv);
    divFavouritePage.querySelector(".search").value = '';
  });
  return divFavouritePage;
}

export default createfavouritePage;
