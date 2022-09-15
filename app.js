// import functions and grab DOM elements
import { frogs } from './frogs-data.js';
import { renderFrog } from './render-frog.js';
import { houses } from './houses-data.js';
import { renderHouse } from './render-house.js';
import { clothes } from './clothes-data.js';
import { renderClothing } from './render-clothing.js';
import { dogs } from './dogs-data.js';
import { renderDog } from './render-dog.js';

const frogList = document.getElementById('frog-list');
const houseList = document.getElementById('house-list');
const clothesList = document.getElementById('clothes-list');
const dogList = document.getElementById('dog-list');

function displayFrogs() {
    frogList.innerHTML = '';

    for (let frog of frogs) {
        const frogElement = renderFrog(frog);
        frogList.append(frogElement);
    }
}

function displayHouses() {
    houseList.innerHTML = '';

    for (let house of houses) {
        const houseElement = renderHouse(house);
        houseList.append(houseElement);
    }
}

function displayClothes() {
    clothesList.innerHTML = '';

    for (let clothing of clothes) {
        const clothingElement = renderClothing(clothing);
        clothesList.append(clothingElement);
    }
}

function displayDogs() {
    dogList.innerHTML = '';

    for (let dog of dogs) {
        const dogElement = renderDog(dog);
        dogList.append(dogElement);
    }
}

displayFrogs();
displayHouses();
displayClothes();
displayDogs();
