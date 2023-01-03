import { getRandomCocktail } from './CocktailsApiService';

const markupCards = document.querySelector('.markup-cards');
randomCocktailsCards();

function randomCocktailsCards() {
    for (let i = 1; i <= 9; i++) {
        getRandomCocktail()
        .then(data => {
            const drink = data.drinks;
            markupCard(drink, markupCards);
        });
    }
}

export function markupCard(dataForCard, position) {
    for (const item of dataForCard) {
                const htmlCards = `<li class="card">
                                    <picture>
                                    <source srcset="${item.strDrinkThumb}" media="(min-width: 480px)" />
                                    <source srcset="" media="(min-width: 768px)" />
                                    <source srcset="" media="(min-width: 1200px)" />
                                    <img src="${item.strDrinkThumb}" alt="${item.strDrink}" />
                                    </picture>
                                    <div class="card__info">
                                    <p class="card__title theme__dark">${item.strDrink}</p>
                                    <div class="card__btns">
                                        <button type="button" class="card__btn">Learn more</button>
                                        <button type="button" class="card__btn-add">
                                        Add to
                                        <svg class="card__icon" width="18" height="18">
                                            <use href="./images/icons.svg#icon-Heart"></use>
                                        </svg>
                                        </button>
                                    </div>
                                    </div>
                                </li> `
                position.innerHTML += htmlCards;
    }
}