import { getCocktailById } from './CocktailsApiService';
import { checkInFavourite } from './firebase'; // Додав функцію додавання та вилучення з улюбленого
import { markupCard } from './randomCocktailsCards';
import { getFavouriteCocktails } from './firebase';
import { clearPagination } from './pagination';
import { getAuth } from 'firebase/auth';
import exp from 'constants';

const markupCards = document.querySelector('.markup-cards');
const favorCocktails = document.querySelector('.favor-cocktails');
const cardsTitle = document.querySelector('.cards-title');
const svgCardIcon = document.querySelector('.card__icon');
const favorCocktailsMain = document.querySelector('.favor-cocktails-main');
const modal = document.querySelector('#modal');

const searchListEl = document.querySelector('.hero__search-list');
const heroEl = document.querySelector('.hero');
const paginationEl = document.querySelector('.cards__pagination');
const cardsSectionEl = document.querySelector('.section-cards');
const noFavoriteCocktailMarkup = document.querySelector('.no-fav-cocktail');

let objFavorite = {};

markupCards.addEventListener('click', onFavorite);
favorCocktails.addEventListener('click', listFavorite);
favorCocktailsMain.addEventListener('click', listFavorite);

// --------------- ФУНКЦІЯ Додавання в улюблені по кліку
export async function onFavorite(event) {
  
  try {
    if (event.target.classList.contains('ingr')) return;
    const userId = getAuth().currentUser.uid;
    console.log(`Your login id is ${userId}`);

    if (event.target.closest('.card__btn')) {
      return;
    }

    const elemFavorite =
      event.target.closest('.card__btn-add') ||
      event.target.closest('.card__btn-add.cocktails-modal__btn');
    const idFavorite = elemFavorite.getAttribute('ident');
    const obj = { [idFavorite]: idFavorite };

    checkInFavourite(event, idFavorite); // Змінюємо сердечко і назву кнопки
  } catch {
    if (event.target.classList.contains('ingr')) return;
    console.log('Please, login, to use God mode');
    if (event.target.closest('.card__btn')) {
      return;
    }

    const elemFavorite =
      event.target.closest('.card__btn-add') ||
      event.target.closest('.card__btn-add.cocktails-modal__btn');
    const idFavorite = elemFavorite.getAttribute('ident');
    const obj = { [idFavorite]: idFavorite };

    checkInFavourite(event, idFavorite); // Змінюємо сердечко і назву кнопки

    // --------------- додавання в localStorage об'єкту наклацаних улюблених
    // if (localStorage.getItem('idFavorite')) {
    //   const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));

    //   if (dataFromStorage.hasOwnProperty(idFavorite)) {
    //     removeFromLocalStorage(idFavorite, dataFromStorage);
    //     localStorage.setItem('idFavorite', JSON.stringify(dataFromStorage));
    //   } else {
    //     objFavorite = { ...dataFromStorage, ...obj };
    //     localStorage.setItem('idFavorite', JSON.stringify(objFavorite));
    //   }
    // } else {
    //   objFavorite = { ...obj };
    //   localStorage.setItem('idFavorite', JSON.stringify(objFavorite));
    //   }

    chekInLocalStorageFavorite(idFavorite, obj, objFavorite);
    }
}

export function chekInLocalStorageFavorite(idFavorite, obj, objFavorite) {
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
// <<<<<< no-favorite-cocktail
    }
  }
// =======
//  }
//>>>>>>> main
}

// --------------- ФУНКЦІЯ видалення з localStorage
export function removeFromLocalStorage(idFavorite, dataFromStorage) {
  for (const key in dataFromStorage) {
    if (dataFromStorage[key] === idFavorite) {
      delete dataFromStorage[key];
    }
  }
}

// --------------- ФУНКЦІЯ рендерингу сторінки Фаворитів
function listFavorite() {
  const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
  cardsTitle.textContent = 'Favorite cocktails';
  markupCards.innerHTML = '';
//<<<<<<< no-favorite-cocktail
  modal.classList.remove('modal_vis');

// async function listFavorite() {
//=======
//  modal.classList.remove('modal_vis')
  
//>>>>>>> main
  try {
    const userId = getAuth().currentUser.uid;
    cardsTitle.textContent = 'Favorite cocktails';
    markupCards.innerHTML = '';
    clearPagination();
    getFavouriteCocktails(); // рендерінг для авторизованих
  } catch {
    if (Object.keys(dataFromStorage).length === 0) {
      if (!cardsSectionEl.classList.contains('is-hidden')) {
        markupToggle();
      }
      return;
    } else {
      if (cardsSectionEl.classList.contains('is-hidden')) {
        markupToggle();
        renderFromLocalStorage();
      }
      renderFromLocalStorage();
    }
  }
}

function renderFromLocalStorage() {
  console.log('Please, login, to use God mode');
  const dataFromStorage = JSON.parse(localStorage.getItem('idFavorite'));
  cardsTitle.textContent = 'Favorite cocktails';
  markupCards.innerHTML = '';
  clearPagination(); //видаляє пагінацію, яка могла залишитися від попередньої видачі

  // ------ Рендерінг із localStorage
  for (const item in dataFromStorage) {
    getCocktailById(dataFromStorage[item]).then(data => {
      let dataForCard = data.drinks;
      markupCard(dataForCard, markupCards, 'favourite');

      let forBtnFavorite = markupCards.querySelectorAll('.card__btn-add');
      inFavoritePage(forBtnFavorite);
    });
  }
}

// --------------- ФУНКЦІЯ заміни кнопок на Remove в рендерінгу сторінки Фаворитів
export function inFavoritePage(forBtnFavorite) {
  for (const item of forBtnFavorite) {
    item.classList.add('favourite');
    item.lastElementChild.classList.remove('svg-default');
    item.lastElementChild.classList.add('favourite');
    item.firstElementChild.textContent = 'Remove';
  }
}

//-----------------toggle between favorite cards markup and no favorite cocktail markup

function markupToggle() {
  noFavoriteCocktailMarkup.classList.toggle('is-hidden');
  heroEl.classList.toggle('is-hidden');
  cardsSectionEl.classList.toggle('is-hidden');
  paginationEl.classList.toggle('is-hidden');
}
