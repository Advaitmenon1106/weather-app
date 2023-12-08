import displaySearch from "./DisplaySearch";
import { searchQuery } from "./search";

function loadFortnightly(response){
    
    const contentBody = document.getElementById('content-body');

    const tableDiv = document.createElement('div');

    const table = document.createElement('table');
    const headers = document.createElement('tr');
    // const placeTitle = document.createElement('div');
    const dateColumnHeader = document.createElement('td');
    const dayColumnHeader = document.createElement('td');
    const forecastColumnHeader = document.createElement('td');
    const tempColumnHeader = document.createElement('td');

    headers.style.fontWeight = 'bold';
    headers.style.position = '';
    
    dateColumnHeader.innerHTML = 'Date';
    dayColumnHeader.innerHTML = 'Day';
    forecastColumnHeader.innerHTML = 'Forecast';
    tempColumnHeader.innerHTML = 'Temperature';

    tableDiv.className = 'fortnight-table'
    // table.className = 'fortnight-table';

    table.appendChild(headers);
    headers.appendChild(dateColumnHeader);
    headers.appendChild(dayColumnHeader);
    headers.appendChild(forecastColumnHeader);
    headers.appendChild(tempColumnHeader);

    tableDiv.appendChild(table);

    contentBody.appendChild(tableDiv)



    let dailyStats = response.days;
    console.log(dailyStats);
    for (let i = 1; i<dailyStats.length; i++){

        let entry = document.createElement('tr');

        let dateEntry = document.createElement('td')
        let dayEntry = document.createElement('td')
        let forecastEntry = document.createElement('td');
        let tempEntry = document.createElement('td');

        dateEntry.innerHTML = dailyStats[i].datetime;
        dayEntry.innerHTML = 'placeholder';
        forecastEntry.innerHTML = dailyStats[i].description;
        tempEntry.innerHTML = dailyStats[i].temp;

        entry.appendChild(dateEntry);
        entry.appendChild(dayEntry);
        entry.appendChild(forecastEntry);
        entry.appendChild(tempEntry);
        
        table.appendChild(entry);

    }    
}

export default function displayHomeTemperature(){

    const contentBody = document.getElementById('content-body');
    contentBody.innerHTML = '';

    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position)=>{
            const queryLat = position.coords.latitude;
            const queryLong = position.coords.longitude
            const query = queryLat + ', ' + queryLong;
            
            let dataPromise = searchQuery(query);
            dataPromise.then((response)=>{
                return response.json();
            })
            .then((response)=>{
                displaySearch(response.address, response.days[0].temp);
                loadFortnightly(response);
            })
        });
    }    
}