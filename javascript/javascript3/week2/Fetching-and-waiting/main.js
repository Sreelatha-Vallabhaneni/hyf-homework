//Fetching and waiting
const BASE_URL =
'https://holidayapi.com/v1/countries?key=daa0c45f-f13c-424f-8727-4ec0f1875368&pretty';

async function fetchAndWait(){
        const response = await fetch(BASE_URL);
        const list = await response.json();
         setTimeout(() => {
            console.log(list);
            }, 3000) 
} 

try {
        fetchAndWait();
} catch (err) {
        console.log(err);
        
}

