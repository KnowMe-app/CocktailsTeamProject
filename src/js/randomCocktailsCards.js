import { getRandomCocktail } from './CocktailsApiService';
import * as icons from '../images/icons.svg';

const markupCards = document.querySelector('.markup-cards');
const mobilScreen = window.matchMedia('(max-width: 767px)');
const desctopScreen = window.matchMedia('(min-width: 1280px)');
let countImg = 6;

// console.log("mobil:", mobilScreen.matches, "descktop:", desctopScreen.matches);

randomCocktailsCards();

function randomCocktailsCards() {
  if (mobilScreen.matches) {
    countImg = 3;
  } else if (desctopScreen.matches) {
    countImg = 9;
  }

  for (let i = 1; i <= countImg; i++) {
    getRandomCocktail().then(data => {
      const drink = data.drinks;
      // console.log("drink:", drink);
      markupCard(drink, markupCards);
    });
  }
}

export function markupCard(dataForCard, position) {
  for (const item of dataForCard) {
    const htmlCards = `<li class="card">
                                    <img src="${item.strDrinkThumb}" alt="${item.strDrink}" />
                                    <div class="card__info">
                                    <p class="card__title theme__dark">${item.strDrink}</p>
                                    <div class="card__btns">
                                        <button type="button" class="card__btn">Learn more</button>
                                        <button type="button" class="card__btn-add" id="${item.idDrink}">
                                        Add to
                                        <svg class="card__icon" width="18" height="18">
                                            <use href="${icons}#icon-Heart"></use>
                                        </svg>
                                        </button>
                                    </div>
                                    </div>
                                </li> `;
    position.innerHTML += htmlCards;
  }
}

// Динамічна зміна кількості карток на головній, згідно адаптивки
// mobilScreen.onchange = (event) => {
//     if (event.matches) {
//         countImg = 3;
//         console.log("listener mobil");
//     }
// }
// desctopScreen.onchange = (event) => {
//     if (event.matches) {
//         countImg = 9;
//         console.log("listener mobil");
//     }
//     }

// Другий варіант
// mobilScreen.addEventListener("change", (event) => {
//     if (event.matches) { countImg = 3; }
//     else desctopScreen.addEventListener("change", (event) => {
//         if (event.matches) { countImg = 9; }
//     })
// })
