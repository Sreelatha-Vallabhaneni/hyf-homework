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
    document.querySelector(".gif-container").textContent = "";
    for (let i = 0; i < json.data.length; i++) {
      const gifContainer = document.querySelector(".gif-container");
      let h2 = document.createElement("h2");
      h2.textContent = json.data[i].title;
      gifContainer.appendChild(h2);
      const image = document.createElement("img");
      gifContainer.appendChild(image);
      image.src = json.data[i].images.fixed_height.url;
    }
  }
