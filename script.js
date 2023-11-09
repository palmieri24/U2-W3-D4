const URL = "https://api.pexels.com/v1/search?query=beach";
const apiKey = "Mj1aTwwXCbW0nrTCwih7oe3mxhSATqYUKTAVbEde6iKOTcDN2XhUKPnY";
const loadImagesBtn = document.getElementById("loadImages");
const loadSecondaryImagesBtn = document.getElementById("loadSecondaryImages");

window.onload = () => {
  fetch(URL, {
    headers: { Authorization: apiKey }
  })
    .then((resp) => resp.json())
    .then((resourceObj) => {
      const { url, photographer, alt } = resourceObj;

      document.getElementById("url").value = url;
      document.getElementById("photographer").value = photographer;
      document.getElementById("alt").value = alt;
    })
    .catch((err) => console.log(err));
};
