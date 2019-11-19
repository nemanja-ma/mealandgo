import Search from './models/Search';

/*global state of the app
*search object
*surrent recipe object
*shoping list object
*link recipes
*/

const state = {};

const controlSearch = async () => {
    //get the query from the view
    const query = 'pasta';
    if (query) {
        //new search object and add to state
        state.search = new Search(query)
        //prepare ui for results
        //search for recipes
        await state.search.getResults();
        //sender results to UI
        console.log(state.search.result);
        
    }
}

document.querySelector('.search').addEventListener('submit', e => {
e.preventDefault();
controlSearch();
});

