import createDomElement from "../createDomElement";

/**
 * 
 * @returns {<div>} notFound page
 */
function createNotFaundPageDiv() {
    const notFaundPageDiv = createDomElement('div', 'notFaundDiv');
    notFaundPageDiv.textContent = "Page not faund";
    return notFaundPageDiv;
}

export default createNotFaundPageDiv;