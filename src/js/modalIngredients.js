

import { searchIngredientsByName } from './CocktailsApiService';
import * as icons from '../images/icons.svg';
import { name } from './favoriteIngredients';

const refs = {
    backdrop: document.querySelector('[data-ingredients-modal]'),
    cocktailsCard: document.querySelector('.cocktails-modal'),
    ingredientsCard: document.querySelector('.ingredients-modal'),
};

refs.cocktailsCard.addEventListener('click', onIngredientClick);

function onIngredientClick(evt) {
    evt.preventDefault();
    
    if(evt.target.classList.value !== 'cocktails-modal__link') {
        return
    }

    let searchParams = evt.target.textContent;

    searchIngredientsByName(searchParams.trim()).then(data => {
        const drink = data.ingredients[0];
        showIngredientCard(drink);
        // console.log(drink)
        name()
        
        
    })

    
}


function showIngredientCard(drink) {
    toggleShowModal();
    clearIngredientList();
    addToIngredient(drink);
    onModalText();
    closeModal();
    
}

function onModalText() {
    const text = document.querySelector('.ingredients-modal__text');
    const showMoreBtn = document.querySelector('.ingredients-modal__show-btn');
    const fullText = text.textContent;
    const shortText = truncateString(fullText, 300);

    text.innerHTML = shortText;
    showMoreBtn.addEventListener('click', (() => {
        text.innerHTML = fullText
        refs.ingredientsCard.style.overflowY = "auto"
        // showMoreBtn.classList.add('visually-hidden')
    }));
}

function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
        return str.slice(0, num) + '...';
}

function closeModal() {
    const closeModalBtn = document.querySelector('.ingredients-modal__close');
    closeModalBtn.addEventListener('click', toggleShowModal);
    refs.backdrop.addEventListener('click', onBackdropClick);
}

function onBackdropClick(evt) {
    if(evt.target === evt.currentTarget) {
        toggleShowModal();
    }
}

function toggleShowModal() {
    refs.backdrop.classList.toggle('show-modal');
    refs.ingredientsCard.style.overflowY = "hidden"
}

export function addToIngredient(drink)  {
   
    refs.ingredientsCard.insertAdjacentHTML('beforeend', createIngredientCard(drink));
}

function clearIngredientList() {
    refs.ingredientsCard.innerHTML = '';
}

function createIngredientCard({ strIngredient, strType, strDescription, strAlcohol, idIngredient }) {
    return `
    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>
        <svg width="18px" height="18px">
            <use href="${icons}#icon-vector-off"></use>
        </svg>
    </button>
    <div class="ingredients-modal__card">
        <h4 class="ingredients-modal__title"> ${strIngredient} </h4>
        <div class="ingredients-modal__line"></div>
        <p class="ingredients-modal__text"> ${strDescription ? `${strDescription}` : 'This information will be added soon'}</p>
        <button type="button" class='ingredients-modal__show-btn'>Show more</button>
        <ul class="ingredients-modal__list">
            <li><p class="ingredients-modal__pretitle"> ${strType ? `✶ Type : ${strType}` : ''} </p></li>
            <li><p class="ingredients-modal__pretitle"> ✶ Alcohol : ${strAlcohol} </p></li>
        </ul>
        <button type="button" class="ingredients-modal__btn" id="${idIngredient}" data-ingredients-modal-btn>Add to favorite</button>
    </div>  `
}

