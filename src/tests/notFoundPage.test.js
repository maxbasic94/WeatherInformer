/**
 * @jest-environment jsdom
 */
import "regenerator-runtime/runtime";
import createnotFoundPageDiv from "../pages/notFoundPage";
window.alert = jest.fn();

test("homePage has className = `informer`", () => {
  window.alert.mockClear();
  const testPage = createnotFoundPageDiv().getAttribute("class");
  expect(testPage).toBe("notFoundDiv");
});
