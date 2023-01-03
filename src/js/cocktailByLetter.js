import { searchCocktailsByLetter } from './CocktailsApiService';
import { renderPage, clearPagination } from './pagination';

const searchListEl = document.querySelector('.hero__search-list');
const cardsList = document.querySelector('.markup-cards');

searchListEl.addEventListener('click', onLetterClick);

function onLetterClick(event) {
  let selectedLetter = event.target.name;
  searchCocktailsByLetter(selectedLetter).then(value => {
    clearPagination();
    renderPage(value.drinks);
  });
}

// YURA'S VARIANT:
// function onLetterClick(event) {
//   let selectedLetter = event.target.name;
//   searchCocktailsByLetter(selectedLetter).then(value =>
//     renderCards(value.drinks)
//   );
// }

// function renderCards(cardsArray) {
//   let cardMarkup = [];
//   for (let i = 0; i < cardsArray.length; i += 1) {
//     if (i < 9) {
//       console.log(cardsArray[i].strDrink);
//       cardMarkup.push(`<li class="card">
//       <img src="${cardsArray[i].strDrinkThumb}" alt="${cardsArray[i].strDrink}" />
//       <div class="card__info">
//         <p class="card__title">${cardsArray[i].strDrink}</p>
//         <div class="card__btns">
//           <button type="button" class="card__btn">
//             Learn more
//           </button>
//           <button type="button" class="card__btn-add">
//             Add to
//             <svg class="card__icon" width="18" height="18">
//               <use href="./images/icons.svg#icon-Heart"></use>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </li>`);
//     }
//   }

//   cardsList.innerHTML = cardMarkup.join('');

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
// }
