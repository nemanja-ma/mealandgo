import axios from 'axios';


class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = 'bfca48a500b64282aa13ed55488e2cb1';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try {
            const res = await axios(`${proxy}https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${this.query}&number=30`);
            this.result = res.data.results
            console.log(this.results);
        } catch(error) {
            alert(error)
        }
    }
}

export default Search; 