export function renderDog(dog) {
    const liElement = document.createElement('li');
    liElement.classList.add('dog-item');

    const headerElement = document.createElement('h2');
    headerElement.textContent = dog.name;

    const pElement = document.createElement('p');
    pElement.textContent =
        dog.age + ' old with a ' + dog.coat.color + ' and ' + dog.coat.length + ' length coat.';

    liElement.append(headerElement, pElement);

    return liElement;
}
