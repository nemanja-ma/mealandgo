import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};  

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split('').reduce((acc, cur) => {
            if (acc+cur.length <= limit) {
                newTitle.push(cur)
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}

const recnderRecipe = recipe => {
    const markup = `
    <li>
        <a class="results_link" href="#${recipe.id}">
            <figure class="results_fig">
                <img src="${recipe.imageUrls}" alt="${recipe.title}">
            </figure>
            <div class="results_data">
                <h4 class="results_name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results_minutes">${recipe.readyInMinutes} minutes takes to prepare</p>
            </div>
        </a>
    </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

//pagination
const renderButtons = (page, numberOfResults, resultsPerPage) => {
    const numberOfPages = Math.ceil(numberOfResults/resultsPerPage);
    let button;
    if (page===1 && numberOfPages>1) {
        button = createButton(page, 'next');
    } else if (page < numberOfPages){
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `;
    } else if (page === numberOfPages && numberOfPages>1) {
        button = createButton(page, 'prev');
    }

    

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <i class="fa fa-caret-${type === 'prev' ? 'left' : 'right'}"></i>
    </button>
    `;


export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    //render results of current page
    const start = (page-1)*resPerPage;
    const end = page*resPerPage;
    recipes.slice(start, end).forEach(recnderRecipe);
    //render pagination
    renderButtons(page, recipes.length, resPerPage);
};