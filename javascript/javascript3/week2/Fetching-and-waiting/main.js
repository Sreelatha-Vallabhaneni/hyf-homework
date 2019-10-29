//Fetching and waiting
const BASE_URL =
'https://holidayapi.com/v1/countries?key=daa0c45f-f13c-424f-8727-4ec0f1875368&pretty';

fetch(BASE_URL)
.then(response => response.json())
.then((json) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(json)
            }, 3000)
        });
    })
.then(json => console.log(json))
