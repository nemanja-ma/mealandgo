import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};  

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
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

export const renderResults = recipes => {
    recipes.forEach(recnderRecipe);
};

