import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getCocktailById } from './CocktailsApiService';
import { markupCard } from './randomCocktailsCards';
import { inFavoritePage } from './favoriteCocktails';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getDatabase,
  ref,
  onValue,
  get,
  child,
  update,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDFcAreCWID-9C9oPsYvHsHfe-CGSdW08U',
  authDomain: 'cocktails-team-project-86758.firebaseapp.com',
  projectId: 'cocktails-team-project-86758',
  storageBucket: 'cocktails-team-project-86758.appspot.com',
  messagingSenderId: '24636582189',
  appId: '1:24636582189:web:30f6356787dd0fd3b2cba4',
  measurementId: 'G-0MXLZKTJYN',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const db = getDatabase();

const markupCards = document.querySelector('.markup-cards');

const btnLogin = document.querySelector('.btn-login');
btnLogin.addEventListener('click', onLogin);

function onLogin(event) {
  if (event.target.textContent === 'logIn') signInUser();
  else signOutUser();
}

async function signInUser() {
  await signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken; // The signed-in user info.
      const user = result.user;
      // console.log (token);
      // console.log (user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message; // The email of the user's account used.
      const email = error.customData.email; // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

async function signOutUser() {
  await signOut(auth)
    .then(() => {}) // Sign-out successful.
    .catch(error => {}); // An error happened.
}

///---------------------------------------------------onAuthStateChanged
onAuthStateChanged(auth, user => {
  changeBtnLoginLogout(user);
  //   getFavouriteCocktails();
});

function changeBtnLoginLogout(user) {
  if (user) btnLogin.textContent = 'logOut';
  else btnLogin.textContent = 'logIn';
}

//-----------------------------------------------------Add / Remove from Firebase

export async function addCocktailToFav(searchParams) {
  const cocktails = {};
  cocktails[searchParams] = searchParams;
  try {
    const userId = auth.currentUser.uid; // The user's ID, unique to the Firebase project. Do NOT use this value to authenticate with your backend server, if you have one. Use User.getToken() instead.
    const data = ref(db, 'favourite/' + userId + '/cocktails/');
    await update(data, cocktails);
    // console.log('data', data); // структура папок - місце збереження
    console.log('added cocktail', cocktails); // безпосередньо пошукова фраза яка стає ключем і паратметром
    // console.log('userId', userId); // унікальний номер юзера
  } catch {
    console.log('Please, login, to use God mode');
  }
}

export async function addIngrToFav(searchParams) {
  const ingredients = {};
  ingredients[searchParams] = searchParams;

  try {
    const userId = auth.currentUser.uid;
    const data = ref(db, 'favourite/' + userId + '/ingredients/');
    await update(data, ingredients);
  } catch {
    console.log('Please, login, to use God mode');
  }
}

async function removeCocktailFromFav(searchParams) {
  const cocktails = {};
  cocktails[searchParams] = null;
  try {
    const userId = auth.currentUser.uid;
    const data = ref(db, 'favourite/' + userId + '/cocktails/');
    await update(data, cocktails);
    console.log('removed cocktail', cocktails);
  } catch {
    console.log('Please, login, to use God mode');
  }
}

export async function removeIngrFromFav(searchParams) {
  const ingredients = {};
  ingredients[searchParams] = null;
  try {
    const userId = auth.currentUser.uid;
    const data = ref(db, 'favourite/' + userId + '/ingredients/');
    await update(data, ingredients);
  } catch {
    console.log('Please, login, to use God mode');
  }
}

///---------------------------------------------------Get from Firebase
export async function getFavouriteCocktails() {
  if (auth.currentUser) {
    // перевірка на логін
    const userId = auth.currentUser.uid;
    const dbRef = ref(getDatabase());
    return await get(child(dbRef, `favourite/${userId}/cocktails`))
      .then(snapshot => {
        if (snapshot.exists()) {
          // перевіряємо чи є взагалі збережені коктейлі на firebase
          const data = snapshot.val(); // спеціальний метод отримання даних
          const dataKeys = Object.keys(data); // ключ дорівнює назві пошукового запиту (коктейль / інгридієнт)

          // рендеремо карточки
          // - перебираємо коктейлі
          for (const item of dataKeys) {
            getCocktailById(item).then(data => {
              let dataForCard = data.drinks;
              markupCard(dataForCard, markupCards, 'favourite');

          // - додаємо сердечко + Remove
              let forBtnFavorite = markupCards.querySelectorAll('.card__btn-add');
              inFavoritePage(forBtnFavorite);
            });
          }


        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  throw new Error('Please, login!!!');
}

export function checkInFavourite(event, idFavorite) {
  const perem = event.target.closest('.card__btn-add') || event.target.closest('.card__btn-add.cocktails-modal__btn');

  if (!perem.classList.contains('favourite')) {
    perem.classList.add('favourite');
    if(perem === event.target.closest('.card__btn-add.cocktails-modal__btn')) {
      perem.textContent = 'Remove from favotite'
      // perem.style.backgroundColor = '#fd5103'
    return
    }
    perem.firstElementChild.textContent = 'Remove'
    perem.lastElementChild.classList.remove('svg-default');
    perem.lastElementChild.classList.add('favourite');
    addCocktailToFav(idFavorite);
  } else {
    perem.classList.remove('favourite');
    
    if(perem === event.target.closest('.card__btn-add.cocktails-modal__btn')) {
      // perem.style.color = 'white'
      perem.textContent = 'Add to favotite'
      // perem.style.border = '0'
    return
    }
    perem.firstElementChild.textContent = 'Add to'
    perem.lastElementChild.classList.remove('favourite');
    perem.lastElementChild.classList.add('svg-default');
    removeCocktailFromFav(idFavorite);
  }
}
