
const light = document.querySelector('.theme__light')
const slider = document.querySelector('.slider.round')
const black = document.querySelector('.theme__dark')
const home = document.querySelector('.navigation__home')
const favorite = document.querySelector('.navigation__favorite')
const card = document.querySelector('.dark-tema')

slider.addEventListener('click', changeTheme)
function changeTheme() {
    if(document.body.classList.toggle("dark")){
        black.style.color="var(--var-accent-color)"
        light.style.color="var(--var-primary-bg-color)"
        home.style.color="var(--var-primary-bg-color)"
        favorite.style.color="var(--var-primary-bg-color)"
        card.style.color="var(--var-primary-bg-color)"
        
    }else{
        light.style.color="var(--var-accent-color)"
        black.style.color="var(--var-primary-text-color)"
        home.style.color="var(--var-primary-text-color)"
        favorite.style.color="var(--var-primary-text-color)"
        card.style.color="var(--var-primary-text-color)"
    }
  }
  
