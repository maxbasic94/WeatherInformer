import searchImg from '../images/search.png';
import createHomePage from './homePage';
import setColorControlButtons from './colorControlButtons';
import getResponseData from './getResponse';
import windSpeed from '../images/windSpeed.png';
import humidity from '../images/humidity.png';
import getTempWindUnits from './tempWindUnits';

function createFavCityDiv(favCity) {
   const favCityDiv = document.createElement('div');
   favCityDiv.className = 'favCityDiv';
   favCity
      .then(data => {
         const {location, current} = data;
         const {temperatureUnit = 'c', windSpeedUnit = 'kph'} = localStorage;
         const {tempRequest, tempSign, windUnit, windSpeedRequest} = getTempWindUnits(temperatureUnit, windSpeedUnit, current);    
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
   favCityDiv.addEventListener('click', (event) => {
      const cityName = event.currentTarget.childNodes[3].innerText;
      createHomePage(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${cityName}&days=4&aqi=no&alerts=no`)
   })
   return favCityDiv;
}

function createDivFavouriteCities() {
   const divFavouriteCities = document.createElement('div');
   const favCityNamesArray = JSON.parse(localStorage.getItem("favouriteCitiesArr"));
   divFavouriteCities.className = 'favouriteCities';
   if (favCityNamesArray.length > 0) {
      favCityNamesArray.forEach(favCity => {
         divFavouriteCities.append(createFavCityDiv( getResponseData(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${favCity}&days=4&aqi=no&alerts=no`)))
      });
   }
   return divFavouriteCities;
}

function createDivSearch() {
   const divSearch = document.createElement('div');
   divSearch.className = 'searchDiv';
   divSearch.innerHTML = `
   <form class="searchForm">
         <input class="search" type="text" placeholder="Search">
         <input class="submit" type="submit" value="" style="background: url(${searchImg}) no-repeat">
   </form>
   `;
   return divSearch;   
}

async function getSimilarCities(searchCity) {
   const response = await fetch(`https://autocomplete.travelpayouts.com/places2?term=${searchCity}&locale=en&types[]=city&callback=json`, {mode: 'cors'});
   if (response.status == 200) {
      const text = await response.text();
      return text;
   }
   throw new Error(response.status);
}

function getStarColor(name) {
   const cityNamesArray = JSON.parse(localStorage.getItem("favouriteCitiesArr"));
   if(!cityNamesArray || cityNamesArray.length === 0) {return 'white'}
   if(cityNamesArray.includes(name)) {
      return 'gold';
   } else {
      return 'white';
   }
}

function createCitiesList(citiesArr) {
   if (document.querySelector('.favouritePage').lastChild.className !== 'searchDiv') {document.querySelector('.favouritePage').lastChild.remove()}
   let favouriteCitiesArr = JSON.parse(localStorage.getItem("favouriteCitiesArr"));
   const similarCitiesDiv = document.createElement('div');
   const citiesList = document.createElement('ul');
   similarCitiesDiv.className = 'similarCitiesDiv';
   citiesList.className = 'citiesList';
   citiesArr.slice(0, 5).forEach((item, index) => {
      const {name, country_name} = item;
      let starColor = getStarColor(name);
      const li = document.createElement('li');
      li.setAttribute('class', 'similarCityLi');
      li.setAttribute('id', index);
      li.innerHTML = `${name}, ${country_name} <svg class="addToFavourite" fill=${starColor} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172">
         <path d="M86,3.44c-1.41918,0.00123 -2.69197,0.87377 -3.20485,2.19703l-21.21109,54.68391l-58.31875,2.97641c-1.42104,0.07193 -2.65119,1.01123 -3.09488,2.36314c-0.44369,1.35192 -0.00937,2.83748 1.09269,3.73748l45.41203,37.12781l-14.91562,56.33672c-0.36448,1.37274 0.15208,2.82834 1.30034,3.66425c1.14826,0.83591 2.69217,0.88027 3.88654,0.11168l49.0536,-31.48406l49.0536,31.48406c1.19437,0.76859 2.73828,0.72423 3.88654,-0.11168c1.14826,-0.83591 1.66481,-2.29152 1.30034,-3.66425l-14.91562,-56.33672l45.41203,-37.12781c1.10206,-0.9 1.53638,-2.38556 1.09269,-3.73748c-0.44369,-1.35192 -1.67383,-2.29121 -3.09488,-2.36314l-58.31875,-2.97641l-21.21109,-54.68391c-0.51288,-1.32326 -1.78567,-2.1958 -3.20485,-2.19703zM86,16.38703l18.80578,48.49594c0.49155,1.26528 1.68113,2.12325 3.03687,2.19031l51.6336,2.64047l-40.21844,32.88828c-1.04357,0.85326 -1.49268,2.23736 -1.14891,3.54078l13.21578,49.92703l-43.46359,-27.90297c-1.13361,-0.72914 -2.58858,-0.72914 -3.72219,0l-43.46359,27.90297l13.21578,-49.92703c0.34378,-1.30342 -0.10534,-2.68753 -1.14891,-3.54078l-40.21844,-32.88828l51.6336,-2.64047c1.35575,-0.06706 2.54532,-0.92503 3.03687,-2.19031z"></path>
         </svg>`;
      citiesList.append(li);
      li.addEventListener('click', (event) => {
         if (event.target.tagName === 'svg' || event.target.tagName ==='path') {
            let svgStar;
            if (event.target.tagName ==='path') {
               svgStar = event.target.parentNode
            } else {
               svgStar = event.target;
            }
            if (svgStar.getAttribute('fill') === 'white') {
                  svgStar.setAttribute('fill', 'gold');
                  if (!favouriteCitiesArr.includes(event.currentTarget.textContent.split(',')[0])) {
                     favouriteCitiesArr.push(event.currentTarget.textContent.split(',')[0]);
                  }
               } else {
                  svgStar.setAttribute('fill', 'white');
                  const index = favouriteCitiesArr.indexOf(event.currentTarget.textContent.split(',')[0]);
                  if (index > -1) {
                     favouriteCitiesArr.splice(index, 1);
                  }
               }
         } else {
            const city = event.currentTarget.textContent.split(',')[0];
            createHomePage(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${city}&days=4&aqi=no&alerts=no`);   
         }
         localStorage.setItem('favouriteCitiesArr', JSON.stringify(favouriteCitiesArr));  
      })
   });
   similarCitiesDiv.append(citiesList);
   document.querySelector('.favouritePage').append(similarCitiesDiv);
}

function createfavouritePage() {
   if(JSON.parse(localStorage.getItem("favouriteCitiesArr") === null)) {
      localStorage.setItem('favouriteCitiesArr', JSON.stringify([]));
   }
   document.querySelector('.app').firstChild.remove();
   setColorControlButtons("#a37695", "#37515e", "#37515e");
   const divFavouritePage = document.createElement('div');
   const divSearch = createDivSearch();
   const divFavouriteCities = createDivFavouriteCities();

   divFavouritePage.className = 'favouritePage'
   divFavouritePage.append(divSearch);
   divFavouritePage.append(divFavouriteCities);

   document.querySelector('.app').prepend(divFavouritePage);
   document.querySelector('.searchForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const inputValue = document.querySelector('.search').value;
      if (!inputValue) return;
      const similarCitiesPromise = getSimilarCities(inputValue);
      similarCitiesPromise
         .then(data => createCitiesList(JSON.parse(data.slice(5).slice(0, -2))))
         .catch(alert);
      document.querySelector('.search').value = '';
   })
}   

export default createfavouritePage;