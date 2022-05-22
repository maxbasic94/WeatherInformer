/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./images/barometer.png":
/*!******************************!*\
  !*** ./images/barometer.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/dabc17b153f2bd421935d6fa8798138a.png\");\n\n//# sourceURL=webpack://weatherinformer/./images/barometer.png?");

/***/ }),

/***/ "./images/humidity.png":
/*!*****************************!*\
  !*** ./images/humidity.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/0e56d05e08c9cf49890107e6c15082f0.png\");\n\n//# sourceURL=webpack://weatherinformer/./images/humidity.png?");

/***/ }),

/***/ "./images/search.png":
/*!***************************!*\
  !*** ./images/search.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/94d69086bdb47533fb08532ab762a13f.png\");\n\n//# sourceURL=webpack://weatherinformer/./images/search.png?");

/***/ }),

/***/ "./images/sunrise.png":
/*!****************************!*\
  !*** ./images/sunrise.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/890ef3748a6f3de6995b177cec5204b2.png\");\n\n//# sourceURL=webpack://weatherinformer/./images/sunrise.png?");

/***/ }),

/***/ "./images/sunset.png":
/*!***************************!*\
  !*** ./images/sunset.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/bda8907dac772b8e6efe3c01a042c92a.png\");\n\n//# sourceURL=webpack://weatherinformer/./images/sunset.png?");

/***/ }),

/***/ "./images/windSpeed.png":
/*!******************************!*\
  !*** ./images/windSpeed.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/663cc253f315e911a7394fb231b3b207.png\");\n\n//# sourceURL=webpack://weatherinformer/./images/windSpeed.png?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/router */ \"./src/utils/router.js\");\n\n\n\nconst routes = {\n  \"#home\": _utils_router__WEBPACK_IMPORTED_MODULE_0__.homeDiv,\n  \"#favourite\": _utils_router__WEBPACK_IMPORTED_MODULE_0__.favouriteDiv,\n  \"#setting\": _utils_router__WEBPACK_IMPORTED_MODULE_0__.settingDiv,\n  \"#notFaund\": _utils_router__WEBPACK_IMPORTED_MODULE_0__.notFaundPage,\n};\n\nwindow.onload = () => {\n  window.location.hash = \"#home\";\n  (0,_utils_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(routes);\n};\n\n\nwindow.addEventListener(\"hashchange\", () => (0,_utils_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(routes));\n\n//# sourceURL=webpack://weatherinformer/./src/app.js?");

/***/ }),

