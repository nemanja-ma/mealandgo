import axios from 'axios';
import {key, proxy} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try{
            const res = await axios(`${proxy}https://api.spoonacular.com/recipes/${this.id}/information?apiKey=${key}`);
            this.title=res.data.title;
            this.author=res.data.sourceName;
            this.img=res.data.image;
            this.url=res.data.sourceUrl;
            this.ingredients=res.data.extendedIngredients;
            this.time=res.data.readyInMinutes;
            this.serving=res.data.servings;    
        } catch(error) {
            alert('cant get data');   
        }
    }

    updateServings (type) {
        //servings
        const newServings = type === 'dec' ? this.serving -1 : this.serving +1;

        //ingredients

        this.ingredients.forEach(ing => {
            ing.amount *= (newServings/this.serving)
        })
        this.serving = newServings
    }
}