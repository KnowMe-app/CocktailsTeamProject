const light = document.querySelector('.theme__light');
const slider = document.querySelector('.slider.round');
const black = document.querySelector('.theme__dark');
const home = document.querySelector('.navigation__home');
const dropBTN = document.querySelector('.dropbtn-Favorite');
const favorite = document.querySelector('.navigation__favorite');
const card = document.querySelector('.dark-tema');
const sliderMain = document.querySelector('.slider-main.round-main');
const bodyMain = document.querySelector('.modal');
const lightMain = document.querySelector('.theme__light-main')
const darkMain = document.querySelector('.theme__dark-main')
const drow = document.querySelector('.dropdown-content');
const login = document.querySelector('.btn-login')
const searForm = document.querySelector('.search__form button')
const searInput = document.querySelector('.search__form input')
const modalCocktail= document.querySelector('.cocktails-modal')
const svg = document.querySelectorAll('svg')

// const currentTheme = localStorage.getItem("theme");
// // Если текущая тема в localStorage равна "dark"…
// if (currentTheme == "dark") {
//   // …тогда мы используем класс .dark-theme
//   document.body.classList.add("dark-theme");
// }

slider.addEventListener('click', changeTheme);
sliderMain.addEventListener('click', changeThemeMain);

function changeTheme() {

  
  if (document.body.classList.toggle('dark')) {
    black.style.color = 'var(--var-accent-color)';
    light.style.color = 'var(--var-primary-bg-color)';
    home.style.color = 'var(--var-primary-bg-color)';
    drow.style.color = 'var(--var-primary-bg-color)';
    drow.style.background='var(--var-primary-text-color)'
    dropBTN.style.color = 'var(--var-primary-bg-color)';
    login.style.background='var(--var-accent-color)'
    login.style.color='var(--var-primary-bg-color)'
    searForm.style.background='var(--var-primary-text-color)'
    searInput.style.background='var(--var-primary-text-color)'
    card.style.color='var(--var-primary-bg-color)'
    modalCocktail.style.background='var(--var-primary-text-color)'
    svg.forEach(Add => Add.style.fill='var(--var-primary-bg-color)')
    
  } else {
    drow.style.color = 'var(--var-primary-text-color)'
    drow.style.background='var(--var-primary-bg-color)'
    light.style.color = 'var(--var-accent-color)';
    black.style.color = 'var(--var-primary-text-color)';
    home.style.color = 'var(--var-primary-text-color)';
    dropBTN.style.color = 'var(--var-primary-text-color)';
    login.style.background='var(--var-primary-bg-color)'
    login.style.color='var(--var-accent-color)'
    searForm.style.background='var(--var-primary-bg-color)'
    searInput.style.background='var(--var-primary-bg-color)'
    card.style.color='var(--var-primary-text-color)'
    modalCocktail.style.background='var(--var-primary-bg-color)'
    svg.forEach(Add => Add.style.fill='var(--var-primary-text-color)')
    
  }
}
const favMain = document.querySelector('.faivorite-main')
const homeMain = document.querySelector('.navigation__home-main')

const drop = document.querySelector('.dropdown-content-main')
const dropText =document.querySelector('.drownFavor')
const drowFav =document.querySelector('.drownFav')
const searFormMain = document.querySelector('.search__form-main button')
const searInputMain= document.querySelector('.search__form-main input')

  function changeThemeMain() {
    if(document.body.classList.toggle("dark")){
        bodyMain.style.background="var(--var-primary-text-color)"
        black.style.color="var(--var-accent-color)"
        light.style.color="var(--var-primary-bg-color)"
        home.style.color="var(--var-primary-bg-color)"
        card.style.color="var(--var-primary-bg-color)"
        dropBTN.style.color="var(--var-accent-color)"
        lightMain.style.color='var(--var-primary-bg-color)';
    darkMain.style.color='var(--var-accent-color)'
    favMain.style.color='var(--var-primary-bg-color)'
    homeMain.style.color='var(--var-primary-bg-color)'
    // vector.style.fill='var(--var-primary-bg-color)'
    dropText.style.color='var(--var-primary-bg-color)'
    drop.style.background='var(--var-primary-text-color)'
    drowFav.style.color='var(--var-primary-bg-color)'
    searFormMain.style.background='var(--var-primary-text-color)'
    searInputMain.style.background='var(--var-primary-text-color)'
    searForm.style.background='var(--var-primary-text-color)'
    searInput.style.background='var(--var-primary-text-color)'
    login.style.background='var(--var-primary-text-color)'
    login.style.color='var(--var-primary-bg-color)'
    // mobileIcon.style.fill='var(--var-primary-bg-color)'
    // closeIcon.style.fill='var(--var-primary-bg-color)'
    modalCocktail.style.background='var(--var-primary-text-color)'
   
    svg.forEach(Add => Add.style.fill='var(--var-primary-bg-color)')
    }else{
        light.style.color="var(--var-accent-color)"
        black.style.color="var(--var-primary-text-color)"
        home.style.color="var(--var-primary-text-color)"
        card.style.color="var(--var-primary-text-color)"
        dropBTN.style.color="var(--var-primary-text-color)"
        bodyMain.style.backgroundColor="var(--var-primary-bg-color)"
        lightMain.style.color='var(--var-accent-color)';
    darkMain.style.color='var(--var-primary-text-color)'
    favMain.style.color='var(--var-primary-text-color)'
    homeMain.style.color='var(--var-primary-text-color)'
    // vector.style.fill='var(--var-primary-text-color)'
    dropText.style.color='var(--var-primary-text-color)'
    drop.style.background='var(--var-primary-bg-color)'
    drowFav.style.color='var(--var-primary-text-color)'
    searFormMain.style.background='var(--var-primary-bg-color)'
    searInputMain.style.background='var(--var-primary-bg-color)'
    searForm.style.background='var(--var-primary-bg-color)'
    searInput.style.background='var(--var-primary-bg-color)'
    login.style.background='var(--var-primary-bg-color)'
    login.style.color='var(--var-accent-color)'
    // mobileIcon.style.fill='var(--var-primary-text-color)'
    // closeIcon.style.fill='var(--var-primary-text-color)'
    modalCocktail.style.background='var(--var-primary-bg-color)'
    
    svg.forEach(Add => Add.style.fill='var(--var-primary-text-color)')
    }
  }
