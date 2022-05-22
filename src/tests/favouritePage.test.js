/**
 * @jest-environment jsdom
 */
import "regenerator-runtime/runtime";
import createfavoritePage from "../pages/favoritePage";
window.alert = jest.fn();

test("homePage has className = `informer`", () => {
  window.alert.mockClear();
  const testPage = createfavoritePage().getAttribute("class");
  expect(testPage).toBe("favoritePage");
});
