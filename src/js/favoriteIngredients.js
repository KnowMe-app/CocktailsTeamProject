// import { markupCard } from './randomCocktailsCards';
// import { getFavouriteCocktails } from './firebase';
import { addIngrToFav } from './firebase';
import { removeIngrFromFav } from './firebase';
import { getIngredientById } from './CocktailsApiService';
import { inFavoritePage } from './favoriteCocktails';
import { removeFromLocalStorage } from './favoriteCocktails';
import { checkInFavourite } from './firebase';
// import {chekInLocalStorageFavorite} from './favoriteCocktails'
import * as icons from '../images/icons.svg';

const favorIngredients = document.querySelector('.favor-ingredients')
const cardsTitle = document.querySelector('.cards-title');
const cardsTitleIngr = document.querySelector('.cards-title');
const markupCards = document.querySelector('.markup-cards');
const markupIngr = document.querySelector('.markup-ingr');
let objFavorite = {};

export function name() {
  const btn = document.querySelector('.ingredients-modal__btn');
  btn.addEventListener('click', checkIngredientFavourite);
}

markupIngr.addEventListener('click', checkIngredientFavouritePage);
favorIngredients.addEventListener('click', listFavorite);

function checkIngredientFavourite (event) {
  const idIngredient = event.target.id
  const obj = { [idIngredient]: idIngredient };
    
  checkFavourite(event, idIngredient);
  chekInLocalStorageIngredients(idIngredient, obj, objFavorite);
  }  

//------------------------- Click on Page Favorite Ingredients
function checkIngredientFavouritePage(event) {
    const elemFavoriteIngr = event.target.closest('.card__btn-add');
    const idIngredient = elemFavoriteIngr.getAttribute('idingr');
    const obj = { [idIngredient]: idIngredient };
    
    checkInFavourite(event, idIngredient);
    chekInLocalStorageIngredients(idIngredient, obj, objFavorite);
}

function chekInLocalStorageIngredients(idIngredient, obj, objFavorite) {
      if (localStorage.getItem('idIngredient')) {
        const dataFromStorage = JSON.parse(localStorage.getItem('idIngredient'));
    
        if (dataFromStorage.hasOwnProperty(idIngredient)) {
          removeFromLocalStorage(idIngredient, dataFromStorage);
          localStorage.setItem('idIngredient', JSON.stringify(dataFromStorage));
        } else {
          objFavorite = { ...dataFromStorage, ...obj };
          localStorage.setItem('idIngredient', JSON.stringify(objFavorite));
        }
      } else {
        objFavorite = { ...obj };
        localStorage.setItem('idIngredient', JSON.stringify(objFavorite));
      }
}

// -------------- Рендерінг сторінки Фаворитів Інгридієнтів
function listFavorite() {
    const dataFromStorageIngr = JSON.parse(localStorage.getItem('idIngredient'));
    console.log('dataFromStorageIngr:', dataFromStorageIngr);
    cardsTitle.textContent = 'Favorite ingredients';
    // cardsTitleIngr.textContent = '';
    markupCards.innerHTML = '';
  
    // getFavouriteCocktails(); 
    for (const item in dataFromStorageIngr) {
        getIngredientById(dataFromStorageIngr[item]).then(data => {
            let dataForCardIngr = data.ingredients;
            markupIngredientCard(dataForCardIngr, markupIngr, 'favourite');

            let forBtnFavoriteIngr = markupIngr.querySelectorAll('.card__btn-add');
            inFavoritePageIngr(forBtnFavoriteIngr); // заміна кнопок на Remove в рендерінгу сторінки Фаворитів Інгридієнтів
      });
    }
  }

function inFavoritePageIngr(forBtnFavorite) {
  for (const item of forBtnFavorite) {
    if (!item.classList.contains('ingr')) {
      return;
    } else {
      item.classList.add('favourite');
      item.lastElementChild.classList.remove('svg-default');
      item.lastElementChild.classList.add('favourite');
      item.firstElementChild.textContent = 'Remove';
    }
  }
}

function checkFavourite(event, idIngredient) {
    const perem = event.target.closest('.ingredients-modal__btn') 
    perem.style.backgroundColor = '#fd5103'
    perem.style.color = 'white'

    if (!perem.classList.contains('favourite')) {
      perem.classList.add('favourite')
      perem.style.color = 'white'
      perem.textContent = 'Remove from favotite' 
      addIngrToFav(idIngredient);   
    } else {
      perem.classList.remove('favourite');
      perem.textContent = 'Add to favotite'
      removeIngrFromFav(idIngredient);
    }
}

function markupIngredientCard(dataForCard, position, activeNotActive) {
    for (const item of dataForCard) {
      const htmlCards = `<div class="favor-ingredient__card">
      <h4 class="favor-ingredient__title"> ${item.strIngredient} </h4>
      <ul class="favor-ingredient__list">
      <li><p class="ingredients-modal__pretitle"> ${item.strType ? `${item.strType}` : ''} </p></li>
      </ul>
      <div class="card__btns">
                                        <button type="button" class="card__btn" id = "${item.idIngredient}">Learn more</button>
                                        <button type="button" class="card__btn-add ${activeNotActive} ingr" idingr = "${item.idIngredient}" ident="${item.idDrink}">
                                          <span class="card__btn-title">Add to</span>
                                          <svg class="card__icon svg-default ${activeNotActive}" width="18" height="18">
                                              <use href="${icons}#icon-Heart"></use>
                                          </svg>
                                        </button>
                                    </div>
                                    </div>`;
      position.innerHTML += htmlCards;
    }
  }
  
