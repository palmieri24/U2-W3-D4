const URL = "https://api.pexels.com/v1/search?query=beach";
const apiKey = "Mj1aTwwXCbW0nrTCwih7oe3mxhSATqYUKTAVbEde6iKOTcDN2XhUKPnY";

window.onload = () => {
  fetch(URL, {
    headers: { Authorization: apiKey }
  })
    .then((resp) => resp.json())
    .then((resourceObj) => {
      const { url, photographer, alt } = resourceObj;
    });
};
