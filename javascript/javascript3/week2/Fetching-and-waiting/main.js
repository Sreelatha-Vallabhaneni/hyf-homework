//Fetching and waiting
const BASE_URL =
'https://holidayapi.com/v1/countries?key=daa0c45f-f13c-424f-8727-4ec0f1875368&pretty';

fetch(BASE_URL)
.then(response => response.json())
.then((list) => {
        setTimeout(() => {
            console.log(list);
            }, 3000)        
    })
