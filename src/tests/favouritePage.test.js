/**
 * @jest-environment jsdom
 */
import "regenerator-runtime/runtime";
import createfavouritePage from "../pages/favouritePage";
window.alert = jest.fn();

test("homePage has className = `informer`", () => {
  window.alert.mockClear();
  const testPage = createfavouritePage().getAttribute("class");
  expect(testPage).toBe("favouritePage");
});
