const light = document.querySelector('.theme__light');
const slider = document.querySelector('.slider.round');
const black = document.querySelector('.theme__dark');
const home = document.querySelector('.navigation__home');
const dropBTN = document.querySelector('.dropbtn');
const favorite = document.querySelector('.navigation__favorite');
const card = document.querySelector('.dark-tema');
const sliderMain = document.querySelector('.slider-main.round-main');
const bodyMain = document.querySelector('.modal');
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
    dropBTN.style.color = 'var(--var-accent-color)';
    drow.style.backgroundColor = 'var(--var-accent-color)';
  } else {
    light.style.color = 'var(--var-accent-color)';
    black.style.color = 'var(--var-primary-text-color)';
    home.style.color = 'var(--var-primary-text-color)';
    favorite.style.color = 'var(--var-primary-text-color)';
    card.style.color = 'var(--var-primary-bg-color))';
    dropBTN.style.color = 'var(--var-primary-text-color)';
  }
}

//   function changeThemeMain() {
//     if(document.body.classList.toggle("dark")){
//         bodyMain.style.background="var(--var-primary-text-color)"
//         black.style.color="var(--var-accent-color)"
//         light.style.color="var(--var-primary-bg-color)"
//         home.style.color="var(--var-primary-bg-color)"
//         favorite.style.color="var(--var-primary-bg-color)"
//         card.style.color="var(--var-primary-bg-color)"
//         dropBTN.style.color="var(--var-accent-color)"

//     }else{
//         light.style.color="var(--var-accent-color)"
//         black.style.color="var(--var-primary-text-color)"
//         home.style.color="var(--var-primary-text-color)"
//         favorite.style.color="var(--var-primary-text-color)"
//         card.style.color="var(--var-primary-bg-color)"
//         dropBTN.style.color="var(--var-primary-text-color)"
//         bodyMain.style.backgroundColor="var(--var-accent-color)"
//     }
//   }