/***/ "./src/pages/favouritePage.js":
/*!************************************!*\
  !*** ./src/pages/favouritePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/search.png */ \"./images/search.png\");\n/* harmony import */ var _utils_getResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getResponse */ \"./src/utils/getResponse.js\");\n/* harmony import */ var _images_windSpeed_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/windSpeed.png */ \"./images/windSpeed.png\");\n/* harmony import */ var _images_humidity_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/humidity.png */ \"./images/humidity.png\");\n/* harmony import */ var _utils_tempWindUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/tempWindUnits */ \"./src/utils/tempWindUnits.js\");\n/* harmony import */ var _utils_createDomElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/createDomElement */ \"./src/utils/createDomElement.js\");\n/* harmony import */ var _utils_similarCityList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/similarCityList */ \"./src/utils/similarCityList.js\");\n\n\n\n\n\n\n\n\n/**\n *\n * @param {object} location\n * @param {object} current\n * @param {number} tempRequest\n * @param {string} tempSign\n * @param {string} windUnit\n * @param {number} windSpeedRequest\n * @returns {string} innerHTML\n */\nfunction insertContentToDivFavCity(\n  location,\n  current,\n  tempRequest,\n  tempSign,\n  windUnit,\n  windSpeedRequest\n) {\n  return `\n  <div class=\"favCityTempDiv\">${tempRequest}${tempSign}<img src=\"https:${current.condition.icon}\"  height=\"50px\" width=\"50px\"></div>\n  <div class=\"favCityLocDiv\">${location.name}</div>\n  <div class=\"favCountryLocDiv\">${location.country}</div>\n  <div class=\"favCityExtraInfoDiv\">\n     <div class=\"humidity\"><img сlass='imgHumPresSpeed' src=\"${_images_humidity_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}\" alt=\"Hum\" height=\"30px\" width=\"30px\">${current.humidity}%</div>\n     <div class=\"windSpeed\"><img сlass='imgHumPresSpeed' src=\"${_images_windSpeed_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" height=\"30px\" width=\"30px\">${windSpeedRequest} ${windUnit}</div>\n  </div>\n  `;\n}\n\n/**\n *\n * @param {promise} favCity\n * @returns {HTMLDivElement} favCityDiv\n */\nfunction createFavCityDiv(favCity) {\n  const favCityDiv = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"div\", \"favCityDiv\");\n  favCity\n    .then((data) => {\n      const { location, current } = data;\n      const { temperatureUnit = \"c\", windSpeedUnit = \"kph\" } = localStorage;\n      const { tempRequest, tempSign, windUnit, windSpeedRequest } =\n        (0,_utils_tempWindUnits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(temperatureUnit, windSpeedUnit, current);\n      favCityDiv.innerHTML = insertContentToDivFavCity(\n        location,\n        current,\n        tempRequest,\n        tempSign,\n        windUnit,\n        windSpeedRequest\n      );\n    })\n    .catch(alert);\n  // favCityDiv.addEventListener(\"click\", ({currentTarget}) => {\n  //   const cityName = currentTarget.children[1].textContent;\n  //   const newUrl = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${cityName}&days=4&aqi=no&alerts=no`;\n  //   localStorage.setItem('url', newUrl);\n  //   window.location.hash = '#home';\n  // });\n  return favCityDiv;\n}\n\n/**\n *\n * @returns {HTMLDivElement} divFavouriteCities\n */\nfunction createDivFavouriteCities() {\n  const divFavouriteCities = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"div\", \"favouriteCities\");\n  const favCityNamesArray = JSON.parse(\n    localStorage.getItem(\"favouriteCitiesArr\")\n  );\n  if (favCityNamesArray.length > 0) {\n    favCityNamesArray.forEach((favCity) => {\n      divFavouriteCities.append(\n        createFavCityDiv(\n          (0,_utils_getResponse__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n            `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${favCity}&days=4&aqi=no&alerts=no`\n          )\n        )\n      );\n    });\n  }\n  return divFavouriteCities;\n}\n\n/**\n *\n * @returns {string} innerHTML\n */\nfunction insertContentToDivSearch() {\n  return `\n  <form class=\"searchForm\">\n        <input class=\"search\" type=\"text\" placeholder=\"Search\">\n        <input class=\"submit\" type=\"submit\" value=\"\" style=\"background: url(${_images_search_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}) no-repeat\">\n  </form>`;\n}\n\n/**\n *\n * @returns {HTMLDivElement} divSearch\n */\nfunction createDivSearch() {\n  const divSearch = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"div\", \"searchDiv\");\n  divSearch.innerHTML = insertContentToDivSearch();\n  return divSearch;\n}\n\n/**\n * \n * @param {HTMLDivElement} divFavouritePage \n */\nfunction performSearchForm(divFavouritePage) {\n  const newFavouriteCitiesDiv = createDivFavouriteCities();\n  document.querySelector(\".favouritePage\").lastChild.remove();\n  document.querySelector(\".favouritePage\").append(newFavouriteCitiesDiv);\n  divFavouritePage.querySelector(\".search\").value = \"\";\n}\n\n/**\n *\n * @returns {HTMLDivElement} favourite page\n */\nfunction createfavouritePage() {\n  if (localStorage.getItem(\"favouriteCitiesArr\") === null) {\n    localStorage.setItem(\"favouriteCitiesArr\", JSON.stringify([]));\n  }\n  const divFavouritePage = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"div\", \"favouritePage\");\n  const divSearch = createDivSearch();\n  const divFavouriteCities = createDivFavouriteCities();\n\n  divFavouritePage.append(divSearch, divFavouriteCities);\n\n  divFavouritePage\n    .querySelector(\".searchForm\")\n    .addEventListener(\"input\", (event) => (0,_utils_similarCityList__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(event));\n  divFavouritePage\n    .querySelector(\".searchForm\")\n    .addEventListener(\"submit\", () => performSearchForm(divFavouritePage));\n  return divFavouritePage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createfavouritePage);\n\n\n//# sourceURL=webpack://weatherinformer/./src/pages/favouritePage.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_humidity_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/humidity.png */ \"./images/humidity.png\");\n/* harmony import */ var _images_barometer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/barometer.png */ \"./images/barometer.png\");\n/* harmony import */ var _images_windSpeed_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/windSpeed.png */ \"./images/windSpeed.png\");\n/* harmony import */ var _images_sunrise_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/sunrise.png */ \"./images/sunrise.png\");\n/* harmony import */ var _images_sunset_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/sunset.png */ \"./images/sunset.png\");\n/* harmony import */ var _utils_tempWindUnits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/tempWindUnits */ \"./src/utils/tempWindUnits.js\");\n/* harmony import */ var _utils_getResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getResponse */ \"./src/utils/getResponse.js\");\n/* harmony import */ var _utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/createDomElement */ \"./src/utils/createDomElement.js\");\n\n\n\n\n\n\n\n\n\n/**\n *\n * @param {string} nameDay\n * @param {number} maxTemp\n * @param {number} minTemp\n * @param {string} tempSign\n * @param {object} day\n * @returns {strinf} InnexHtml\n */\nfunction insertContentToDivNextDay(nameDay, maxTemp, minTemp, tempSign, day) {\n  return `\n  <div class=\"nameNextDay\">${nameDay}</div>\n  <div class=\"iconNextDay\"><img src=\"https:${day.day.condition.icon}\"></div>\n  <div class=\"maxTempNextDay\">${maxTemp}${tempSign}</div>\n  <div class=\"minTempNextDay\">${minTemp}${tempSign}</div>`;\n}\n\n/**\n *\n * @param {Object} day\n * @param {string} tempSign\n * @param {string} tempUnit\n * @returns {HTMLDivElement} divNextDay\n */\nfunction createDivWithNextDaysInfo(day, tempSign, tempUnit) {\n  const nameDay = getFullNameWeekDay(new Date(day.date).getDay());\n  const divNextDay = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"nextDay\");\n  let maxTemp, minTemp;\n  if (tempUnit === \"Celsius\") {\n    maxTemp = day.day.maxtemp_c;\n    minTemp = day.day.mintemp_c;\n  } else {\n    maxTemp = day.day.maxtemp_f;\n    minTemp = day.day.mintemp_f;\n  }\n  divNextDay.innerHTML = insertContentToDivNextDay(\n    nameDay,\n    maxTemp,\n    minTemp,\n    tempSign,\n    day\n  );\n  return divNextDay;\n}\n\n/**\n *\n * @param {Object} location\n * @param {Object} current\n * @param {string} tempRequest\n * @param {string} tempSign\n * @returns {HTMLDivElement} divCurrentInfo\n */\nfunction getDivWithCurrentInfo(location, current, tempRequest, tempSign) {\n  const divCurrentInfo = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"currentInfo\");\n  divCurrentInfo.innerHTML = `\n        <div class=\"city\">${location.name}</div>\n        <div class=\"currentTemp\">${tempRequest}${tempSign}<img src=\"https:${current.condition.icon}\"></div>\n        <div class=\"currentCondition\">${current.condition.text}</div>`;\n  return divCurrentInfo;\n}\n\n/**\n *\n * @param {Object} current\n * @param {string} windUnit\n * @param {string} windSpeedRequest\n * @returns {HTMLDivElement} divHumPresSpeed\n */\nfunction getDivWithАdditionalInfo(current, windUnit, windSpeedRequest) {\n  const divHumPresSpeed = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"humPresSpeed\");\n  divHumPresSpeed.innerHTML = `\n    <div class=\"humidity\"><img сlass='imgHumPresSpeed' src=\"${_images_humidity_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\" alt=\"Hum\" height=\"30px\" width=\"30px\">${current.humidity} %</div>\n    <div class=\"pressure\"><img сlass='imgHumPresSpeed' src=\"${_images_barometer_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Pres\" height=\"30px\" width=\"30px\">${current.pressure_mb} mBar</div>\n    <div class=\"windSpeed\"><img сlass='imgHumPresSpeed' src=\"${_images_windSpeed_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" height=\"30px\" width=\"30px\">${windSpeedRequest} ${windUnit}</div>`;\n  return divHumPresSpeed;\n}\n\n/**\n *\n * @param {Object} forecast\n * @returns {HTMLDivElement} divSun\n */\nfunction getDivWithSunriseSunsetInfo(forecast) {\n  const divSun = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"sun\");\n  divSun.innerHTML = `\n    <div class=\"sunrise\"><img class=\"sunrise\" src=\"${_images_sunrise_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}\" alt=\"sunrise\" height=\"30px\" width=\"30px\">${forecast.forecastday[0].astro.sunrise}</div>\n    <div class=\"sunset\">${forecast.forecastday[0].astro.sunset}<img class=\"sunset\" src=\"${_images_sunset_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}\" alt=\"sunset\" height=\"30px\" width=\"30px\"></div>`;\n  return divSun;\n}\n\n/**\n *\n * @param {number} temp\n * @param {string} tempSign\n * @param {object} day\n * @returns {string} innerHTML\n */\nfunction insertContetnToDivTimeGroup(temp, tempSign, day) {\n  return `\n  <div class=\"time\">${day.time.substr(-5)}</div>\n  <div class=\"icon\"><img src=\"https:${day.condition.icon}\"></div>\n  <div class=\"time\">${temp}${tempSign}</div>`;\n}\n\n/**\n *\n * @param {Object} day\n * @param {string} tempUnit\n * @param {string} tempSign\n * @returns {HTMLDivElement} divGroup\n */\nfunction createDivWithTodayForecast(day, tempUnit, tempSign) {\n  const divGroup = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"timeGroup\");\n  let temp;\n  if (tempUnit === \"Celsius\") {\n    temp = day.temp_c;\n  } else {\n    temp = day.temp_f;\n  }\n  divGroup.innerHTML = insertContetnToDivTimeGroup(temp, tempSign, day);\n  return divGroup;\n}\n\n/**\n *\n * @param {number} numDay\n * @returns {string} day of week\n */\nfunction getFullNameWeekDay(numDay) {\n  const dayNames = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n  return dayNames[numDay];\n}\n\n/**\n *\n * @param {Object} forecast\n * @param {string} tempSign\n * @param {string} tempUnit\n * @returns {HTMLDivElement} divNextDays\n */\nfunction getDivWithNextDaysForecast(forecast, tempSign, tempUnit) {\n  const divNextDays = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"nextDays\");\n  forecast.forecastday\n    .slice(1)\n    .forEach((day) =>\n      divNextDays.append(createDivWithNextDaysInfo(day, tempSign, tempUnit))\n    );\n  return divNextDays;\n}\n\n/**\n *\n * @param {Object} forecast\n * @param {Object} current\n * @param {string} tempUnit\n * @param {string} tempSign\n * @returns {HTMLDivElement} divTodayForecast\n */\nfunction getDivWithTodayForecats(forecast, current, tempUnit, tempSign) {\n  const divTodayForecast = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"today\");\n  const divdayForecast = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"dayForecast\");\n  const currentTime = current.last_updated.slice(-5).split(\":\")[0];\n  const arrTodayForecast = forecast.forecastday[0].hour\n    .slice(currentTime)\n    .concat(forecast.forecastday[1].hour)\n    .splice(1, 24);\n  divTodayForecast.innerHTML = `<div class=\"caption\">Today</div>`;\n\n  arrTodayForecast.forEach((hour) =>\n    divdayForecast.append(createDivWithTodayForecast(hour, tempUnit, tempSign))\n  );\n  divTodayForecast.append(divdayForecast);\n  return divTodayForecast;\n}\n\n/**\n *\n * @param {Event} event\n */\nfunction performScroll(event) {\n  event = window.event || event;\n  var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));\n  document.querySelector(\".dayForecast\").scrollLeft -= delta * 40;\n  event.preventDefault();\n}\n\n/**\n *\n * @param {Object} data\n * @param {HTMLDivElement} divInformer\n */\nfunction createPage(data, divInformer) {\n  const { location, current, forecast } = data;\n  const { temperatureUnit = \"c\", windSpeedUnit = \"kph\" } = localStorage;\n  const { tempRequest, tempSign, tempUnit, windUnit, windSpeedRequest } =\n    (0,_utils_tempWindUnits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(temperatureUnit, windSpeedUnit, current, forecast);\n\n  const divCurrentInfo = getDivWithCurrentInfo(\n    location,\n    current,\n    tempRequest,\n    tempSign\n  );\n  const divHumPresSpeed = getDivWithАdditionalInfo(\n    current,\n    windUnit,\n    windSpeedRequest\n  );\n  const divSun = getDivWithSunriseSunsetInfo(forecast);\n  const divTodayForecast = getDivWithTodayForecats(\n    forecast,\n    current,\n    tempUnit,\n    tempSign\n  );\n  const divNextDays = getDivWithNextDaysForecast(forecast, tempSign, tempUnit);\n\n  divInformer.append(\n    divCurrentInfo,\n    divHumPresSpeed,\n    divSun,\n    divTodayForecast,\n    divNextDays\n  );\n\n  document\n    .querySelector(\".dayForecast\")\n    .addEventListener(\"mousewheel\", (event) => performScroll(event), false);\n}\n\n/**\n *\n * @param {string} url\n * @returns {HTMLDivElement} home page\n */\nfunction createHomePage(url) {\n  const divInformer = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"div\", \"informer\");\n\n  (0,_utils_getResponse__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(url)\n    .then((data) => createPage(data, divInformer))\n    .catch(alert);\n\n  return divInformer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n\n//# sourceURL=webpack://weatherinformer/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/notFoundPage.js":
