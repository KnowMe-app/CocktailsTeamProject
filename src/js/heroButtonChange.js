const searchListEl = document.querySelector('.hero__search-list');
const heroButtonEl = document.querySelector('.hero__btn');

searchListEl.addEventListener('click', onLetterClickChangeBtnLetter);

function onLetterClickChangeBtnLetter(event) {
  const letterSelected = event.target.name.toUpperCase();
  heroButtonEl.textContent = letterSelected;
  const tabAndDeckScreen = window.matchMedia('(min-width: 768px)');
  searchByttonAnimation(tabAndDeckScreen);
}

function searchByttonAnimation(x) {
  if (!x.matches) {
    searchListEl.style.transform = 'translateY(-50%)';
    searchListEl.style.opacity = '0';
    searchListEl.style.transition =
      'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)';
    searchListEl.style.pointerEvents = 'none';
    setTimeout(() => {
      searchListEl.style.removeProperty('transform');
      searchListEl.style.removeProperty('opacity');
      searchListEl.style.removeProperty('transition');
      searchListEl.style.removeProperty('pointer-events');
    }, 250);
  }
}
//----------------------------------------
// const searchListEl = document.querySelector('.hero__search-list');
// const heroButtonEl = document.querySelector('.hero__btn');

// searchListEl.addEventListener('click', onLetterClickChangeBtnLetter);

// function onLetterClickChangeBtnLetter(event) {
//   const letterSelected = event.target.name.toUpperCase();
//   heroButtonEl.textContent = letterSelected;
//   searchListEl.style.transform = 'translateY(-100%)';
//   searchListEl.style.opacity = '0';
//   searchListEl.style.transition =
//     'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)';
//   searchListEl.style.display = 'none';
//   setTimeout(() => {
//     searchListEl.style.removeProperty('transform');
//     searchListEl.style.removeProperty('opacity');
//     searchListEl.style.removeProperty('transition');
//     searchListEl.style.removeProperty('display');
//   }, 500);
// }

// function myFunction(x) {
//   if (x.matches) {
//     document.body.style.backgroundColor = 'yellow';
//   } else {
//     document.body.style.backgroundColor = 'pink';
//   }
// }

// // Create a MediaQueryList object
// const tabAndDeckScreen = window.matchMedia('(min-width: 768px)');

// // Call the match function at run time:
// myFunction(tabAndDeckScreen);

// // Add the match function as a listener for state changes:
// tabAndDeckScreen.addListener(myFunction);
