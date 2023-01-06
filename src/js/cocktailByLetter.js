import { searchCocktailsByLetter } from './CocktailsApiService';
import { renderPagination } from './pagination';

const searchListEl = document.querySelector('.hero__search-list');
const paginationEl = document.querySelector('.cards__pagination');
const cardsSectionEl = document.querySelector('.section-cards');
const voidMarkup = document.querySelector('.void');

searchListEl.addEventListener('click', onLetterClick);

function onLetterClick(event) {
  let selectedLetter = event.target.name;
  searchCocktailsByLetter(selectedLetter).then(value => {
    renderPage(value.drinks);
  });
}

export function renderPage(cardsArray) {
  if (cardsArray === null) {
    if (!cardsSectionEl.classList.contains('is-hidden')) {
      markupToggle();
    }
    return;
  } else {
    if (cardsSectionEl.classList.contains('is-hidden')) {
      markupToggle();
      renderPagination(cardsArray);
    }
    renderPagination(cardsArray);
  }
}

function markupToggle() {
  voidMarkup.classList.toggle('is-hidden');
  cardsSectionEl.classList.toggle('is-hidden');
  paginationEl.classList.toggle('is-hidden');
}
