import { getCocktailById } from './CocktailsApiService';
import { checkInFavourite } from './firebase'; // Додав функцію додавання та вилучення з улюбленого
import { markupCard } from './randomCocktailsCards';

const markupCards = document.querySelector('.markup-cards');
const favorCocktails = document.querySelector('.favor-cocktails');
const cardsTitle = document.querySelector('.cards-title');

markupCards.addEventListener('click', onFavorite);
favorCocktails.addEventListener('click', listFavorite);

function onFavorite(event) {
  const elemFavorite = event.target;
  
  const idFavorite = elemFavorite.getAttribute('ident');

  const obj = { ['idFavorite-1']: idFavorite };
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
   }
  // console.log('objFavorite', objFavorite);
}

function listFavorite() {
  cardsTitle.textContent = 'Favorite cocktails';
  markupCards.innerHTML = "";

  const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
  console.log("new:", dataFromStorage);

  for (const item in dataFromStorage) {
    console.log("item:", dataFromStorage[item]);
    getCocktailById(dataFromStorage[item]).then(data => {
      console.log(data);
      let dataForCard = data.drinks;
      markupCard(dataForCard, markupCards);
    });
  }
}
