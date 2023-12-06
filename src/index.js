import './styles.css';
import searchQuery from './search';
import displaySearch from './DisplaySearch';

const searchBar = document.getElementById('search');
searchBar.addEventListener('keydown', (event)=>{
    if (event.key === "Enter"){
        let regionQuery = searchBar.value;
        let dataPromise = searchQuery(regionQuery);
        dataPromise.then((response)=>{
            let dataJson = response.json()
            console.log(dataJson);
            return dataJson;
        })
        .then((response)=>{
            console.log(response.days);
            displaySearch(response.address, response.days[0].temp);
        })
    }
})
