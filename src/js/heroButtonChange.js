const searchListEl = document.querySelector('.hero__search-list');
const heroButtonEl = document.querySelector('.hero__btn');

searchListEl.addEventListener('click', onLetterClickChangeBtnLetter);

function onLetterClickChangeBtnLetter(event) {
  const letterSelected = event.target.name.toUpperCase();
  heroButtonEl.textContent = letterSelected;
  // searchListEl.style.transform = 'translateY(-100%)';
  // searchListEl.style.opacity = '0';
  // searchListEl.style.transition =
  //   'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)';
  // searchListEl.style.display = 'none';
  // setTimeout(() => {
  //   searchListEl.style.removeProperty('transform');
  //   searchListEl.style.removeProperty('opacity');
  //   searchListEl.style.removeProperty('transition');
  //   searchListEl.style.removeProperty('display');
  // }, 500);
}
