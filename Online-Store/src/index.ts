import IProduct from './components/intefaces/IProduct';
import './styles.scss';
import ProductCard, { callback } from './components/productCard';
import PRODUCT from '../server/product';
import './components/page/header';
import Main from './components/page/main';
import SortButton from './components/buttons/sortButton';

/* (async () => {
  let dataProd: IProduct[] = await(await fetch('../server/product.json')).json();

  console.log(dataProd);
  prod.render(dataProd)
})(); */
let dataProd: IProduct[] = PRODUCT;
export type stateType = { key: 'active' | 'inactive' }


class Product {
  _dataProd: IProduct[] = dataProd
  static state: stateType = { key: 'inactive' }
  render(dataProd: Array<IProduct>) {
    dataProd.forEach(({ id, title, description, price, rating, image, category, release, color, countInStock }) => {
      const newCard = new ProductCard({ id, title, description, price, rating, image, category, release, color, countInStock }, callback)
      newCard.createCard();
    })

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    (document.querySelector('.main') as HTMLDivElement).appendChild(buttonContainer)
    const sortButton = document.createElement('button');
    sortButton.className = 'sort-button';
    sortButton.textContent = "sort by price";
    buttonContainer.appendChild(sortButton);
    sortButton.addEventListener('click', () => {
      prod.sortProducts(SortType.Price)
    })

    const reset = new SortButton('reset-button', 'reset', this._dataProd, buttonContainer, () => {
      document.querySelector('.main').innerHTML = '';
      buttonContainer.innerHTML = ''
      prod.render(PRODUCT);
      prod._dataProd = PRODUCT;
      const inputColor = document.querySelectorAll('input');
      inputColor.forEach(el => el.checked = false);
    });
    reset.render();

    const sortRating = new SortButton('rating-button', 'sort by rating', this._dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.Rating)
    });
    sortRating.render();

    const sortCount = new SortButton('count-button', 'sort by count', this._dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.Count)
    });
    sortCount.render();

  }


  colorCheckRender() {
    const checkContainer = document.createElement('div');
    const checkboxes = document.createElement('div');
    checkboxes.className = 'checkboxes';
    let arr: Array<string> = [];
    this._dataProd.map(el => arr.push(el.color));
    let colorCheckItems = new Set(arr);

    colorCheckItems.forEach((data) => {
      const inputColor = document.createElement('input');
      inputColor.className = 'color-checkbox';
      inputColor.type = 'checkbox';
      inputColor.id = data;
      inputColor.name = data;
      inputColor.checked = true;
      checkboxes.appendChild(inputColor);
      const labeltColor = document.createElement('label');
      labeltColor.className = 'checkbox__label';
      labeltColor.htmlFor = data;
      labeltColor.textContent = data;
      checkboxes.appendChild(labeltColor);
    });

    (checkContainer as HTMLDivElement).appendChild(checkboxes);
    document.body.appendChild(checkContainer);
  }

  modal() {

  }


 
  sortProducts(type: SortType) {
    let arr: Array<IProduct> = []
    this._dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    let sortArr;
      if(type === SortType.Price) {
        sortArr = arr.sort((a, b) => a.price - b.price)
      } else if(type === SortType.Rating) {
        sortArr = arr.sort((a, b) => a.rating.rate - b.rating.rate)
      } else if (type === SortType.Count) {
        sortArr = arr.sort((a, b) => a.rating.count - b.rating.count)
      }
    
    //const sortProd = new Product()
    document.querySelector('.main').innerHTML = ''
    prod.render(sortArr)

  }

  /* sortRating() {
    let arr: Array<IProduct> = []
    this._dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    const sortArrR = arr.sort((a, b) => a.rating.rate - b.rating.rate)
    //const sortProd = new Product()
    document.querySelector('.main').innerHTML = ''
    prod.render(sortArrR)

  } */

  /* sortCount() {
    let arr: Array<IProduct> = []
    this._dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    const sortArrCount = arr.sort((a, b) => a.rating.count - b.rating.count)
   // const sortProd = new Product()
    document.querySelector('.main').innerHTML = ''
    prod.render(sortArrCount)
  } */
/* 
  filter() {
    let arr: Array<IProduct> = []
    this._dataProd.forEach(elememt => {
      arr.push(elememt);
    })
    const filterArrCount = arr.filter((a) => a.color === 'red')
    const sortProd = new Product();
    document.querySelector('.main').innerHTML = '';
    sortProd.render(filterArrCount);
  } */

}
const main = new Main();
main.render();

const prod = new Product();
prod.render(prod._dataProd);
prod.colorCheckRender();

const colorCheckboxes = document.querySelectorAll('.color-checkbox') as NodeListOf<HTMLInputElement>;
colorCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = ''
    const newData = filteres(dataProd)
    prod.render(newData)
    prod._dataProd = newData;
  })
});

function check() {
  let ideas: Array<string> = []
  for (let i = 0; i < colorCheckboxes.length; i++) {
    if (colorCheckboxes[i].checked === true) {
      ideas.push(colorCheckboxes[i].id)
    }
  } return ideas;
}



function filteres(data: IProduct[]) {
  let dfg = check();
  let newData: IProduct[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < dfg.length; j++) {
      if (dfg[j] === data[i].color) {
        if (!newData.includes(data[i]))
          newData.push(data[i])
      }
    }
  }
  if (newData.length === 0) {
    newData = dataProd;
  }
  return newData
}

/* const rr = PRODUCT.find(el => el.id == 24)
console.log(rr) */


enum SortType {
  Price = 'price',
  Count = 'count',
  Rating = 'rate'
}

export default { dataProd, prod, Product };



