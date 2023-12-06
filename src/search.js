export default function searchQuery(query){
    const generic_part = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const api_key = "&key=W8RDKBHTHK3UV7MWNRZPAHQNW";
    const type = "&type=json";
    const unit = "?unitGroup=uk";
    
    let dataPromise = fetch(generic_part+query+unit+api_key+type, {
        mode:"cors"
    })
    return dataPromise;
}