/*!***********************************!*\
  !*** ./src/pages/notFoundPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createDomElement */ \"./src/utils/createDomElement.js\");\n\n\n/**\n *\n * @returns {HTMLDivElement} notFound page\n */\nfunction createNotFaundPageDiv() {\n  const notFaundPageDiv = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"notFaundDiv\");\n  notFaundPageDiv.textContent = \"Page not faund\";\n  return notFaundPageDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNotFaundPageDiv);\n\n\n//# sourceURL=webpack://weatherinformer/./src/pages/notFoundPage.js?");

/***/ }),

/***/ "./src/pages/settingPage.js":
/*!**********************************!*\
  !*** ./src/pages/settingPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_humidity_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/humidity.png */ \"./images/humidity.png\");\n/* harmony import */ var _images_barometer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/barometer.png */ \"./images/barometer.png\");\n/* harmony import */ var _images_windSpeed_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/windSpeed.png */ \"./images/windSpeed.png\");\n/* harmony import */ var _utils_tempWindUnits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/tempWindUnits */ \"./src/utils/tempWindUnits.js\");\n/* harmony import */ var _utils_getResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getResponse */ \"./src/utils/getResponse.js\");\n/* harmony import */ var _utils_createDomElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/createDomElement */ \"./src/utils/createDomElement.js\");\n\n\n\n\n\n\n\nfunction replaseSettingPage() {\n  const newSettingPage = createSettingPage();\n  document.querySelector(\".app\").innerHTML = \"\";\n  document.querySelector(\".app\").append(newSettingPage);\n}\n\nfunction changeTemperatureUnit() {\n  if (document.querySelector(\".tempSettingUnit\").textContent === \"Celsius\") {\n    document.querySelector(\".tempSettingUnit\").textContent = \"Fahrenheit\";\n    localStorage.setItem(\"temperatureUnit\", \"f\");\n  } else {\n    document.querySelector(\".tempSettingUnit\").textContent = \"Celsius\";\n    localStorage.setItem(\"temperatureUnit\", \"c\");\n  }\n  replaseSettingPage();\n}\n\nfunction changeWindSpeedUnit() {\n  if (document.querySelector(\".windSpeedSettingUnit\").textContent === \"kph\") {\n    document.querySelector(\".windSpeedSettingUnit\").textContent = \"mph\";\n    localStorage.setItem(\"windSpeedUnit\", \"mph\");\n  } else {\n    document.querySelector(\".windSpeedSettingUnit\").textContent = \"kph\";\n    localStorage.setItem(\"windSpeedUnit\", \"kph\");\n  }\n  replaseSettingPage();\n}\n\n/**\n *\n * @param {string} tempUnit\n * @param {number} tempRequest\n * @param {string} tempSign\n * @param {string} windUnit\n * @param {number} windSpeedRequest\n * @param {object} location\n * @param {object} current\n * @returns {string} innerHTML\n */\nfunction insertContentToDivSettingPage(\n  tempUnit,\n  tempRequest,\n  tempSign,\n  windUnit,\n  windSpeedRequest,\n  location,\n  current\n) {\n  return `\n  <div class=\"locationDiv\">\n      <div class=\"locationCaptionDiv\">Your Location Now</div>\n      <div class=\"locationDescriptionDiv\">${location.name}, ${location.country}</div>\n  </div>\n  <div class=\"locationInfoDiv\">\n      <div class=\"locationIconDiv\"><img class=\"sunrise\" src=\"https:${current.condition.icon}\" alt=\"sunrise\" height=\"150px\" width=\"150px\"></div>\n      <div class=\"locationIconDescriptionDiv\">${current.condition.text}</div>\n      <div class=\"localTempDiv\">${tempRequest}${tempSign}</div>\n  </div>\n  <div class=\"locationExtraInfoDiv\">\n      <div class=\"windSpeed\"><img сlass='imgHumPresSpeed' src=\"${_images_windSpeed_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" height=\"30px\" width=\"30px\">${windSpeedRequest} ${windUnit}</div>\n      <div class=\"humidity\"><img сlass='imgHumPresSpeed' src=\"${_images_humidity_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}\" alt=\"Hum\" height=\"30px\" width=\"30px\">${current.humidity} %</div>\n      <div class=\"pressure\"><img сlass='imgHumPresSpeed' src=\"${_images_barometer_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Pres\" height=\"30px\" width=\"30px\">${current.pressure_mb} mBar</div>\n  </div>\n  <div class=\"locationEditDiv\">\n      <div class=\"tempSettingDiv\">\n          <div class=\"tempSettingCaption\">Temperature</div>\n          <div class=\"tempSettingUnit\">${tempUnit}</div>\n      </div>\n      <div class=\"speedWindSettingDiv\">\n          <div class=\"windSpeedSettingCaption\">Wind Speed</div>\n          <div class=\"windSpeedSettingUnit\">${windUnit}</div>\n      </div>\n      <div class=\"sourceSettingDiv\">\n          <div class=\"sourceSettingCaption\">Source</div>\n          <div class=\"sourceSettingUnit\">weatherapi.com</div>\n      </div>\n  </div>`;\n}\n\n/**\n *\n * @param {object} data\n * @param {HTMLDivElement} divSettingPage\n */\nfunction createPage(data, divSettingPage) {\n  const { current, location } = data;\n  const { temperatureUnit = \"c\", windSpeedUnit = \"kph\" } = localStorage;\n  const { tempUnit, tempRequest, tempSign, windUnit, windSpeedRequest } =\n    (0,_utils_tempWindUnits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(temperatureUnit, windSpeedUnit, current);\n  divSettingPage.innerHTML = insertContentToDivSettingPage(\n    tempUnit,\n    tempRequest,\n    tempSign,\n    windUnit,\n    windSpeedRequest,\n    location,\n    current\n  );\n  divSettingPage.addEventListener(\"click\", ({ target }) => {\n    if (target.className === \"tempSettingUnit\") {\n      changeTemperatureUnit();\n    }\n    if (target.className === \"windSpeedSettingUnit\") {\n      changeWindSpeedUnit();\n    }\n  });\n}\n\n/**\n *\n * @returns {HTMLDivElement} setting page\n */\nfunction createSettingPage() {\n  const divSettingPage = (0,_utils_createDomElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"div\", \"settingPage\");\n  (0,_utils_getResponse__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\n    \"http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no\"\n  )\n    .then((data) => createPage(data, divSettingPage))\n    .catch(alert);\n\n  return divSettingPage;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSettingPage);\n\n\n//# sourceURL=webpack://weatherinformer/./src/pages/settingPage.js?");

