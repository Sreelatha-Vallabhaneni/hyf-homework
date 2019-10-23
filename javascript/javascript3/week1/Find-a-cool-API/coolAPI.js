const BASE_URL = "https://api.thecatapi.com/v1/images/search";

function fetchJSON(url) {
  return fetch(url).then(response => response.json())
}

document.querySelector('button').addEventListener('click', () => {
     fetchJSON(BASE_URL)
    .then(json => {
        document.querySelector('img').src = json[0].url});
})
/*document.querySelector("button").addEventListener("click", () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(json => {
        document.querySelector("img").src = json[0].url;  
  });
});*/