
function fetchJSON(user){
    const URL = "https://api.github.com/search/repositories?q=user:"+`${user}`;
    return fetch(URL).then(response => response.json());
}
Promise.all([
  fetchJSON('benna100'),
  fetchJSON('Ekamba'),
  fetchJSON('mahieakhtar'),
  fetchJSON('Hossein')
]).then(list => {
    console.log(renderRepos(list))
}).catch(error => console.log(error));

function renderRepos(users){
    users.forEach(user => {
        const userUl = document.createElement("ul");
        document.body.appendChild(userUl);
        userUl.innerHTML = `<h1>${user.items[0].owner.login}</h1>`; 
        user.items.forEach(item => {
            const itemLi = document.createElement('li')
            userUl.appendChild(itemLi).innerHTML = 
            `<h3>${item.name}: ${item.html_url}</h3>`;
            })
    });
}