export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search_field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results_list'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe')
};

export const renderLoader = parent => {
    const loader = `
    <div class="loader">
        <i class="fa fa-spinner"></i>
    </div> 
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.loader`);
    if (loader) loader.parentElement.removeChild(loader);
}