import searchImg from '../images/search.png'

// const searchCitiesUrl = `http://autocomplete.travelpayouts.com/places2?term=Minsk&locale=en&types[]=city&callback=function`

function createSearchInput() {
   const searchInput = document.createElement('input');
   searchInput.className = 'search';
   searchInput.type = 'text';
   searchInput.placeholder = 'Search'
   return searchInput;
}

function createSubmitInput() {
   const submitInput = document.createElement('input');
   submitInput.className = 'submit';
   submitInput.type = 'submit';
   submitInput.value = ''
   submitInput.style.background = `url(${searchImg}) no-repeat`;
   return submitInput;
}

function createSearchForm() {
   const searchForm = document.createElement('form');
   const searchInput = createSearchInput();
   const submitInput = createSubmitInput();

   searchForm.className = 'searchForm';
   searchForm.append(searchInput);
   searchForm.append(submitInput);
   return searchForm;
}

function createDivSearch() {
   const divSearch = document.createElement('div');
   const searchForm = createSearchForm()

   divSearch.className = 'searchDiv';
   divSearch.append(searchForm);
   return divSearch;   
}

function createDivFavouriteCities() {
   const divFavouriteCities = document.createElement('div');
   divFavouriteCities.className = 'favouriteCities';
   return divFavouriteCities;
}

async function getData(url) {
   const response = await fetch(url, {mode: 'cors'});
   if (response.status == 200) {
       const json = await response.json();
       return json;
   }
   throw new Error(response.status);
}

function createfavouritePage() {
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
      const data = getData(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${inputValue}&days=4&aqi=no&alerts=no`);
      data
         .then(data => console.log(data))
         .catch(alert);
      document.querySelector('.search').value = '';
   })
}   

export default createfavouritePage;