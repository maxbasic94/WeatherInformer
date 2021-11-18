import searchImg from '../images/search.png'

function createSearchInput() {
   const searchInput = document.createElement('input');
   searchInput.className = 'search';
   searchInput.type = 'text';
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

function createDivSearch() {
   const divSearch = document.createElement('div');
   const searchInput = createSearchInput();
   const submitInput = createSubmitInput();

   divSearch.className = 'searchDiv';
   divSearch.append(searchInput);
   divSearch.append(submitInput);
   return divSearch;   
}

function createDivFavouriteCities() {
   const divFavouriteCities = document.createElement('div');
   divFavouriteCities.className = 'favouriteCities';
   return divFavouriteCities;
}

function createfavouritePage() {
   const divFavouritePage = document.createElement('div');
   const divSearch = createDivSearch();
   const divFavouriteCities = createDivFavouriteCities();

   divFavouritePage.className = 'favouritePage'
   divFavouritePage.append(divSearch);
   divFavouritePage.append(divFavouriteCities);

   document.querySelector('.app').prepend(divFavouritePage);
}

export default createfavouritePage;