import '../styles/app.css';
import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

/*global state of the app
*search object
*surrent recipe object
*shoping list object
*link recipes
*/

const state = {};

const controlSearch = async () => {
    //get the query from the view
    const query = searchView.getInput();
    console.log(query); 
    
    if (query) {
        //new search object and add to state
        state.search = new Search(query);
        //prepare ui for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            //search for recipes  
            await state.search.getResults();
            //sender results to UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch(err) {
            alert(error);
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
e.preventDefault();
controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
const btn = e.target.closest('.btn-inline');
if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
}

});

///////// RECIPE CONTROLER ////////////

const controlRecipe = async () => {
    // get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        //prepare ui for changes
        renderLoader(elements.recipe);
        //create new recipe object
        state.recipe = new Recipe(id);
        try {
            //get recipe data
            await state.recipe.getRecipe();

            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
            console.log(state.recipe);
            
        } catch(error) {
            alert(error);
        }

        
    }
    
}

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
