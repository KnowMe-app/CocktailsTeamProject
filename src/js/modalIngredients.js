import { getIngredientById } from './CocktailsApiService';
import * as icons from '../images/icons.svg';


export default function nnn(arr) {
    const ingredientsList = document.querySelector('.cocktails-modal__list')
    console.log(onIngredientClick)
    
    ingredientsList.addEventListener('click', onIngredientClick)
    modal.document.querySelector('[data-ingredients-modal]')

}
function onIngredientClick(evt) {
    console.log(evt.target)
    modal.classList.remove('is-hidden')

    // getIngredientById(searchParams).then(data => {
    //     const drink = data.drinks[0];
        
    //     console.log(drink)

    // })

}


// const refs = {
//     modal: document.querySelector("[data-ingredients-modal]"),
//     cocktailsCard: document.querySelector('.cocktails-modal'),
//     ulListCocktails: document.querySelector('.markup-cards'),
// };

// const listModal = document.querySelector('.cocktails-modal__list');
// // console.log(listModal)
// const ing = document.querySelector('.ingredients-modal__container');
// // console.log(listModal)

// ing.addEventListener('click', onOpenClick)

// function onOpenClick(e) {
//     // console.log(e.target)

//     let searchParams = 12

//     getIngredientById(searchParams).then(data => {
//         const drink = data.drinks[0]
//         console.log(listModal)
//     })
    
//     toggleShowModal()
//     // clearGalleryList()
//     addToGallery(drink)
//     // closeModal()
// }



// // function closeModal() {
// //     const closeModalBtn = document.querySelector('.ingredients-modal__close')
// //     closeModalBtn.addEventListener('click', toggleModal)
    
// // }

function toggleShowModal() {
    modal.classList.toggle('is-hidden')
}

function addToGallery(drink)  {
    refs.modal.insertAdjacentHTML('beforeend', createImageCard(drink))
}

function clearGalleryList() {
    refs.modal.innerHTML = ''
}

function createImageCard({ strDrink, strInstructions, strDrinkThumb, strGlass, 
    strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
    strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5 }) {
    return `
    <button type="button" class="ingredients-modal__close" data-ingredients-modal-close>
    <svg width="18px" height="18px">
        <use href="./images/icons.svg#icon-vector-off"></use>
    </svg>
</button>
<div class="ingredients-modal__card">
<h4 class="ingredients-modal__title">Title</h4>
<p class="ingredients-modal__pretitle">Title</p>
<p class="ingredients-modal__text">Title</p>
    <ul class="cocktails-modal__list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
<button type="button" class="ingredients-modal__btn" data-ingredients-modal-btn>Add to favorite</button>
</div>  `
}

