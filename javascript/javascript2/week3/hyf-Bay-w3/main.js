console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

function renderProducts(products) {
  productsUl.textContent = "";
  products.forEach(product => {
    const li = document.createElement("li");

    const shipsToHTML = product.shipsTo.reduce(
      (acc, country) => `<li>${acc}</li><li>${country}</li>`
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}
renderProducts(products);
//Filter products
const searchInput = document.querySelector("div.search input");
searchInput.addEventListener("keyup", () => {
  const searchValue = products.filter(product =>
    product.name
      .toLowerCase()
      .trim()
      .includes(searchInput.value.toLowerCase().trim())
  );
  renderProducts(searchValue);
});
// Price analytics-----week3-JS2
// 1. An array of the prices of the products. What array method can we use here?
const getPrices = products.map((product) => product.price);
// 2. A callback function with a parameter. The parameter will be the confirmation text sent from the server. The callback function will be called when the data has been sent to the server. Console.log out the response from the server.
const callback = (confirmation) => { console.log(confirmation) };
sendPricesToServer(getPrices, callback);