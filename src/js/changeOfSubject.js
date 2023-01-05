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

slider.addEventListener('click', changeTheme);
sliderMain.addEventListener('click', changeThemeMain);

function changeTheme() {
  if (document.body.classList.toggle('dark')) {
    black.style.color = 'var(--var-accent-color)';
    light.style.color = 'var(--var-primary-bg-color)';
    home.style.color = 'var(--var-primary-bg-color)';
    favorite.style.color = 'var(--var-primary-bg-color)';
    card.style.color = 'var(--var-primary-bg-color)';
    drow.style.color = 'var(--var-primary-bg-color)';
    dropBTN.style.color = 'var(--var-primary-bg-color)';
    
  } else {
    drow.style.color = 'var(--var-primary-text-color)'
    light.style.color = 'var(--var-accent-color)';
    black.style.color = 'var(--var-primary-text-color)';
    home.style.color = 'var(--var-primary-text-color)';
    card.style.color = 'var(--var-primary-text-color)';
    dropBTN.style.color = 'var(--var-primary-text-color)';
  }
}
const favMain = document.querySelector('.faivorite-main')
const homeMain = document.querySelector('.navigation__home-main')
const vector = document.querySelector('.favorite__icon')
const drop = document.querySelector('.dropdown-content-main')
const dropText =document.querySelector('.drownFavor')
const drowFav =document.querySelector('.drownFav')
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
    vector.style.fill='var(--var-primary-bg-color)'
    dropText.style.color='var(--var-primary-bg-color)'
    drop.style.background='var(--var-primary-text-color)'
    drowFav.style.color='var(--var-primary-bg-color)'
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
    vector.style.fill='var(--var-primary-text-color)'
    dropText.style.color='var(--var-primary-text-color)'
    drop.style.background='var(--var-primary-bg-color)'
    drowFav.style.color='var(--var-primary-text-color)'
    }
  }
