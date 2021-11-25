import createHomePage from '../pages/homePage'

test('test', () => {
    expect(createHomePage(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`))
    .toBe(3);
});