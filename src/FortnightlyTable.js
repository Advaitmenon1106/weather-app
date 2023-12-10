import format from "date-fns/format";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

export default function loadFortnightly(response){
    const contentBody = document.getElementById('content-body');

    const tableDiv = document.createElement('div');

    const table = document.createElement('table');
    const headers = document.createElement('tr');
    const dateColumnHeader = document.createElement('td');
    const dayColumnHeader = document.createElement('td');
    const weatherIconHeader = document.createElement('td');
    const forecastColumnHeader = document.createElement('td');
    const tempColumnHeader = document.createElement('td');

    headers.style.fontWeight = 'bold';
    
    dateColumnHeader.innerHTML = 'Date';
    dayColumnHeader.innerHTML = 'Day';
    forecastColumnHeader.innerHTML = 'Forecast';
    tempColumnHeader.innerHTML = 'Temperature';

    tableDiv.className = 'fortnight-table';

    table.appendChild(headers);
    headers.appendChild(dateColumnHeader);
    headers.appendChild(dayColumnHeader);
    headers.appendChild(weatherIconHeader);
    headers.appendChild(forecastColumnHeader);
    headers.appendChild(tempColumnHeader);

    tableDiv.appendChild(table);

    contentBody.appendChild(tableDiv);

    let dailyStats = response.days;
    console.log(dailyStats);

    const paths = importAll(require.context('./assets/set2/', false, /\.png$/));
    
    for (let i = 1; i<dailyStats.length; i++){

        let entry = document.createElement('tr');

        let dateEntry = document.createElement('td')
        let dayEntry = document.createElement('td')
        let weatherIconEntry = document.createElement('td');
        let forecastEntry = document.createElement('td');
        let tempEntry = document.createElement('td');

        dateEntry.innerHTML = dailyStats[i].datetime;
        dayEntry.innerHTML = format(new Date(dailyStats[i].datetime), 'EEEE');

        let weatherIcon = document.createElement('img');
        weatherIcon.src = paths[dailyStats[i]["icon"]+".png"];

        weatherIconEntry.appendChild(weatherIcon);

        forecastEntry.innerHTML = dailyStats[i].description;
        tempEntry.innerHTML = dailyStats[i].temp+"°C";

        entry.appendChild(dateEntry);
        entry.appendChild(dayEntry);
        entry.appendChild(weatherIconEntry);
        entry.appendChild(forecastEntry);
        entry.appendChild(tempEntry);
        
        table.appendChild(entry);
    }    
}