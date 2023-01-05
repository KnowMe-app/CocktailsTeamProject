import { getRandomCocktail } from './CocktailsApiService';
import * as icons from '../images/icons.svg';

const markupCards = document.querySelector('.markup-cards');

randomCocktailsCards();

function randomCocktailsCards() {
  let countImg = onMediaScreen();

  for (let i = 1; i <= countImg; i++) {
    getRandomCocktail().then(data => {
      const drink = data.drinks;
      markupCard(drink, markupCards);
    });
  }
}

export function onMediaScreen() {
  const mobilScreen = window.matchMedia('(max-width: 767px)');
  const desctopScreen = window.matchMedia('(min-width: 1280px)');
  let PAGE_LIMIT = 6;
  if (mobilScreen.matches) {
    PAGE_LIMIT = 3;
  } else if (desctopScreen.matches) {
    PAGE_LIMIT = 9;
  }
  return PAGE_LIMIT;
}

export function markupCard(dataForCard, position) {
  for (const item of dataForCard) {
    const htmlCards = `<li class="card">
                                    <img src="${item.strDrinkThumb}" alt="${item.strDrink}" />
                                    <div class="card__info">
                                    <p class="card__title theme__dark">${item.strDrink}</p>
                                    <div class="card__btns">
                                        <button type="button" class="card__btn" id = "${item.idDrink}">Learn more</button>
                                        <button type="button" class="card__btn-add" ident="${item.idDrink}">
                                        Add to
                                        <svg class="card__icon svg-default" width="18" height="18">
                                            <use href="${icons}#icon-Heart"></use>
                                        </svg>
                                        </button>
                                    </div>
                                    </div>
                                </li> `;
    position.innerHTML += htmlCards;
  }
}
