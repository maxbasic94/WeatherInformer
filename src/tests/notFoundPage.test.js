/**
 * @jest-environment jsdom
 */
 import "regenerator-runtime/runtime";
 import createNotFaundPageDiv from '../pages/notFoundPage'
 window.alert = jest.fn();
 
 test("homePage has className = `informer`", () => {
   window.alert.mockClear();
   const testPage = createNotFaundPageDiv().getAttribute("class");
   expect(testPage).toBe("notFaundDiv");
 });
 