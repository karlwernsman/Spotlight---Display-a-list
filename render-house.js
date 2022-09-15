export function renderHouse(house) {
    const liElement = document.createElement('li');
    liElement.classList.add('house-item');

    const headerElement = document.createElement('h2');
    headerElement.textContent = house.name;

    const pElement = document.createElement('p');
    pElement.textContent = house.sqfeet + ' for ' + house.price;

    liElement.append(headerElement, pElement);

    return liElement;
}
