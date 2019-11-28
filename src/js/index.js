import Search from './models/Search'
import { elements, elementStrings, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import Recipe from './models/Recipe';

const state = {};


/// SEARCH CONTOLER

const controlSearch = async () => {
    // get query from view
    const  query = searchView.getInput();
       
    // add a serach obj into state
    if (query) {
        state.search = new Search(query);

        // prepare ui for results
        searchView.clearInpu();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //search for recipes
        await state.search.getResults()

        //render results
        clearLoader(elements.searchRes);
        searchView.renderResults(state.search.result);     
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        searchView.clearResults();
        searchView.renderResults(state.search.result, parseInt(btn.dataset.goto, 10));
        
        
    }
})

/// RECIPE CONTOLER

const constrolSearch = async () => {
    //get id from url
    const id = window.location.hash.replace('#', '');
    console.log(id);
    
    if (id) {
            //prepare ui for changes
            renderLoader(elements.recipe);
            recipeView.clearRecipe();

            //highlight selected recipe
            if (state.recipe) {searchView.highlightSelected(id)};

            //add a recipe obj into state
            state.recipe = new Recipe(id);
        try{
            //search for recipe data
            await state.recipe.getRecipe();

            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
            console.log(state.recipe.ingredients);
        } catch(error) {
            console.log('cant process data');
        }    
    }
}

['hashchange', 'load'].forEach(el => window.addEventListener(el, constrolSearch));

//handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        state.recipe.updateServings('dec');
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        state.recipe.updateServings('inc')
    }


});