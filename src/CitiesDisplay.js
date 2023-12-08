export default function displayCities(){
    const contentBody = document.getElementById('content-body');
    const grid = document.createElement('div');
    const addCardButton = document.createElement('button');
    const pageTitle = document.createElement('div');

    pageTitle.innerHTML = 'Favourite Regions';
    pageTitle.className = 'cities-page-title';

    addCardButton.className = 'add-card';
    addCardButton.title = 'Add a new City';
    addCardButton.innerHTML = 'New Card'
    grid.className = 'cities-grid';

    contentBody.innerHTML = '';

    contentBody.appendChild(pageTitle);
    contentBody.appendChild(addCardButton);

}