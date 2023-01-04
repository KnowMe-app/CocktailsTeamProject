const searchListEl = document.querySelector('.hero__search-list');
const heroButtonEl = document.querySelector('.hero__btn');

searchListEl.addEventListener('click', onLetterClickChangeBtnLetter);

function onLetterClickChangeBtnLetter(event) {
  const letterSelected = event.target.name.toUpperCase();
  heroButtonEl.textContent = letterSelected;
  searchListEl.style.transform = 'translateY(-100%)';
  searchListEl.style.visibility = 'hidden';
  setTimeout(() => {
    searchListEl.style.removeProperty('transform');
    searchListEl.style.removeProperty('visibility');
  }, 50);
}
