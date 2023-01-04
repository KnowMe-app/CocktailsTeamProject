import { getCocktailById } from './CocktailsApiService';
import { searchCocktailByName } from './CocktailsApiService';
import * as icons from '../images/icons.svg';



const refs = {
    backdrop: document.querySelector("[data-cocktails-modal]"),
    cocktailsCard: document.querySelector('.cocktails-modal'),
    ulListCocktails: document.querySelector('.markup-cards'),
};

let searchParams = ''

refs.ulListCocktails.addEventListener('click', onClick)

function onClick(e) {
    e.preventDefault()
    if(e.target.classList.value !== 'card__btn') {
        return
    }
    console.log(e.target)
    console.log(e.target.classList.value)


    const liCard = document.querySelectorAll('.card__title');

    let element = ''

    for (let i = 1; i < liCard.length; i++) {
        element = liCard[i].textContent;
    }
    searchParams = element
    // e.target = searchParams
    console.log(searchParams)
    

    searchCocktailByName(searchParams).then(data => {
    const drink = data.drinks[0]
    
    toggleModal()
    clearGalleryList()
    addToGallery(drink)
    closeModal()
    })
}

function closeModal() {
    const closeModalBtn = document.querySelector('.cocktails-modal__close')
    closeModalBtn.addEventListener('click', toggleModal)
    
}

function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden')
}

function addToGallery(drink)  {
    refs.cocktailsCard.insertAdjacentHTML('beforeend', createImageCard(drink))
}

function clearGalleryList() {
    refs.cocktailsCard.innerHTML = ''
}

function createImageCard({ strDrink, strInstructions, strDrinkThumb, strGlass, 
    strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
    strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5 }) {
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
        <li> ${strIngredient1 ? `<a href = "${strIngredient1}"> ✶ ${strMeasure1} ${strIngredient1} </a>`  : ''} </li>
        <li> ${strIngredient2 ? `<a href = "${strIngredient2}"> ✶ ${strMeasure2} ${strIngredient2} </a>`  : ''} </li>
        <li> ${strIngredient3 ? `<a href = "${strIngredient3}"> ✶ ${strMeasure3} ${strIngredient3} </a>`  : ''} </li>
        <li> ${strIngredient4 ? `<a href = "${strIngredient4}"> ✶ ${strMeasure4} ${strIngredient4} </a>`  : ''} </li>
        <li> ${strIngredient5 ? `<a href = "${strIngredient5}"> ✶ ${strMeasure5} ${strIngredient5} </a>`  : ''} </li>
        </ul>
    </div>
    <button type="button" class="cocktails-modal__btn" data-cocktails-modal-btn>Add to favorite</button>
</div>
        </div> `
}
