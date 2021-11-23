/**
 * @param {Node} elem
 * @param {string} className
 * @returns DOM element
 */
function createDomElement(elem, className) {
  const element = document.createElement(elem);
  if (className) {
    element.className = className;
  }
  return element;
}

export default createDomElement;
