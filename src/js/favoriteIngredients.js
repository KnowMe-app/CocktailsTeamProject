
// import { markupCard } from './randomCocktailsCards';
import { showIngredientCard } from './modalIngredients';
import { addIngrToFav } from './firebase';
import { removeIngrFromFav } from './firebase';
import { getIngredientById } from './CocktailsApiService';
import { inFavoritePage } from './favoriteCocktails';
import { removeFromLocalStorage } from './favoriteCocktails';

import * as icons from '../images/icons.svg';

const favorIngredients = document.querySelector('.favor-ingredients')

let objFavorite = {};

const cardsTitle = document.querySelector('.cards-title');
const markupCards = document.querySelector('.markup-cards');

export function name() {
const btn = document.querySelector('.ingredients-modal__btn');
btn.addEventListener('click', checkIngredientFavourite)

// const favorBtn = document.querySelector('.favor-ingredient__btn')
// favorBtn.addEventListener('click', checkIngredientFavourite)
// console.log(favorBtn)

}


function checkIngredientFavourite(event) {
  if (event.target.closest('btn-ingridient')) {
    return;
  }
    const idIngredient = event.target.id
    // console.log(idIngredient);
    const obj = { [idIngredient]: idIngredient };
    
    checkFavourite(event, idIngredient);

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

  const refs = {
    ulListCocktails: document.querySelector('.markup-cards'),
};

refs.ulListCocktails.addEventListener('click', onClick);

function onClick(e) {
  console.log(e.target.classList.value)
    if(e.target.classList.value !== '.card__btn .btn-ingridient') {
        return
    }

    const idIngredient = e.target.id
    console.log(e.target)

 showIngredientCard(idIngredient)
 console.log(idIngredient)
}

  favorIngredients.addEventListener('click', listFavorite);

  function listFavorite() {
    const dataFromStorage = JSON.parse(localStorage.getItem('idIngredient'));
    console.log('new:', dataFromStorage);
    cardsTitle.textContent = 'Favorite ingredients';
    markupCards.innerHTML = '';
  
    // getFavouriteCocktails(); 
    for (const item in dataFromStorage) {
        getIngredientById(dataFromStorage[item]).then(data => {
            let dataForCard = data.ingredients;
            markupIngredientCard(dataForCard, markupCards, 'favourite');

            let forBtnFavorite = markupCards.querySelectorAll('.card__btn-add');
            inFavoritePage(forBtnFavorite)

            
      });
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
                                        <button type="button" class="card__btn btn-ingridient" id = "${item.idIngredient}">Learn more</button>
                                        <button type="button" class="card__btn-add ${activeNotActive} favor-ingredient__btn" ident="${item.idIngredient}">
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
  
  