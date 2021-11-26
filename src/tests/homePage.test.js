/**
 * @jest-environment jsdom
 */
import "regenerator-runtime/runtime";
import createHomePage from "../pages/homePage";
window.alert = jest.fn();

test("homePage has className = `informer`", () => {
  window.alert.mockClear();
  const testPage = createHomePage(
    `http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no`
  ).getAttribute("class");
  expect(testPage).toBe("informer");
});
