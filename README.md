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
    ├── dist                            # folder for project build
    ├── images                          # folder for contain images
    ├── node_modules                    # all downloaded packages from NPM in your computer for the JavaScript project that you have
    ├── src                             # folder for contain source files
    │   ├── pages                       # folder contain files that create pages to app
    │   │   ├── favouritePage.js        # js-file that create favourite page to app
    │   │   ├── homePage.js             # js-file that create home page to app
    │   │   ├── notFoundPage.js         # js-file that create notFaund page to app
    │   │   └── settingPage.js          # js-file that create setting page to app           
    │   ├── tests                       # folder for contain unit tests 
    │   │   ├── favouritePage.test.js   # unit test to favouritePage.js
    │   │   ├── homePage.test.js        # unit test to homePage.js
    │   │   ├── notFoundPage.test.js    # unit test to notFoundPage.js
    │   │   └──settingPage.test.js      # unit test to settingPage.js
    │   ├── tests                       # folder for contain utils
    │   │   ├── colorControlButtons.js  # function to control buttons
    │   │   ├── createDomElement.js     # function to create DOM elements
    │   │   ├── getResponse.js          # function to get response from API
    │   │   ├── router.js               # function to routing
    │   │   ├── similarCityList.js      # functions to create List
    │   │   └── tempWindUnits.js        # functions to set units 
    │   └── app.js                      # main js-file app 
    ├── .babelrc                        # file is your local configuration for your code in your project
    ├── .eslintrc.js                    # file is a configuration file for a tool
    ├── .gitignore                      # text file that tells Git which files or folders to ignore in a project
    ├── package-lock.json               # file is to keep track of the exact version of every package that is installed
    ├── package.json                    # file is used to give information to npm
    ├── README.md                       # file to generate the html summary you see at the bottom of projects
    └── webpack.config.js               # file to setting webpack
