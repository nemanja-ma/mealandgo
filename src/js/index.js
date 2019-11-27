import Search from './models/Search'
import { elements, elementStrings, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';

const state = {};

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