/***/ }),

/***/ "./src/utils/colorControlButtons.js":
/*!******************************************!*\
  !*** ./src/utils/colorControlButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeButton = document.querySelector(\"#homeButton\");\nconst favouriteButton = document.querySelector(\"#favouriteButton\");\nconst settingButton = document.querySelector(\"#settingButton\");\nconst activColor = '#a37695';\nconst inactivColor = '#37515e';\n\n/**\n * \n * @param {hash} hash \n */\nfunction setColorControlButtons(hash) {\n  switch (hash) {\n    case '#home':\n      homeButton.setAttribute(\"fill\", activColor);\n      favouriteButton.setAttribute(\"fill\", inactivColor);\n      settingButton.setAttribute(\"fill\", inactivColor);\n      break;\n    case '#favourite':\n      homeButton.setAttribute(\"fill\", inactivColor);\n      favouriteButton.setAttribute(\"fill\", activColor);\n      settingButton.setAttribute(\"fill\", inactivColor);\n      break;\n    case '#setting':\n      homeButton.setAttribute(\"fill\", inactivColor);\n      favouriteButton.setAttribute(\"fill\", inactivColor);\n      settingButton.setAttribute(\"fill\", activColor);\n      break;\n    default:\n      break;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setColorControlButtons);\n\n\n//# sourceURL=webpack://weatherinformer/./src/utils/colorControlButtons.js?");

/***/ }),

