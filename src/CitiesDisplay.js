export default function displayCities(){
    const contentBody = document.getElementById('content-body');
    const addCardButton = document.createElement('button');
    const pageTitle = document.createElement('div');
    const grid = document.createElement('div');

    grid.className = 'cities-grid';
    grid.id = 'card-grid'

    pageTitle.innerHTML = '[Work In Progress] Pinned Regions';
    pageTitle.className = 'cities-page-title';

    addCardButton.className = 'add-card';
    addCardButton.title = 'Add a new City';
    addCardButton.innerHTML = 'New Card'

    contentBody.innerHTML = '';

    contentBody.appendChild(pageTitle);
    contentBody.appendChild(addCardButton);
    contentBody.appendChild(grid);

    addCardButton.addEventListener('click', newCards);

}

function newCards(){
    const grid = document.getElementById('card-grid')
    let card = document.createElement('div');
    card.className = 'cities-card';

    grid.appendChild(card);


}