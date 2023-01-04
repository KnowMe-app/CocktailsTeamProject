const searchListEl = document.querySelector('.hero__search-list');
const heroButtonEl = document.querySelector('.hero__btn');

searchListEl.addEventListener('click', onLetterClickChangeBtnLetter);

function onLetterClickChangeBtnLetter(event) {
  const letterSelected = event.target.name.toUpperCase();
  heroButtonEl.textContent = letterSelected;
}
