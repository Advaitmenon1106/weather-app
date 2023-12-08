import './styles.css';
import displayCities from './CitiesDisplay';
import searchFunction from './search';
import displayHomeTemperature from './HomeTemperature';

const home = document.getElementById('home');
home.addEventListener('click', displayHomeTemperature);


const cities = document.getElementById('cities');
cities.addEventListener('click', displayCities);

const weather = document.getElementById('weather');
weather.addEventListener('click', searchFunction);