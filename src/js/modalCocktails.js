import { getCocktailById } from './CocktailsApiService';
import * as icons from '../images/icons.svg';
import { nnn } from './modalIngredients';
const refs = {
    modal: document.querySelector("[data-cocktails-modal]"),
    cocktailsCard: document.querySelector('.cocktails-modal'),
    ulListCocktails: document.querySelector('.markup-cards'),
};

let searchParams = '';

refs.ulListCocktails.addEventListener('click', onClick);

function onClick(e) {
    if(e.target.classList.value !== 'card__btn') {
        return
    }

    searchParams = e.target.id;

    getCocktailById(searchParams).then(data => {
    const drink = data.drinks[0];
    showCocktailsCard(drink);
    nnn()
    
    // console.log(drink)
    })
}

function showCocktailsCard(drink) {
    
    toggleModal();
    clearCocktailsCard();
    addToCocktails(drink);
    const favoriteBtn = document.querySelector('.cocktails-modal__btn')
    favoriteBtn.addEventListener('click', changeFaviriteBtn)
    closeModal();
}



function changeFaviriteBtn(evt) {
// console.log(evt.target.textContent)
evt.target.textContent = 'Remove from favorite'
evt.target.style.width = '248px'
// if(evt.target.textContent = 'Remove from favorite') {
//     console.log(evt.target.textContent)
//     evt.target.textContent = 'Add to favorite'
//     evt.target.style.width = '185px'
// }
}

function closeModal() {
    const closeModalBtn = document.querySelector('.cocktails-modal__close');
    closeModalBtn.addEventListener('click', toggleModal);
}

function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
}

function addToCocktails(drink)  {
    // console.log(drink)
    refs.cocktailsCard.insertAdjacentHTML('beforeend', createCocktailCard(drink));
}

function clearCocktailsCard() {
    refs.cocktailsCard.innerHTML = '';
}

function createCocktailCard(coctail) {
    const { strDrink, strInstructions, strDrinkThumb, strGlass, 
        strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
        strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
        strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10 } = coctail
    return `
    <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>
        <svg width="18px" height="18px">
            <use href="${icons}#icon-vector-off"></use>
        </svg>
    </button>
<div class="cocktails-modal__card">
    <h4 class="cocktails-modal__title"> ${strDrink} </h4>
    <p class="cocktails-modal__pretitle">Instractions:</p>
    <p class="cocktails-modal__text">${strInstructions}</p>
    <a class = "cocktails-modal__item" href = "${strDrinkThumb}">
        <img 
        class = "cocktails-modal__image"
        src = "${strDrinkThumb}" 
        data-source = "${strDrinkThumb}" 
        alt = "${strGlass}" loading="lazy" width="280px" height="280px" />
        </a>
    <div>
        <p class="cocktails-modal__ingredients">INGREDIENTS</p>
        <p class="cocktails-modal__name">${strCategory}</p>
        <ul class="cocktails-modal__list">
        <li> ${strIngredient1 || strMeasure1 ? `<a href = "${strIngredient1}"> ✶ ${strMeasure1} ${strIngredient1} </a>` : ''} </li>
        <li> ${strIngredient2 || strMeasure2 ? `<a href = "${strIngredient2}"> ✶ ${strMeasure2} ${strIngredient2} </a>` : ''} </li>
        <li> ${strIngredient3 || strMeasure3 ? `<a href = "${strIngredient3}"> ✶ ${strMeasure3} ${strIngredient3} </a>` : ''} </li>
        <li> ${strIngredient4 || strMeasure4 ? `<a href = "${strIngredient4}"> ✶ ${strMeasure4} ${strIngredient4} </a>` : ''} </li>
        <li> ${strIngredient5 || strMeasure5 ? `<a href = "${strIngredient5}"> ✶ ${strMeasure5} ${strIngredient5} </a>` : ''} </li>
        <li> ${strIngredient6 || strMeasure6 ? `<a href = "${strIngredient6}"> ✶ ${strMeasure6} ${strIngredient6} </a>` : ''} </li>
        <li> ${strIngredient7 || strMeasure7 ? `<a href = "${strIngredient7}"> ✶ ${strMeasure7} ${strIngredient7} </a>` : ''} </li>
        <li> ${strIngredient8 || strMeasure8 ? `<a href = "${strIngredient8}"> ✶ ${strMeasure8} ${strIngredient8} </a>` : ''} </li>
        <li> ${strIngredient9 || strMeasure9 ? `<a href = "${strIngredient9}"> ✶ ${strMeasure9} ${strIngredient9} </a>` : ''} </li>
        <li> ${strIngredient10 || strMeasure10 ? `<a href = "${strIngredient10}"> ✶ ${strMeasure10} ${strIngredient10} </a>` : ''} </li>
        </ul>
    </div>
    <button type="button" class="cocktails-modal__btn">Add to favorite</button>
</div>
        </div> `
}




