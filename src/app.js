import createHomePage from "./homePage";
import createfavouritePage from "./favouritePage";
import createSettingPage from "./settingPage";

const controlMenu = document.querySelector('.controlMenu');
const homeButton = document.querySelector('#homeButton');
const favouriteButton = document.querySelector('#favouriteButton');
const settingButton = document.querySelector('#settingButton');
const url = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`;

function setColorControlButtons(color1, color2, color3) {
    favouriteButton.setAttribute('fill', color1);
    homeButton.setAttribute('fill', color2);
    settingButton.setAttribute('fill', color3);
}

function checkTarget(target) {
    if (target.tagName === 'path') {
        return target.parentNode;
    } else {
        return target;
    }
}

controlMenu.addEventListener('click', ({target}) => {
    const clickedButton = checkTarget(target);
    switch (clickedButton.id) {
        case 'favouriteButton':
            document.querySelector('.app').firstChild.remove();
            createfavouritePage();
            setColorControlButtons("#a37695", "#37515e", "#37515e");
            break;
        case 'homeButton':
            document.querySelector('.app').firstChild.remove();
            createHomePage(url);
            setColorControlButtons("#37515e", "#a37695", "#37515e")
            break;
        case 'settingButton':
            document.querySelector('.app').firstChild.remove();
            createSettingPage();
            setColorControlButtons("#37515e", "#37515e", "#a37695")
            break;
        default:
            break;
    }
});

// createSettingPage();
// createfavouritePage();
createHomePage(url);