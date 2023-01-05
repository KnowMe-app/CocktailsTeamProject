import { getCocktailById } from './CocktailsApiService';
import { checkInFavourite } from './firebase'; // Додав функцію додавання та вилучення з улюбленого
import { markupCard } from './randomCocktailsCards';
import { getFavouriteCocktails } from './firebase';

const markupCards = document.querySelector('.markup-cards');
const favorCocktails = document.querySelector('.favor-cocktails');
const cardsTitle = document.querySelector('.cards-title');

markupCards.addEventListener('click', onFavorite);
favorCocktails.addEventListener('click', listFavorite);

function onFavorite(event) {
  const elemFavorite = event.target;

  const idFavorite = elemFavorite.getAttribute('ident');

  const obj = { [idFavorite]: idFavorite };
  let objFavorite = {};

  if (localStorage.getItem('idFavorite')) {
    const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
    objFavorite = { ...dataFromStorage, ...obj };
  } else {
    objFavorite = { ...obj };
  }
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
  // const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
  // console.log("new:", dataFromStorage);

  // for (const item in dataFromStorage) {
  //   getCocktailById(dataFromStorage[item]).then(data => {
  //     let dataForCard = data.drinks;
  //     markupCard(dataForCard, markupCards);
  //   });
  // }
}
