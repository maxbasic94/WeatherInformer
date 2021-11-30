/**
 * @param {string} url
 * @returns {Promise} Promise
 */
async function getResponseData(url) {
  const response = await fetch(url, { mode: "cors" });
  if (response.status == 200) {
    const json = await response.json();
    return json;
  }
  if (response.status == 404) {
    window.location.hash = "#notFaund";
  }
  throw new Error(response.status);
}

export default getResponseData;
