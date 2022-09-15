export function renderClothing(clothing) {
    const liElement = document.createElement('li');
    liElement.classList.add('clothing-item');

    const headerElement = document.createElement('h2');
    headerElement.textContent = clothing.name;

    const pElement = document.createElement('p');
    pElement.textContent = clothing.store + ' for ' + clothing.price;

    liElement.append(headerElement, pElement);

    return liElement;
}
