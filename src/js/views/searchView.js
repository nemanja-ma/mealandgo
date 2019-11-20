import {elements} from './base';

export const getInput = () => elements.searchInput.value;

const recnderRecepie = pecepie => {
    const markup = `
    <li>
        <a class="results_link results_link_active" href="#23456">
            <figure class="results_fig">
                <img src="img/test1-1" alt="test">
            </figure>
            <div class="results_data">
                <h4 class="results_name">Pasta with tomato...</h4>
                <p class="results_author">The Pionir Woman</p>
            </div>
        </a>
    </li>
    `;
}

cosnt renderResults = recepies => {
    recepies.forEach(recnderRecepie);
}