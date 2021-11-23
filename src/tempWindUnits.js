/**
 * 
 * @param {string} temp 
 * @param {string} wind 
 * @param {Object} current 
 * @returns {Object} units
 */
function getTempWindUnits (temp, wind, current) {
    let units = {};
    if (temp === 'c') {
        units.tempUnit = 'Celsius'
        units.tempRequest = current.temp_c;
        units.tempSign = '°';
    } else {
        units.tempUnit = 'Fahrenheit'
        units.tempRequest = current.temp_f;
        units.tempSign = 'f';
    }
    if (wind === 'kph') {
        units.windUnit = 'kph';
        units.windSpeedRequest = current.wind_kph;
    } else {
        units.windUnit  = 'mph';
        units.windSpeedRequest = current.wind_mph;
    }
    return units;
}

export default getTempWindUnits;