/***/ "./src/utils/createDomElement.js":
/*!***************************************!*\
  !*** ./src/utils/createDomElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @param {string} elem\n * @param {string} className\n * @returns {HTMLElement}\n */\nfunction createDomElement(elem, className) {\n  const element = document.createElement(elem);\n  if (className) {\n    element.className = className;\n  }\n  return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDomElement);\n\n\n//# sourceURL=webpack://weatherinformer/./src/utils/createDomElement.js?");

/***/ }),

/***/ "./src/utils/getResponse.js":
/*!**********************************!*\
  !*** ./src/utils/getResponse.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @param {string} url\n * @returns {Promise} Promise\n */\nasync function getResponseData(url) {\n  const response = await fetch(url, { mode: \"cors\" });\n  if (response.status == 200) {\n    const json = await response.json();\n    return json;\n  }\n  if (response.status == 404) {\n    window.location.hash = \"#notFaund\";\n  }\n  throw new Error(response.status);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getResponseData);\n\n\n//# sourceURL=webpack://weatherinformer/./src/utils/getResponse.js?");

/***/ }),

/***/ "./src/utils/router.js":
/*!*****************************!*\
  !*** ./src/utils/router.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"homeDiv\": () => (/* binding */ homeDiv),\n/* harmony export */   \"favouriteDiv\": () => (/* binding */ favouriteDiv),\n/* harmony export */   \"settingDiv\": () => (/* binding */ settingDiv),\n/* harmony export */   \"notFaundPage\": () => (/* binding */ notFaundPage)\n/* harmony export */ });\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/homePage */ \"./src/pages/homePage.js\");\n/* harmony import */ var _pages_favouritePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/favouritePage */ \"./src/pages/favouritePage.js\");\n/* harmony import */ var _pages_settingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/settingPage */ \"./src/pages/settingPage.js\");\n/* harmony import */ var _colorControlButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorControlButtons */ \"./src/utils/colorControlButtons.js\");\n/* harmony import */ var _pages_notFoundPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/notFoundPage */ \"./src/pages/notFoundPage.js\");\n\n\n\n\n\n\nconst initUrl = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`;\nconst app = document.querySelector(\".app\");\nconst homeDiv = (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(initUrl);\nconst favouriteDiv = (0,_pages_favouritePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst settingDiv = (0,_pages_settingPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst notFaundPage = (0,_pages_notFoundPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n/**\n *\n * @param {Object} routes\n */\nfunction onRouteChanged(routes) {\n  app.innerHTML = \"\";\n  app.append(routes[window.location.hash]);\n  (0,_colorControlButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(window.location.hash);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onRouteChanged);\n\n\n\n//# sourceURL=webpack://weatherinformer/./src/utils/router.js?");

