const homeButton = document.querySelector("#homeButton");
const favouriteButton = document.querySelector("#favouriteButton");
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
      favouriteButton.setAttribute("fill", inactivColor);
      settingButton.setAttribute("fill", inactivColor);
      break;
    case '#favourite':
      homeButton.setAttribute("fill", inactivColor);
      favouriteButton.setAttribute("fill", activColor);
      settingButton.setAttribute("fill", inactivColor);
      break;
    case '#setting':
      homeButton.setAttribute("fill", inactivColor);
      favouriteButton.setAttribute("fill", inactivColor);
      settingButton.setAttribute("fill", activColor);
      break;
    default:
      break;
  }
}

export default setColorControlButtons;
