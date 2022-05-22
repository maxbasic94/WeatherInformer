import createDomElement from "../utils/createDomElement";

/**
 *
 * @returns {HTMLDivElement} notFound page
 */
function createNotFoundPageDiv() {
  const notFoundPageDiv = createDomElement("div", "notFoundDiv");
  notFoundPageDiv.textContent = "Page not found";
  return notFoundPageDiv;
}

export default createNotFoundPageDiv;
