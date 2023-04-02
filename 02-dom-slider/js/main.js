// Napisz kod slidera

// 1. Stworz sobie pusta tablice images
// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie

const images = [];

images.push = ("https://petportal.pl/wp-content/uploads/2020/02/d9dea898-3448-453c-92e8-d13dafefd693-740x528.jpg","https://zoonews.pl/wp-content/uploads/2023/02/male-pieski-ktore-nie-rosna.jpg", "https://petportal.pl/wp-content/uploads/2019/11/dog-2420611_1920-740x555.jpg");

let counter = 0;

const photo = document.querySelector(`#photo`);
photo.src = images[0];

const prevbutton = document.querySelector(`#prevbutton`);
const nextbutton = document.querySelector('#nextbutton');

const handleTitleClick = () => {
    prevbutton.innerHTML = '';
}
