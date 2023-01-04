const markupCards = document.querySelector('.markup-cards');
const favoriteBtn = document.querySelectorAll(".card__btn-add");
const cardIcon = document.querySelector(".card__icon");

markupCards.addEventListener("click", onFavorite);

function onFavorite(event) {
    const elemFavorite = event.target;
    const idFavorite = elemFavorite.getAttribute("id");
    console.log("idFavorite:", idFavorite);

    const obj = { [idFavorite]: idFavorite };
    let objFavorite = {};
        
    if (localStorage.getItem("idFavorite")) {
        const dataFromStorage = JSON.parse(localStorage.getItem("idFavorite"));
        objFavorite = { ...dataFromStorage, ...obj };
    } else {
        objFavorite = { ...obj };
    }
    localStorage.setItem("idFavorite", JSON.stringify(objFavorite));

    console.log("objFavorite", objFavorite);
}