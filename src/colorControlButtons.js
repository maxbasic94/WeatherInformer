const homeButton = document.querySelector('#homeButton');
const favouriteButton = document.querySelector('#favouriteButton');
const settingButton = document.querySelector('#settingButton');

function setColorControlButtons(color1, color2, color3) {
    favouriteButton.setAttribute('fill', color1);
    homeButton.setAttribute('fill', color2);
    settingButton.setAttribute('fill', color3);
}

export default setColorControlButtons;