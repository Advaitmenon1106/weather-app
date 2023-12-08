import displaySearch from "./DisplaySearch";

export function searchQuery(query){
    const generic_part = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const api_key = "&key=W8RDKBHTHK3UV7MWNRZPAHQNW";
    const type = "&type=json";
    const unit = "?unitGroup=uk";
    
    let dataPromise = fetch(generic_part+query+unit+api_key+type, {
        mode:"cors"
    })
    return dataPromise;
}

function loadSearches(){
    const contentBody = document.getElementById('content-body');
    const searchBar = document.createElement('input');

    searchBar.id='search';
    searchBar.placeholder = 'Search for a region'
    contentBody.innerHTML = '';
    contentBody.appendChild(searchBar);
}

export default function searchFunction(){

    loadSearches();

    const searchBar = document.getElementById('search');
    
    searchBar.addEventListener('keydown', (event)=>{
    if (event.key === "Enter"){
        searchBar.blur();
        document.body.style.cursor = "progress";
        let regionQuery = searchBar.value;
        let dataPromise = searchQuery(regionQuery);
        dataPromise.then((response)=>{
            let dataJson = response.json()
            console.log(dataJson);
            return dataJson;
        })
        .then((response)=>{
            console.log(response.days);
            document.body.style.cursor = "default";
            displaySearch(response.address, response.days[0].temp);
        })
    }
})
}