import { getCocktailById } from './CocktailsApiService';
import * as icons from '../images/icons.svg';
import { onFavorite } from './favoriteCocktails';


const refs = {
    backdrop: document.querySelector("[data-cocktails-modal]"),
    cocktailsCard: document.querySelector('.cocktails-modal'),
    ulListCocktails: document.querySelector('.markup-cards'),
};

let searchParams = '';

refs.ulListCocktails.addEventListener('click', onClick);

function onClick(e) {
    
    if(e.target.classList.value !== 'card__btn' || e.target == 'null') {
        return
    }

    searchParams = e.target.id;

    getCocktailById(searchParams).then(data => {
    const drink = data.drinks[0];
    showCocktailsCard(drink);
    // console.log(drink)
    })
}

function showCocktailsCard(drink) {
    toggleModal();
    clearCocktailsCard();
    addToCocktails(drink);
    const favoriteBtn = document.querySelector('.card__btn-add.cocktails-modal__btn')
    favoriteBtn.addEventListener('click', onFavorite)
    closeModal();
}


function closeModal() {
    const closeModalBtn = document.querySelector('.cocktails-modal__close');
    closeModalBtn.addEventListener('click', toggleModal);
    refs.backdrop.addEventListener('click', onBackdropClick)
}

function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
}

function onBackdropClick(evt) {
    if(evt.target === evt.currentTarget) {
        toggleModal()
    }
}

function addToCocktails(drink)  {
    refs.cocktailsCard.insertAdjacentHTML('beforeend', createCocktailCard(drink));
}

function clearCocktailsCard() {
    refs.cocktailsCard.innerHTML = '';
}

function createCocktailCard(coctail) {
    const { strDrink, strInstructions, strDrinkThumb, strGlass, 
    strCategory, idDrink } = coctail

    const strMeasureObj = []
    const strIngredientsObj = []

    for(let i = 1; i < 20; i++) {
        if(coctail[`strMeasure${i}`]) strMeasureObj.push(coctail[`strMeasure${i}`])
        if(coctail[`strIngredient${i}`]) strIngredientsObj.push(coctail[`strIngredient${i}`])
    }
    
    let arr = {}
    
    for(let i = 1; i < strIngredientsObj.length; i++) {
        if(strMeasureObj[i] === undefined){
            strMeasureObj[i] =  ""
        }
        
        let array = `<li class="cocktails-modal__it"> <span> ✶ ${strMeasureObj[i]} </span> <a class="cocktails-modal__link" href = "${strIngredientsObj[i]}" > ${strIngredientsObj[i]} </a></li>`
        // arr.push(array)
        arr += array
    }

    return `
    <div class="cocktails-modal__container">
    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>
        <svg width="18px" height="18px">
            <use href="${icons}#icon-vector-off"></use>
        </svg>
    </button>
    <div class="cocktails-modal__card">
        <h4 class="cocktails-modal__title"> ${strDrink} </h4>
        <div class="cocktails-modal__inner">
            <div class="cocktails-modal__wraper">
                <p class="cocktails-modal__pretitle">Instractions:</p>
                <p class="cocktails-modal__text">${strInstructions}</p>
            </div>
            <a class = "cocktails-modal__item" href = "${strDrinkThumb}">
                <img class = "cocktails-modal__image"  src = "${strDrinkThumb}" alt = "${strGlass}" loading="lazy" width="280px" height="280px" />
            </a>
            <div class="cocktails-modal__wrap">
                <p class="cocktails-modal__ingredients">INGREDIENTS</p>
                <p class="cocktails-modal__name">${strCategory}</p>
                <ul class="cocktails-modal__list"> ${arr.slice(15)} </ul>
            </div>
        </div>
        <button type="button" class="card__btn-add cocktails-modal__btn" ident="${idDrink}">
        <span class="cocktails-modal__span">Add to favorite</span>
    </button>
    </div>
    </div> `
}




