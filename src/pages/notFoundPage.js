import createDomElement from "../utils/createDomElement";

/**
 *
 * @returns {HTMLDivElement} notFound page
 */
function createnotFoundPageDiv() {
  const notFoundPageDiv = createDomElement("div", "notFoundDiv");
  notFoundPageDiv.textContent = "Page not faund";
  return notFoundPageDiv;
}

export default createnotFoundPageDiv;
