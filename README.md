# WeatherInformer

This application represents weather informer. \
You can check how it works here: https://weather-informer.netlify.app

## Task

Link on the document: https://docs.google.com/document/d/1GLfIU93NLco1XkdUXnje-kPpvEEal6Q_jCXv4keKU_U/edit#

## How to use

#### Home page
When you start the application, it will show you the weather in the city in which you are now\
On "Home page" you can see:
* Current city
* Temperature
* Condition
* Condition's description
* Humidity
* Pressure
* Wind speed
* Sunrise and sunset times
* Today and next 2 days forecast 

#### Setting page
For change temperature or wind speed units go to "Setting page" \
On "Setting page" you can see:
* Your current location
* Condition
* Condition's description
* Temperature
* Wind speed
* Humidity
* Pressure
* Temperature and wind speed units settings 

For change temperature unit on "Fahrenheit" click on inscription "Celsius" \
For change temperature unit on "Celsius" click on inscription "Fahrenheit" \
For change wind speed unit on "mph" click on inscription "kph" \
For change wind speed unit on "kph" click on inscription "mph" 

#### Favourite page
On "Favourite page" you can see:
* Input for finding the city you need
* Your favourite cities

For search city enter the name of the city in the input field. \
After that you will see cities matching the name. \
Click on star icon for add this city to favorite cities list

## Folders structure
.
    ├── dist                           # folder for project build
    ├── images                         # folder for contain images
    ├── node_modules
    ├── src                            # folder for contain source files
    │   ├── pages
    │   │   ├── favouritePage.js
    │   │   ├── homePage.js
    │   │   ├── notFoundPage.js
    │   │   └── settingPage.js                       
    │   ├── tests                      # folder for contain unit tests 
    │   │   ├── homePage.test.js
    │   │   └──
    │   ├── app.js
    │   ├── colorControlButtons.js
    │   ├── createDomElement.js
    │   ├── getResponse.js
    │   ├── similarCityList.js
    │   └── tempWindUnits.js                     
    ├── .babelrc
    ├── .eslintrc.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── webpack.config.js


    
    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── docs                    # Documentation files (alternatively `doc`)
    ├── src                     # Source files (alternatively `lib` or `app`)
    ├── test                    # Automated tests (alternatively `spec` or `tests`)
    ├── tools                   # Tools and utilities
    ├── LICENSE
    └── README.md
