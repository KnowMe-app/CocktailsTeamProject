import { getIngredientById } from './CocktailsApiService';
import { checkInFavourite } from './firebase'; // Додав функцію додавання та вилучення з улюбленого
import { markupCard } from './randomCocktailsCards';

const markupCards = document.querySelector('.markup-cards');
const favoriteBtn = document.querySelectorAll('.card__btn-add');
const cardIcon = document.querySelector('.card__icon');

markupCards.addEventListener('click', onFavorite);

function onFavorite(event) {
  const elemFavorite = event.target;
  const idFavorite = elemFavorite.getAttribute('id');
  console.log('idFavorite:', idFavorite);

  const obj = { [idFavorite]: idFavorite };
  let objFavorite = {};

  if (localStorage.getItem('idFavorite')) {
    const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
    objFavorite = { ...dataFromStorage, ...obj };
  } else {
    objFavorite = { ...obj };
  }
  localStorage.setItem('idFavorite', JSON.stringify(objFavorite));
  checkInFavourite(event, idFavorite); // Додав функцію додавання та вилучення з улюбленого
  console.log('objFavorite', objFavorite);
}

markupFavorite(objFavorite, markupCards);
function markupFavorite(objFavorite, position) {
  for (const item of objFavorite) {
    let favorite = getIngredientById(item);
    console.log('dataFavorite:', favorite);

    markupCard(favorite, markupCards);
  }
}
