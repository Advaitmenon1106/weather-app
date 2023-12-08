export default function displaySearch(city, temp){
    const contentBody = document.getElementById('content-body');
    let displayPane;
    if (document.getElementById('displayPane') === null){
        const displayPane = document.createElement('div');
        displayPane.innerHTML = city+"<br/>"+temp+"°C";
        displayPane.id = 'displayPane';

        contentBody.appendChild(displayPane);
    }
    else{
        displayPane = document.getElementById('displayPane');
        displayPane.innerHTML = '';
        displayPane.innerHTML = city+"<br/>"+temp+"°C";
    }
}