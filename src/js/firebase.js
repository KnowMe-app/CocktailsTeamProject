import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getCocktailById } from './CocktailsApiService';
import { markupCard } from './randomCocktailsCards';
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
  const userId = auth.currentUser.uid; // The user's ID, unique to the Firebase project. Do NOT use this value to authenticate with your backend server, if you have one. Use User.getToken() instead.
  const data = ref(db, 'favourite/' + userId + '/cocktails/');
  try {
    await update(data, cocktails);
    // console.log('data', data); // структура папок - місце збереження
    console.log('added cocktail', cocktails); // безпосередньо пошукова фраза яка стає ключем і паратметром
    // console.log('userId', userId); // унікальний номер юзера
  } catch {
    alert('Please, login');
  }
}

async function addIngrToFav(searchParams) {
  const ingredients = {};
  ingredients[searchParams] = searchParams;
  const userId = auth.currentUser.uid;
  const data = ref(db, 'favourite/' + userId + '/ingredients/');
  try {
    await update(data, ingredients);
  } catch {
    alert('Please, login');
  }
}

async function removeCocktailFromFav(searchParams) {
  const cocktails = {};
  cocktails[searchParams] = null;
  const userId = auth.currentUser.uid;
  const data = ref(db, 'favourite/' + userId + '/cocktails/');
  try {
    await update(data, cocktails);
    console.log('removed cocktail', cocktails);
  } catch {
    alert('Please, try again');
  }
}

async function removeIngrFromFav(searchParams) {
  const ingredients = {};
  ingredients[searchParams] = null;
  const userId = auth.currentUser.uid;
  const data = ref(db, 'favourite/' + userId + '/ingredients/');
  try {
    await update(data, ingredients);
  } catch {
    alert('Please, try again');
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
          // console.log('snapshot.val()', snapshot.val())
          const dataKeys = Object.keys(data); // ключ дорівнює назві пошукового запиту (коктейль / інгридієнт)
          // console.log('Object.keys(snapshot.val())', Object.keys(snapshot.val()))
          // dataKeys.map(dataKey => {...};                                      // рендеремо карточки
          // - перебираємо коктейлі
          
          for (const item of dataKeys) {
            getCocktailById(item).then(data => {
              let dataForCard = data.drinks;
              markupCard(dataForCard, markupCards);
            });
          }
          
          // - додаємо сердечко (через клас)
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  throw new Error('Please, login!!!');
}

export function checkInFavourite(event, idFavorite) {
  if (!event.target.classList.contains('favourite')) {
    event.target.classList.add('favourite');
    event.target.firstElementChild.classList.remove('svg-default');
    event.target.firstElementChild.classList.add('svg-favourite');
    addCocktailToFav(idFavorite);
  } else {
    event.target.classList.remove('favourite');
    event.target.firstElementChild.classList.remove('svg-favourite');
    event.target.firstElementChild.classList.add('svg-default');
    removeCocktailFromFav(idFavorite);
  }
}
