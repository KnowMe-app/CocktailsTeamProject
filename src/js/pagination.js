// Referencies
const refs = {
  gallery: document.querySelector('.markup-cards'),
  paginationNumbers: document.querySelector('.pagination__numbers'),
  pageNumbers: document.getElementsByClassName('page__number'),
  prevPageBtn: document.querySelector('.page-prev'),
  nextPageBtn: document.querySelector('.page-next'),
};

// Const variables
const PAGE_LIMIT = 9;
let currentPage = 1;

// RENDER PAGE functions
export function renderPage(drinks) {
  renderCards(drinks, 1);
  renderPaginationNumbers(drinks);

  refs.prevPageBtn.addEventListener('click', () => {
    renderCards(drinks, currentPage - 1);
  });
  refs.nextPageBtn.addEventListener('click', () => {
    renderCards(drinks, currentPage + 1);
  });

  [...refs.pageNumbers].forEach(number => {
    const pageIndex = +number.textContent;

    number.addEventListener('click', () => {
      renderCards(drinks, pageIndex);
    });
  });
}

function renderCards(drinks, pageNumber) {
  currentPage = pageNumber;
  const currentPageGroup = pageNumber * PAGE_LIMIT;
  const previousPageGroup = (pageNumber - 1) * PAGE_LIMIT;

  clearGallery();
  setPaginationButtonStatus(drinks);
  switchActivePageNumber();

  const formedCardsGroup = [...drinks].filter(
    (_, index) => index >= previousPageGroup && index < currentPageGroup
  );
  return appendCards(formedCardsGroup);
}

function createCardMarkup({ strDrinkThumb, strDrink }) {
  return `<li class="card">
      <img src="${strDrinkThumb}" alt="${strDrink}" />
      <div class="card__info">
        <p class="card__title">${strDrink}</p>
        <div class="card__btns">
          <button type="button" class="card__btn">
            Learn more
          </button>
          <button type="button" class="card__btn-add">
            Add to
            <svg class="card__icon" width="18" height="18">
              <use href="./images/icons.svg#icon-Heart"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>`;
}

function appendCards(formedGroup) {
  refs.gallery.insertAdjacentHTML(
    'beforeend',
    formedGroup.map(drink => createCardMarkup(drink)).join('')
  );
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

// PAGINATION functions
function renderPaginationNumbers(items) {
  if (items.length <= PAGE_LIMIT) return;
  for (let i = 1; i <= Math.ceil(items.length / PAGE_LIMIT); i++) {
    createPaginationNumber(i);
  }
  switchActivePageNumber();

  refs.prevPageBtn.classList.remove('visually-hidden');
  refs.nextPageBtn.classList.remove('visually-hidden');
}

function createPaginationNumber(index) {
  const pageNumberEl = document.createElement('a');
  pageNumberEl.textContent = index;
  pageNumberEl.classList.add('page__number');

  refs.paginationNumbers.append(pageNumberEl);
}

export function clearPagination() {
  refs.paginationNumbers.innerHTML = '';
}

// PAGINATION BUTTONS functions
function switchActivePageNumber() {
  [...refs.pageNumbers].forEach(number => {
    number.classList.remove('page-active');

    const pageIndex = +number.textContent;

    if (pageIndex === currentPage) {
      number.classList.add('page-active');
    }
  });
}

// Disable/Enable Prev/Next buttons
function disableButton(button) {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
}
function enableButton(button) {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
}

//Set Pagination button status (disabled or enabled)
function setPaginationButtonStatus(items) {
  if (currentPage === 1) {
    disableButton(refs.prevPageBtn);
  } else {
    enableButton(refs.prevPageBtn);
  }

  if (currentPage === Math.ceil(items.length / PAGE_LIMIT)) {
    disableButton(refs.nextPageBtn);
  } else {
    enableButton(refs.nextPageBtn);
  }
}
