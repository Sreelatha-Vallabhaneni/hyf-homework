class Product {
  constructor(name, price, currentCurrency = "DKK") {
    this.name = name;
    this.price = price;
    this.currentCurrency = currentCurrency;
  }
  convertCurrency(currency) {
    return fetch(
      "https://api.exchangeratesapi.io/latest?base=DKK&symbols=" + currency
    )
      .then(response => response.json())
      .then(obj => obj["rates"][currency] * this.price);
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    return this.products.push(product);
  }

  removeProduct(product) {
      const matchedIndex = this.products.indexOf(product);
      if (matchedIndex > -1) {
        this.products.splice(matchedIndex, 1);
      }    
  }

  searchProduct(productName) {
    return this.products.filter(product => 
       product.name.toLowerCase().startsWith(productName.toLowerCase())
    );
  }

  getTotal() {
    const total = this.products.reduce(
      (sum, product) => (sum += product.price), 0);
      const sum = document.querySelector(".total");
      sum.textContent = 'Total : ' + total;
     console.log(total)      
  }

  renderProducts() {
      const ul = document.getElementById("product-ul");
      this.products.forEach(product => {
          const li = document.createElement("li");
          li.innerHTML = `<div class="renderProduct">${product.name}</div><div class="renderProduct2">${product.price} KR</div>`;
          ul.appendChild(li);          
      });          
  }

  getUser() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/users/1';
    fetch(BASE_URL).then(response => response.json())
    .then(list => {
      const userName = document.querySelector('.userName')
      userName.textContent = 'User : '+ '' + list.username})
    .catch(err => console.log(err))
  }
}

const flatscreen = new Product("flat-screen", 5000);
const magicMouse = new Product("Apple Magic Mouse", 720);
const speaker = new Product("Bang & Olufsen A9 Speaker", 16499);
const LG_TV = new Product("LG 55Inches 4K OLED", 9999);
const USB = new Product("Apple USB", 679);
const iPod = new Product("iPod touch 32GB", 1799);
const iPod2 = new Product("iPod touch 16GB", 500);
const shoppingCart = new ShoppingCart([flatscreen, magicMouse, speaker, LG_TV, USB, iPod, iPod2]);

shoppingCart.addProduct(flatscreen);
shoppingCart.removeProduct(iPod2);
shoppingCart.getUser();
shoppingCart.renderProducts();
shoppingCart.getTotal();
const search = document.querySelector(".search");
search.addEventListener('input', () => {
  const value = search.value;
  const searchItem = document.querySelector('.searchItems');
  searchItem.textContent = '';
  const div = document.createElement("div");
  searchItem.appendChild(div);
  shoppingCart.searchProduct(value).forEach(value=> {
     const mySearch = document.createElement("p");
     mySearch.innerHTML = value.name;
     div.appendChild(mySearch);
  });  
})
// Currency convert
const select = document.querySelector('select').value;
document.querySelector('select').addEventListener("change", () => {
  Promise.all(
    shoppingCart.products.map(product => {
      return product.convertCurrency(select);
    })
  ).then(data => {
    console.log(data)
  });
  });

/*flatscreen.convertCurrency("INR").then(x => console.log(x));*/