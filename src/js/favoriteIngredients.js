import { addIngrToFav } from './firebase';
import { removeIngrFromFav } from './firebase';
import { getIngredientById } from './CocktailsApiService';
import { removeFromLocalStorage } from './favoriteCocktails';
import { checkInFavourite } from './firebase';
import * as icons from '../images/icons.svg';
import { showIngredientCard } from './modalIngredients';

const favorIngredients = document.querySelector('.favor-ingredients')
const favorIngridientMain = document.querySelector('.favor-ingridient-main')
const modal = document.querySelector('#modal')

const cardsTitle = document.querySelector('.cards-title');
const cardsTitleIngr = document.querySelector('.cards-title');
const markupCards = document.querySelector('.markup-cards');
const markupIngr = document.querySelector('.markup-ingr');
const hero = document.querySelector('.hero');
let objFavorite = {};

export function name() {
  const btn = document.querySelector('.ingredients-modal__btn');
  btn.addEventListener('click', checkIngredientFavourite);
}

markupIngr.addEventListener('click', checkIngredientFavouritePage);
favorIngredients.addEventListener('click', listFavorite);
favorIngridientMain.addEventListener('click', listFavorite);

//------------------------- Click в модалках на додавання в улюблені інгрідієнти
function checkIngredientFavourite (event) {
  const idIngredient = event.target.id
  const obj = { [idIngredient]: idIngredient };
    
  checkFavourite(event, idIngredient);
  chekInLocalStorageIngredients(idIngredient, obj, objFavorite);
  }  

//------------------------- Click on Page Favorite Ingredients
function checkIngredientFavouritePage(event) {
  if (event.target.classList.contains('card__btn')) {
    onClick(event);
  } else {
    const elemFavoriteIngr = event.target.closest('.card__btn-add') || event.target.closest('.ingredients-modal__btn');
    const idIngredient = elemFavoriteIngr.getAttribute('idingr');
    const obj = { [idIngredient]: idIngredient };
    
    checkInFavourite(event, idIngredient);
    chekInLocalStorageIngredients(idIngredient, obj, objFavorite);
  }
}

//------------------------- Перевірка на наявність інгрідієнта в localStorage => додавання, видалення
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

// -------------- Click Рендерінг сторінки Фаворитів Інгридієнтів
function listFavorite() {
  console.log("markupIngr", markupIngr);
    modal.classList.remove('modal_vis')
    const dataFromStorageIngr = JSON.parse(localStorage.getItem('idIngredient'));
    
    cardsTitle.textContent = 'Favorite ingredients';
    markupCards.innerHTML = '';
    hero.innerHTML = '';
    hero.style.paddingTop = "0";
    hero.style.paddingBottom = "150px";
  
    for (const item in dataFromStorageIngr) {
        getIngredientById(dataFromStorageIngr[item]).then(data => {
            let dataForCardIngr = data.ingredients;
            markupIngredientCard(dataForCardIngr, markupIngr, 'favourite');

            let forBtnFavoriteIngr = markupIngr.querySelectorAll('.card__btn-add');
            inFavoritePageIngr(forBtnFavoriteIngr); // заміна кнопок на Remove в рендерінгу сторінки Фаворитів Інгридієнтів
      });
    }
  }

  // -------------- ставимо Remove та серденько на сторінці Фаворитів Інгридієнтів
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

// -------------- зміна кнопок і відповідне додавання/видалення з Фаворитів
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

// -------------- рендерінг однієї картки інгрідієнта для сторінки Фаворитів Інгридієнтів
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

// // -------------- кнопка Lean More на сторінці Фаворитів Інгрідієнтів
function onClick (event) {
  // console.log(event.target.classList.value);
  // if (e.target.classList.value !== '.card__btn .btn-ingridient') {
  //   return
  //  }

  const idIngredient = event.target.id;
  getIngredientById(idIngredient).then(data => {

    let dataForCard = data.ingredients[0];
    console.log(dataForCard);
    showIngredientCard(dataForCard);
  })
}