console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);
// Render test product names.

function renderProducts(products){

    const ul = document.querySelector("section.products  ul");
    for (let i = 0; i < products.length; i++) {
        const list = document.createElement('li');
        const newul = document.createElement('ul');
        const li1 = document.createElement('li');
        li1.textContent = products[i].name;
        newul.appendChild(li1);
        const li2 = document.createElement('li');
        li2.textContent = products[i].price;
        newul.appendChild(li2);
        const li3 = document.createElement('li');
        li3.textContent = products[i].rating;
        newul.appendChild(li3);
        const li4 = document.createElement('li');
        li4.textContent = products[i].shipsTo;
        li4.className = 'shipsto';
        newul.appendChild(li4);
        list.appendChild(newul);          
        ul.appendChild(list);
    }      
}
renderProducts(getAvailableProducts());
  

