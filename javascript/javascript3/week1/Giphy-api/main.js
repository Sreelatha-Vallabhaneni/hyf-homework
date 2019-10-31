function fetchJSON(url) {
    return fetch(url).then(response => response.json());
  }

  document.querySelector("button").addEventListener("click", () => {
    const nameInput = document.querySelector(".name-input").value.toLowerCase();
    const numberInput = document.querySelector(".number-input").value;
    const ROOT_URL =
      "https://api.giphy.com/v1/gifs/search?api_key=rlOpmaSkySsNXlzbmOhx5JSSlHib0BCu&q="+nameInput+"&limit="+numberInput+"&offset=0&rating=G&lang=en";
    if (nameInput || numberInput) {
      fetchJSON(ROOT_URL).then(json => renderGifSearch(json));
    } else if (nameInput === "" && numberInput === "") {
      document.querySelector(".msg").textContent = "Please enter gif name";
      document.querySelector(".msg2").textContent = "Please enter number";
    }
  });

function renderGifSearch(json) {
document.querySelector(".gif-container").innerHTML = json.data.map(
item => `<img src="${item.images.fixed_height.url}"><br>`);
}


  