// import functions and grab DOM elements
import { frogs } from './frogs-data.js';
import { renderFrog } from './render-frog.js';

const frogList = document.getElementById('frog-list');

function displayFrogs() {
    frogList.innerHTML = '';

    for (let frog of frogs) {
        const frogElement = renderFrog(frog);
        frogList.append(frogElement);
    }
}

displayFrogs();
