import { searchCocktailsByLetter } from './CocktailsApiService';

const searchListEl = document.querySelector('.hero__search-list');
const cardsListEl = document.querySelector('.markup-cards');
const paginationEl = document.querySelector('.cards__pagination');
const cardsSectionEl = document.querySelector('.section-cards');
const voidMarkup = document.querySelector('.void');

searchListEl.addEventListener('click', onLetterClick);

function onLetterClick(event) {
  let selectedLetter = event.target.name;
  searchCocktailsByLetter(selectedLetter).then(value =>
    renderCards(value.drinks)
  );
}

function renderCards(cardsArray) {
  if (cardsArray === null) {
    console.log('error');
    if (!cardsSectionEl.classList.contains('is-hidden')) {
      markupToggle();
    }
  } else {
    if (cardsSectionEl.classList.contains('is-hidden')) {
      markupToggle();
      renderMarkup(cardsArray);
    }
    renderMarkup(cardsArray);
  }

  function renderMarkup(cardsArray) {
    let cardMarkup = [];
    for (let i = 0; i < cardsArray.length; i += 1) {
      if (i < 9) {
        console.log(cardsArray[i].strDrink);
        cardMarkup.push(`<li class="card">
      <img src="${cardsArray[i].strDrinkThumb}" loading="lazy" alt="${cardsArray[i].strDrink}" />
      <div class="card__info">
        <p class="card__title">${cardsArray[i].strDrink}</p>
        <div class="card__btns">
          <button type="button" class="card__btn">
            Learn more
          </button>
          <button type="button" class="card__btn-add">
            Add to
            <svg class="card__icon" width="18" height="18">
              <use href="./images/icons.svg#icon-Heart"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>`);
      }
    }
    cardsListEl.innerHTML = cardMarkup.join('');
  }

  function markupToggle() {
    voidMarkup.classList.toggle('is-hidden');
    cardsSectionEl.classList.toggle('is-hidden');
    paginationEl.classList.toggle('is-hidden');
  }
  // .map(
  //   cardObj => `<li class="card">
  //     <img src="${cardObj.strDrinkThumb}" alt="${cardObj.strDrink}" />
  //     <div class="card__info">
  //       <p class="card__title">${cardObj.strDrink}</p>
  //       <div class="card__btns">
  //         <button type="button" class="card__btn">
  //           Learn more
  //         </button>
  //         <button type="button" class="card__btn-add">
  //           Add to
  //           <svg class="card__icon" width="18" height="18">
  //             <use href="./images/icons.svg#icon-Heart"></use>
  //           </svg>
  //         </button>
  //       </div>
  //     </div>
  //   </li>`
  // )
  //   .join('');
  // cardsList.innerHTML = cardMarkup;
}
