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

function onFavorite(event) {
  if (event.target.closest('.card__btn')) {
    return;
  }

  const elemFavorite = event.target.closest('.card__btn-add');
  const idFavorite = elemFavorite.getAttribute('ident');
  const obj = { [idFavorite]: idFavorite };
  // console.log('idFavorite', idFavorite);

  checkInFavourite(event, idFavorite); // Змінюємо сердечко і назву кнопки

  if (localStorage.getItem('idFavorite')) {
    const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));

    if (dataFromStorage.hasOwnProperty(idFavorite)) {
      removeFromLocalStorage(idFavorite, dataFromStorage);
      localStorage.setItem('idFavorite', JSON.stringify(dataFromStorage));
    } else {
      objFavorite = { ...dataFromStorage, ...obj };
      localStorage.setItem('idFavorite', JSON.stringify(objFavorite));
    }
  } else {
    objFavorite = { ...obj };
    localStorage.setItem('idFavorite', JSON.stringify(objFavorite));
  }

  // if (event.target.classList.contains('card__btn-add')) {
  //   checkInFavourite(event, idFavorite); // Додав функцію додавання та вилучення з улюбленого
  // } else if (event.target.classList.contains('favourite')) {
  //   console.log(event.target.classList.contains('favourite'));
  //   getFavouriteCocktails();
  // }
}

export function removeFromLocalStorage(idFavorite, dataFromStorage) {
  for (const key in dataFromStorage) {
    if (dataFromStorage[key] === idFavorite) {
      delete dataFromStorage[key];
    }
  }
}

function listFavorite() {
  cardsTitle.textContent = 'Favorite cocktails';
  markupCards.innerHTML = '';

  getFavouriteCocktails(); // рендерінг для авторизованих користувачів

  // ------ Рендерінг із localStorage--------
  const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
  console.log('new:', dataFromStorage);

  for (const item in dataFromStorage) {
    getCocktailById(dataFromStorage[item]).then(data => {
      let dataForCard = data.drinks;
      markupCard(dataForCard, markupCards);
    });
  }
}
