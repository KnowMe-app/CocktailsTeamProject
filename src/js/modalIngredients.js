import { searchIngredientsByName } from './CocktailsApiService';
import * as icons from '../images/icons.svg';

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
    })
}

function showIngredientCard(drink) {
    toggleShowModal();
    clearIngredientList();
    addToIngredient(drink);

    const text = document.querySelector('.ingredients-modal__text')
    const showMoreBtn = document.querySelector('.load-more')

const fullText = text.textContent;
const shortText = truncateString(fullText, 300)

text.innerHTML = shortText;

showMoreBtn.addEventListener('click', showMore);

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

function showMore() {
  text.innerHTML = fullText;
  showMoreBtn.classList.add('visually-hidden')
}
    closeModal();
}




function closeModal() {
    const closeModalBtn = document.querySelector('.ingredients-modal__close');
    closeModalBtn.addEventListener('click', toggleShowModal);
    refs.backdrop.addEventListener('click', onBackdropClick)
}

function onBackdropClick(evt) {
    if(evt.target === evt.currentTarget) {
        toggleShowModal()
    }
}

function toggleShowModal() {
    refs.backdrop.classList.toggle('show-modal');
}

function addToIngredient(drink)  {
    refs.ingredientsCard.insertAdjacentHTML('beforeend', createIngredientCard(drink));
}

function clearIngredientList() {
    refs.ingredientsCard.innerHTML = '';
}

function createIngredientCard({ strIngredient, strType, strDescription, strAlcohol }) {
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
        <button type="button" class='load-more'>Show more</button>
        <ul class="ingredients-modal__list">
            <li><p class="ingredients-modal__pretitle"> ${strType ? `✶ Type : ${strType}` : ''} </p></li>
            <li><p class="ingredients-modal__pretitle"> ✶ Alcohol : ${strAlcohol} </p></li>
        </ul>
        <button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>
    </div>  `
}


