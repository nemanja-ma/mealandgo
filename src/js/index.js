import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const res = await axios(`${proxy}https://api.spoonacular.com/recipes/search?${query}`);
    console.log(res);
    
}
getResults();