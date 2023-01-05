import { getCocktailById } from './CocktailsApiService';
import * as icons from '../images/icons.svg';


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
    // console.log(drink)
    })
}

function showCocktailsCard(drink) {
    
    toggleModal();
    clearCocktailsCard();
    
    addToCocktails(drink);
    const favoriteBtn = document.querySelector('.cocktails-modal__btn')
    favoriteBtn.addEventListener('click', changeFavoriteBtn)
    closeModal();
}



function changeFavoriteBtn(evt) {
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

    refs.cocktailsCard.insertAdjacentHTML('beforeend', createCocktailCard(drink));
}

function clearCocktailsCard() {
    refs.cocktailsCard.innerHTML = '';
}

// nameList.forEach(function (name, index) {
// 	// 	console.log(`${name}: ${phoneList[index]}`)
// 	// })
// 	// for (let i = 0; i < nameList.length; i += 1) {
// 	// 	console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	// }
// }



function createCocktailCard(coctail) {
    console.log(coctail)
    const { strDrink, strInstructions, strDrinkThumb, strGlass, 
        strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
        strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
        strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10 } = coctail
    

    const strMeasureObj = []
    const strIngredientsObj = []
    
    for(let i = 1; i < 20; i++) {

        if(coctail[`strMeasure${i}`]) strMeasureObj.push(coctail[`strMeasure${i}`])
        if(coctail[`strIngredient${i}`]) strIngredientsObj.push(coctail[`strIngredient${i}`])
        
        strMeasureObj.forEach(() => {
            console.log(`${strMeasureObj} : ${strIngredientsObj}`)
        })
    }
    


    // console.log(`${strMeasureObj[0]} : ${strIngredientsObj[0]}`)
    // console.log(strMeasureObj)
    // console.log(strIngredientsObj)
    
        return `
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
    <a class = "cocktails-modal__item" href = "${strDrinkThumb}">
    </div>
        <img 
        class = "cocktails-modal__image"
        src = "${strDrinkThumb}" 
        data-source = "${strDrinkThumb}" 
        alt = "${strGlass}" loading="lazy" width="280px" height="280px" />
        </a>
    <div class="cocktails-modal__wrap">
        <p class="cocktails-modal__ingredients">INGREDIENTS</p>
        <p class="cocktails-modal__name">${strCategory}</p>
        <ul class="cocktails-modal__list">
        
            ${strMeasureObj} ${strIngredientsObj}
        </ul>
    </div>
    </div>
    <button type="button" class="cocktails-modal__btn">Add to favorite</button>
</div>
        </div> `
}


// function createCocktailCard(coctail) {
//     const { strDrink, strInstructions, strDrinkThumb, strGlass, 
//         strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
//         strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
//         strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
//         strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10 } = coctail
//     return `
//     <button type="button" class="cocktails-modal__close" data-cocktails-modal-close>
//         <svg width="18px" height="18px">
//             <use href="${icons}#icon-vector-off"></use>
//         </svg>
//     </button>
// <div class="cocktails-modal__card">
//     <h4 class="cocktails-modal__title"> ${strDrink} </h4>
//     <p class="cocktails-modal__pretitle">Instractions:</p>
//     <p class="cocktails-modal__text">${strInstructions}</p>
//     <a class = "cocktails-modal__item" href = "${strDrinkThumb}">
//         <img 
//         class = "cocktails-modal__image"
//         src = "${strDrinkThumb}" 
//         data-source = "${strDrinkThumb}" 
//         alt = "${strGlass}" loading="lazy" width="280px" height="280px" />
//         </a>
//     <div>
//         <p class="cocktails-modal__ingredients">INGREDIENTS</p>
//         <p class="cocktails-modal__name"> ${strCategory}</p>
//         <ul class="cocktails-modal__list">
//         <li class="cocktails-modal__it"> <span> ✶ ${strMeasure1} </span> <a class="cocktails-modal__link" href = "${strIngredient1}"> ${strIngredient1} </a> </li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure2} </span> <a class="cocktails-modal__link" href = "${strIngredient2}"> ${strIngredient2} </a></li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure3}</span> <a class="cocktails-modal__link" href = "${strIngredient3}"> ${strIngredient3} </a></li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure4} </span> <a class="cocktails-modal__link" href = "${strIngredient4}"> ${strIngredient4} </a></li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure5} </span> <a class="cocktails-modal__link" href = "${strIngredient5}"> ${strIngredient5} </a></li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure6} </span> <a class="cocktails-modal__link" href = "${strIngredient6}"> ${strIngredient6} </a></li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure7} </span> <a class="cocktails-modal__link" href = "${strIngredient7}"> ${strIngredient7} </a></li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure8} </span> <a class="cocktails-modal__link" href = "${strIngredient8}"> ${strIngredient8} </a></li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure9} </span> <a class="cocktails-modal__link" href = "${strIngredient9}"> ${strIngredient9} </a></li>
//         <li class="cocktails-modal__it">  <span> ✶ ${strMeasure10} </span> <a class="cocktails-modal__link" href = "${strIngredient10}"> ${strIngredient10} </a></li>
//         </ul>
//     </div>
//     <button type="button" class="cocktails-modal__btn">Add to favorite</button>
// </div>
//         </div> `
// }




