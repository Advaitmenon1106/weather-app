import displaySearch, { coordToLocation } from "./DisplaySearch";
import loadFortnightly from "./FortnightlyTable";
import { searchQuery } from "./search";

export default function displayHomeTemperature(){
    const contentBody = document.getElementById('content-body');
    contentBody.innerHTML = '';
    document.body.style.cursor = 'progress';

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
                let locPromise = coordToLocation(response.latitude, response.longitude);
                locPromise.then((response2)=>{
                    return response2.json()
                })
                .then((response2)=>{
                    displaySearch(response2.features[0].properties.city+', '+response2.features[0].properties.state+ ', '+response2.features[0].properties.country, response.days[0].temp);
                    console.log(response2);
                    console.log(response2.features[0].properties);
                    loadFortnightly(response);
                    document.body.style.cursor = 'default';
                })
            
            })
        });
    }    
}