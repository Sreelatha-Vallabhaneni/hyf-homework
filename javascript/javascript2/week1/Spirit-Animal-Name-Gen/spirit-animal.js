
//Spirit animal name generator
const spiritAnimals = [{
    name: 'The lion',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74A6n1_Zv36uR7gvl8vxk4jmE_d56HmS9UR3ZqdS94uwvZ4q4' 
},
{
    name: 'The Elephant',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkyyLZn9bGAf0zToFUaTatxQDyxiskcqrgucUeZsxNUj9Qi-9Pw'
},
{
    name: 'The Deer',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvxaYgwk48p6LnvHgDfjWkm0l61zs1EsgVHewBPIIIO3gnGUQMQ'
},
{
    name: 'The Panda Bear',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLav9gZAhbezW84NvhIiBF2y-q5-a1z_vn5ece9yf-PzaRUOje'
},
{
    name: 'The Turtle',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxavxJJ0805hXYUPJAVmM3lETH9E7duxMqgDEIMLQyDUXQxqXeGQ'
},
{
    name: 'The Mouse',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR5IdUYIxLcUmc2DbRHe4B0WLszNYhUItb3PZImHMLgnIpPqvIyA'
},
{
    name: 'The Fox',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMXdVLr7nDOPcviqLuTcFqwhTpDmxqkMQ2Ua7qMNs7coQ76Wc'
},
{
    name: 'The Dolphin',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWPQgwc3ut2xMtmpMUXU0NhX-QFYY_y7tQ97f1Q5nsDZXnRjn'
},
{
    name: 'The Tiger',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHk2dqvxULjk-0r7u-tvsAW0k4P12dSBMBC3FqevsBCYGlLPf'
},
{
    name: 'The OX & Bull',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkvrKpqpkJ7tVfjTddgcabE0jqgvJbZuFSx113xRtIO3iXMGI'
},
{
    name: 'The Spider',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0M2g_Ld6C7lYl2p6C-iDnkRepFr7yyZZnYHKpCisOxI6qY-N'
},
{
    name: 'The Whale',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQ1WwHNnqX39LpWpdo-DoO6nBA17Chq3ZhPYtePVCxoIDV2L3'
}
];
//Markup time!
const h1 = document.createElement('h1');// Create heading
document.body.appendChild(h1);
h1.textContent = 'SPIRIT-ANIMAL Name Generator';
const nameInput = document.createElement('input');// create input field
nameInput.placeholder = 'Enter your name';
document.body.appendChild(nameInput);
nameInput.className = 'input';
const button = document.createElement('button');// create button
button.textContent = 'click me!';
document.body.appendChild(button);
button.className = 'button';
const select = document.createElement('select'); // create select 
document.body.appendChild(select)
const option = document.createElement('option');// Create option
option.textContent = 'Select Event';
select.appendChild(option);
const btnclick = document.createElement('option');// Create click option
btnclick.textContent = 'click';
btnclick.value = 'click';
select.appendChild(btnclick);
const hover = document.createElement('option');// create mouseover option
hover.value = 'mouseover';
hover.textContent = 'Hovers the input'
select.appendChild(hover);
const inputevnt = document.createElement('option');// Create Input event option
inputevnt.value = 'input';
inputevnt.textContent = 'Input Event';
select.appendChild(inputevnt);
const pTag = document.createElement('p');// create ptag
document.body.appendChild(pTag);
const image = document.createElement('img'); // create image
document.body.appendChild(image);
image.className = 'animal-images';

function spiritAnimalName (){
    if (nameInput.value.trim().length === 0) {
        return pTag.textContent = 'Please enter your name!';
    } else {
        const random = Math.floor(Math.random() * spiritAnimals.length);
        pTag.textContent = `${nameInput.value} - ${spiritAnimals[random].name}`; // to display name
        image.src = spiritAnimals[random].imageUrl;
        nameInput.value = '';    // to clear the input field
    }
}
//Setting up the events, //Spirit animal part, //New spirit animal, //No input
select.addEventListener("change", function(){
    if (select.value === 'click') {
        button.hidden = false;
        button.addEventListener('click', spiritAnimalName);
        nameInput.removeEventListener('mouseover', spiritAnimalName);
        nameInput.removeEventListener('input', spiritAnimalName);
    }else if (select.value === 'mouseover') {
        button.hidden = true;
        nameInput.addEventListener('mouseover', spiritAnimalName);
        button.removeEventListener('click', spiritAnimalName);
        nameInput.removeEventListener('input', spiritAnimalName);        
    }else if (select.value === 'input') {
        button.hidden = true;
        nameInput.addEventListener('input', spiritAnimalName);
        button.removeEventListener('click', spiritAnimalName);
        nameInput.removeEventListener('mouseover', spiritAnimalName);
    } 
})
button.addEventListener('click', function () {
    return spiritAnimalName();
})



