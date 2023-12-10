export default function displaySearch(city, temp){
    const contentBody = document.getElementById('content-body');
    let displayPane;
    if (document.getElementById('displayPane') === null){
        const displayPane = document.createElement('div');
        displayPane.innerHTML = city+"<br/><br/>"+temp+"°C";
        displayPane.id = 'displayPane';
        displayPane.style.fontWeight = '500';

        contentBody.appendChild(displayPane);
    }
    else{
        displayPane = document.getElementById('displayPane');
        displayPane.innerHTML = '';
        displayPane.innerHTML = city+"<br/>"+temp+"°C";
    }
}

export function coordToLocation(coord_lat, coord_long){
    const api = "47178d066d84448a9716f46bfbef36df"
    let locationPromise = fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+coord_lat+"&lon="+coord_long+"&apiKey="+api);
    return locationPromise;
}