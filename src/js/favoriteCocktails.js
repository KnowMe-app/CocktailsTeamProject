import { getCocktailById } from './CocktailsApiService';
import { checkInFavourite } from './firebase'; // Додав функцію додавання та вилучення з улюбленого
import { markupCard } from './randomCocktailsCards';
import { getFavouriteCocktails } from './firebase';

const markupCards = document.querySelector('.markup-cards');
const favorCocktails = document.querySelector('.favor-cocktails');
const cardsTitle = document.querySelector('.cards-title');
const svgCardIcon = document.querySelector('.card__icon');
let objFavorite = {};

markupCards.addEventListener('click', onFavorite);
favorCocktails.addEventListener('click', listFavorite);

export default function onFavorite(event) {
  const elemFavorite = event.target.closest('.card__btn-add');
  console.log('elemFavorite', elemFavorite);

  const idFavorite = elemFavorite.getAttribute('ident');
  console.log('idFavorite', idFavorite);

  checkInFavourite(event, idFavorite); // !!!!!!!!!!!!!!!!!!
  
  const obj = { [idFavorite]: idFavorite };

  if (objFavorite.hasOwnProperty(idFavorite)) {
    localStorage.removeItem('idFavorite');
    return;
  }

  if (localStorage.getItem('idFavorite')) {
    const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
    objFavorite = { ...dataFromStorage, ...obj };
  } else {
    objFavorite = { ...obj };
  }

  console.log('objFavorite', objFavorite);

  localStorage.setItem('idFavorite', JSON.stringify(objFavorite));

  if (event.target.classList.contains('card__btn-add')) {
    checkInFavourite(event, idFavorite); // Додав функцію додавання та вилучення з улюбленого
  } else if (event.target.classList.contains('favourite')) {
    console.log(event.target.classList.contains('favourite'));
    getFavouriteCocktails();
  }
}


function listFavorite() {
  cardsTitle.textContent = 'Favorite cocktails';
  markupCards.innerHTML = '';

  getFavouriteCocktails(); // функція рендерінгу для авторизованих користувачів

  // ------ Рендерінг карточок улюблений коктейлів із localStorage--------
  const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
  console.log("new:", dataFromStorage);

  for (const item in dataFromStorage) {
    getCocktailById(dataFromStorage[item]).then(data => {
      let dataForCard = data.drinks;
      markupCard(dataForCard, markupCards);
    });
  }
}
