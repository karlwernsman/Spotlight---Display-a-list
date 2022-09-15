export function renderFrog(frog) {
    const liElement = document.createElement('li');
    liElement.classList.add('frog-item');

    const headerElement = document.createElement('h2');
    headerElement.textContent = frog.name;

    const pElement = document.createElement('p');
    pElement.textContent = frog.genus + ' ' + frog.species;

    liElement.append(headerElement, pElement);

    return liElement;
}
