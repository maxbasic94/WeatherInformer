/**
 * @jest-environment jsdom
 */
 import "regenerator-runtime/runtime";
 import createSettingPage from '../pages/settingPage'
 window.alert = jest.fn();
 
 test("homePage has className = `informer`", () => {
   window.alert.mockClear();
   const testPage = createSettingPage().getAttribute("class");
   expect(testPage).toBe("settingPage");
 });
 