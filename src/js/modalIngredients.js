import { searchIngredientsByName } from './CocktailsApiService';
import * as icons from '../images/icons.svg';

    const cocktailsCard = document.querySelector('.cocktails-modal')
    const ingredientsCard = document.querySelector('.ingredients-modal')
    const modal = document.querySelector('[data-ingredients-modal]')


    cocktailsCard.addEventListener('click', onIngredientClick)

function onIngredientClick(evt) {
    // evt.preventDefault();
    
    // if(evt.target.classList.value !== '.cocktails-modal__it') {
    //     return
    // }

    
    let searchParams = evt.target.textContent
    // console.log(searchParams )
    searchIngredientsByName(searchParams.trim()).then(data => {
        const drink = data.ingredients[0];
        showCocktailsCard(drink)
        // console.log(drink)
    })
}

function showCocktailsCard(drink) {
    toggleShowModal()
    clearGalleryList()
    addToGallery(drink)
    // const favoriteBtn = document.querySelector('.cocktails-modal__btn')
    // favoriteBtn.addEventListener('click', changeFavoriteBtn)
    closeModal();
}

export function closeModal() {
    const closeModalBtn = document.querySelector('.ingredients-modal__close')
    closeModalBtn.addEventListener('click', toggleShowModal)
    
}

function toggleShowModal() {
    modal.classList.toggle('show-modal')
}

function addToGallery(drink)  {
    ingredientsCard.insertAdjacentHTML('beforeend', createImageCard(drink))
}

function clearGalleryList() {
    ingredientsCard.innerHTML = ''
}

function createImageCard({ strIngredient, strType, strDescription }) {
    return `
    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>
    <svg width="18px" height="18px">
        <use href="${icons}#icon-vector-off"></use>
    </svg>
</button>
<div class="ingredients-modal__card">
<h4 class="ingredients-modal__title"> ${strIngredient} </h4>
<p class="ingredients-modal__pretitle"> ${strType} </p>
<div class="footer__line"></div>
<p class="ingredients-modal__text"> ${strDescription} </p>
    <ul class="cocktails-modal__list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
<button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>
</div>  `
}