/***/ }),

/***/ "./src/utils/similarCityList.js":
/*!**************************************!*\
  !*** ./src/utils/similarCityList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomElement */ \"./src/utils/createDomElement.js\");\n\n\n/**\n *\n * @param {string} name\n * @returns {string} color\n */\nfunction getStarColor(name) {\n  const cityNamesArray = JSON.parse(localStorage.getItem(\"favouriteCitiesArr\"));\n  if (!cityNamesArray || cityNamesArray.length === 0) {\n    return \"white\";\n  }\n  if (cityNamesArray.includes(name)) {\n    return \"gold\";\n  } else {\n    return \"white\";\n  }\n}\n\n/**\n *\n * @param {event} event\n * @returns {HTMLElement} DOM_Node\n */\nfunction getSvgStar(event) {\n  if (event.target.tagName === \"path\") {\n    return event.target.parentNode;\n  } else {\n    return event.target;\n  }\n}\n\n/**\n * \n * @param {string} name \n * @param {string} country_name \n * @param {string} starColor \n * @returns {string} innerHTML\n */\nfunction insertContentToLi(name, country_name, starColor) {\n  return `${name}, ${country_name} <svg class=\"addToFavourite\" fill=${starColor} xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"20\" height=\"20\" viewBox=\"0 0 172 172\">\n  <path d=\"M86,3.44c-1.41918,0.00123 -2.69197,0.87377 -3.20485,2.19703l-21.21109,54.68391l-58.31875,2.97641c-1.42104,0.07193 -2.65119,1.01123 -3.09488,2.36314c-0.44369,1.35192 -0.00937,2.83748 1.09269,3.73748l45.41203,37.12781l-14.91562,56.33672c-0.36448,1.37274 0.15208,2.82834 1.30034,3.66425c1.14826,0.83591 2.69217,0.88027 3.88654,0.11168l49.0536,-31.48406l49.0536,31.48406c1.19437,0.76859 2.73828,0.72423 3.88654,-0.11168c1.14826,-0.83591 1.66481,-2.29152 1.30034,-3.66425l-14.91562,-56.33672l45.41203,-37.12781c1.10206,-0.9 1.53638,-2.38556 1.09269,-3.73748c-0.44369,-1.35192 -1.67383,-2.29121 -3.09488,-2.36314l-58.31875,-2.97641l-21.21109,-54.68391c-0.51288,-1.32326 -1.78567,-2.1958 -3.20485,-2.19703zM86,16.38703l18.80578,48.49594c0.49155,1.26528 1.68113,2.12325 3.03687,2.19031l51.6336,2.64047l-40.21844,32.88828c-1.04357,0.85326 -1.49268,2.23736 -1.14891,3.54078l13.21578,49.92703l-43.46359,-27.90297c-1.13361,-0.72914 -2.58858,-0.72914 -3.72219,0l-43.46359,27.90297l13.21578,-49.92703c0.34378,-1.30342 -0.10534,-2.68753 -1.14891,-3.54078l-40.21844,-32.88828l51.6336,-2.64047c1.35575,-0.06706 2.54532,-0.92503 3.03687,-2.19031z\"></path>\n  </svg>`;\n}\n\n/**\n *\n * @param {number} index\n * @param {string} name\n * @param {string} country_name\n * @param {string} starColor\n * @returns {HTMLLIElement} similar cities list item\n */\nfunction createCityLi(index, name, country_name, starColor) {\n  const li = document.createElement(\"li\");\n  li.setAttribute(\"class\", \"similarCityLi\");\n  li.setAttribute(\"id\", index);\n  li.innerHTML = insertContentToLi(name, country_name, starColor);\n  return li;\n}\n\n/**\n * \n * @param {Event} event \n * @param {Array} favouriteCitiesArr \n */\nfunction addCityToFavouriteList(event, favouriteCitiesArr) {\n  const cityName = event.currentTarget.textContent.split(\",\")[0];\n  if (event.target.tagName === \"svg\" || event.target.tagName === \"path\") {\n    let svgStar = getSvgStar(event);\n    if (svgStar.getAttribute(\"fill\") === \"white\") {\n      svgStar.setAttribute(\"fill\", \"gold\");\n      if (!favouriteCitiesArr.includes(cityName)) {\n        favouriteCitiesArr.push(cityName);\n      }\n    } else {\n      svgStar.setAttribute(\"fill\", \"white\");\n      const index = favouriteCitiesArr.indexOf(cityName);\n      if (index > -1) {\n        favouriteCitiesArr.splice(index, 1);\n      }\n    }\n  } //else {\n  //   localStorage.cityUrl = `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${cityName}&days=4&aqi=no&alerts=no`;\n  //   window.location.hash = \"#home\";\n  // }\n  localStorage.setItem(\n    \"favouriteCitiesArr\",\n    JSON.stringify(favouriteCitiesArr)\n  );\n}\n\n/**\n *\n * @param {Promise} citiesArr\n */\nfunction createCitiesList(citiesArr) {\n  const lastChildFavouritePage =\n    document.querySelector(\".favouritePage\").lastChild;\n  if (lastChildFavouritePage.className !== \"searchDiv\") {\n    lastChildFavouritePage.remove();\n  }\n  let favouriteCitiesArr = JSON.parse(\n    localStorage.getItem(\"favouriteCitiesArr\")\n  );\n  const similarCitiesDiv = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"similarCitiesDiv\");\n  const citiesList = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ul\", \"citiesList\");\n  citiesArr.slice(0, 5).forEach((item, index) => {\n    const { name, country_name } = item;\n    let starColor = getStarColor(name);\n    const li = createCityLi(index, name, country_name, starColor);\n    citiesList.append(li);\n    li.addEventListener(\"click\", (event) => addCityToFavouriteList(event, favouriteCitiesArr));\n  });\n  similarCitiesDiv.append(citiesList);\n  document.querySelector(\".favouritePage\").append(similarCitiesDiv);\n}\n\n/**\n *\n * @param {string} searchCity\n * @returns {Promise} city list\n */\nasync function getSimilarCities(searchCity) {\n  const response = await fetch(\n    `https://autocomplete.travelpayouts.com/places2?term=${searchCity}&locale=en&types[]=city&callback=json`,\n    { mode: \"cors\" }\n  );\n  if (response.status == 200) {\n    const text = await response.text();\n    return text;\n  }\n  throw new Error(response.status);\n}\n\n/**\n *\n * @param {event} event\n */\nfunction createList(event) {\n  event.preventDefault();\n  const inputValue = document.querySelector(\".search\").value;\n  if (!inputValue) return;\n  const similarCitiesPromise = getSimilarCities(inputValue);\n  similarCitiesPromise\n    .then((data) => createCitiesList(JSON.parse(data.slice(5).slice(0, -2))))\n    .catch(alert);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n\n//# sourceURL=webpack://weatherinformer/./src/utils/similarCityList.js?");

/***/ }),

/***/ "./src/utils/tempWindUnits.js":
/*!************************************!*\
  !*** ./src/utils/tempWindUnits.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n *\n * @param {string} temp\n * @param {string} wind\n * @param {Object} current\n * @returns {Object} units\n */\nfunction getTempWindUnits(temp, wind, current) {\n  let units = {};\n  if (temp === \"c\") {\n    units.tempUnit = \"Celsius\";\n    units.tempRequest = current.temp_c;\n    units.tempSign = \"°\";\n  } else {\n    units.tempUnit = \"Fahrenheit\";\n    units.tempRequest = current.temp_f;\n    units.tempSign = \"f\";\n  }\n  if (wind === \"kph\") {\n    units.windUnit = \"kph\";\n    units.windSpeedRequest = current.wind_kph;\n  } else {\n    units.windUnit = \"mph\";\n    units.windSpeedRequest = current.wind_mph;\n  }\n  return units;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTempWindUnits);\n\n\n//# sourceURL=webpack://weatherinformer/./src/utils/tempWindUnits.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;