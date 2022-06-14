// function MakePizza(topping1, topping2, size, delivery) {
//   this.topping1 = topping1;
//   this.topping2 = topping2;
//   this.size = size;
//   this.delivery = delivery;
//   this.tasty = true;
// }

// let smallPizza = new MakePizza('cheese', 'jalapenos', 'small', true);
// console.log(smallPizza);
// ########################################
// class MakePasta {
//   constructor(pastaSize, pastaSauce, pricePoint) {
//     this.size = pastaSize;
//     this.sauce = pastaSauce;
//     this.price = pricePoint;
//   }
//   eat() {
//     alert('YUMMY');
//   }
// }
// let faggiole = new MakePasta('medium', 'marinara', '$$$$');
// console.log(faggiole);

// CocktailDB:

// const searchCocktailByName =
//   'www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// const listAllCocktailsByFirstLetter =
//   'www.thecocktaildb.com/api/json/v1/1/search.php?f=';

let cocktailArray = [1, 2, 3, 4, 5, 6];
document.querySelector('.prev').addEventListener('click', goPrevious);
document.querySelector('.next').addEventListener('click', goNext);
let index = 0;
function goPrevious() {
  if (index > 1) {
    index -= 1;
    document
      .getElementById(index)
      .scrollIntoView({ behavior: 'smooth', inline: 'center' });
    console.log(
      `index is ${index} and drink is ${
        document.getElementById(index).innerText
      }`
    );
  } else {
    index = 0;
    document
      .getElementById(index)
      .scrollIntoView({ behavior: 'smooth', inline: 'center' });
    console.log(
      `index is ${index} and drink is ${
        document.getElementById(index).innerText
      }`
    );
  }
}
function goNext() {
  if (index > cocktailArray.length) {
    index = cocktailArray.length;
    document
      .getElementById(index)
      .scrollIntoView({ behavior: 'smooth', inline: 'center' });
    console.log(
      `index is ${index} and drink is ${
        document.getElementById(index).innerText
      }`
    );
  } else {
    index += 1;
    document
      .getElementById(index)
      .scrollIntoView({ behavior: 'smooth', inline: 'center' });
    console.log(
      `index is ${index} and drink is ${
        document.getElementById(index).innerText
      }`
    );
  }
}

async function goFetch() {
  cocktailArray.forEach((x) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((data) => {
        const cleanedData = data.drinks[0];
        const anchor = document.querySelector('.wrapper');

        const drinkCard = document.createElement('section');
        drinkCard.setAttribute('class', 'drinkCard');
        drinkCard.setAttribute('id', cocktailArray.indexOf(x));

        const img = document.createElement('img');
        img.setAttribute('class', 'cocktailImage');
        img.src = cleanedData.strDrinkThumb;

        const title = document.createElement('h1');
        title.innerText = cleanedData.strDrink + ` ||  With an index of ${x}`;
        title.setAttribute('class', 'title');

        anchor.append(drinkCard);
        drinkCard.append(img);
        drinkCard.append(title);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  });
}

goFetch();

// function autoRotate() {
//   setTimeout(() => {
//     goNext();
//   }, 400);
// }
