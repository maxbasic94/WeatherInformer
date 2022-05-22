const homeButton = document.querySelector("#homeButton");
const favoriteButton = document.querySelector("#favoriteButton");
const settingButton = document.querySelector("#settingButton");
const activColor = '#a37695';
const inactivColor = '#37515e';

/**
 * 
 * @param {hash} hash 
 */
function setColorControlButtons(hash) {
  switch (hash) {
    case '#home':
      homeButton.setAttribute("fill", activColor);
      favoriteButton.setAttribute("fill", inactivColor);
      settingButton.setAttribute("fill", inactivColor);
      break;
    case '#favorite':
      homeButton.setAttribute("fill", inactivColor);
      favoriteButton.setAttribute("fill", activColor);
      settingButton.setAttribute("fill", inactivColor);
      break;
    case '#setting':
      homeButton.setAttribute("fill", inactivColor);
      favoriteButton.setAttribute("fill", inactivColor);
      settingButton.setAttribute("fill", activColor);
      break;
    default:
      break;
  }
}

export default setColorControlButtons;
