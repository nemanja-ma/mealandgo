import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};  

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

const recnderRecipe = recipe => {
    const markup = `
    <li>
        <a class="results_link" href="#${recipe.id}">
            <figure class="results_fig">
                <img src="${recipe.imageUrls}" alt="${recipe.title}">
            </figure>
            <div class="results_data">
                <h4 class="results_name">${recipe.title}</h4>
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

