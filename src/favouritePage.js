function createfavouritePage() {
   const divFavouritePage = document.createElement('div');
   divFavouritePage.className = 'favouritePage'
   divFavouritePage.innerHTML = ` 
   <div class="search"></div>
   <div class="favouriteCities"></div>`
   document.querySelector('.app').prepend(divFavouritePage);
}

export default createfavouritePage;