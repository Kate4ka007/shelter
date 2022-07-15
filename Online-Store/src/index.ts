import IProduct from './components/intefaces/IProduct';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index'
import './styles.scss';
import ProductCard, { callback } from './components/productCard';
import PRODUCT from '../server/product';
import './components/page/header';
import Main from './components/page/main';
import {MDCSlider, MDCSliderFoundation} from '@material/slider'; 

//import noUiSlider from 'nouislider';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';  

import SortButton from './components/buttons/sortButton';

let dataProd: IProduct[] = PRODUCT;

class Product {
  _dataProd: IProduct[] = dataProd;
  _dataProdFiltr: IProduct[] = this._dataProd;

  render(dataProd: Array<IProduct>) {
    dataProd.forEach(({ id, title, description, price, rating, image, category, release, color, countInStock }) => {
      const newCard = new ProductCard({ id, title, description, price, rating, image, category, release, color, countInStock }, callback)
      newCard.createCard();
    })

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    (document.querySelector('.main') as HTMLDivElement).appendChild(buttonContainer)


    const sortButton = new SortButton('btn btn-outline-success btn-sort-price', 'Sort by price MIN-MAX', this._dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.PriceMin)
    });
    sortButton.render();


    const sortButtonMax = new SortButton('btn btn-outline-success btn-sort-pricemax', 'Sort by price MAX-MIN', this._dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.PriceMax)
    });
    sortButtonMax.render();


    const sortRating = new SortButton('btn btn-outline-success btn-sort-rating', 'Sort by rating', this._dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.Rating)
    });
    sortRating.render();

    const sortTitle = new SortButton('btn btn-outline-success btn-sort-title', 'Sort A-Z', this._dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.TitleUp)
    });
    sortTitle.render();

    const sortTitleDown = new SortButton('btn btn-outline-success btn-sort-titleDown', 'Sort Z-A', this._dataProd, buttonContainer, () => {
      buttonContainer.innerHTML = ''
      prod.sortProducts(SortType.TitleDown)
    });
    sortTitleDown.render();

    const reset = new SortButton('btn btn-outline-success btn-reset', 'RESET ALL', this._dataProd, buttonContainer, () => {
      document.querySelector('.main').innerHTML = '';
      buttonContainer.innerHTML = ''
      prod.render(PRODUCT);
      prod._dataProd = PRODUCT;
      const inputColor = document.querySelectorAll('input');
      inputColor.forEach(el => el.checked = true);
    });
    reset.render();

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


  typeCheckRender() {
    const checkContainerCategory = document.createElement('div');
    const checkboxesCategory = document.createElement('div');
    checkboxesCategory.className = 'checkboxes-category';
    let arr: Array<string> = [];
    this._dataProd.map(el => arr.push(el.category));
    let categoryCheckItems = new Set(arr);

    categoryCheckItems.forEach((data) => {
      const inputCategory = document.createElement('input');
      inputCategory.className = 'category-checkbox';
      inputCategory.type = 'checkbox';
      inputCategory.id = data;
      inputCategory.name = data;
      inputCategory.checked = true;
      checkboxesCategory.appendChild(inputCategory);
      const labeltCategory = document.createElement('label');
      labeltCategory.className = 'check-category__label';
      labeltCategory.htmlFor = data;
      labeltCategory.textContent = data;
      checkboxesCategory.appendChild(labeltCategory);
    });

    (checkContainerCategory as HTMLDivElement).appendChild(checkboxesCategory);
    document.body.appendChild(checkContainerCategory);
  }



  notFound() {
    const notFound = document.createElement('div');
    notFound.className = 'alert-window';
    notFound.innerHTML = `<div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> Change a few things up and try submitting again (no matches found).
  </div>`
    document.querySelector('.main').appendChild(notFound)
  }

  modal(data: IProduct) {

    const modalWindowWrapper = document.createElement('div');
    modalWindowWrapper.className = 'modal-wrapper';
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modals';
    modalWindow.innerHTML = `<div class="modals__img-wrapper">                                  
    <img class="modals__img" src=${data.image} alt=${data.category}>
    </div>
    <div class="modals__title-wrapper">
      <p class="modals__title">${data.title}</p>
      <p class="modals__decribtion">${data.description}</p>          
      <div class="modals__rating-wrapper">
        <img class="modals__star" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
          <div class="modals__rating">${data.rating.rate}</div>
          <div class="modals__reviews">${data.rating.count} Reviews</div>          
          <div class="modals__price">$ ${data.price}</div>          
      </div>
      <div class="modals__countstorage">In stock ${data.countInStock} pieces</div>
      <div class="modals__release">Released in ${data.release}</div>
      <button type="button" class='btn btn-outline-success modals__close'>Close</button>     
    </div>`;

    modalWindowWrapper.appendChild(modalWindow)
    document.body.appendChild(modalWindowWrapper)
    const closeBtn = document.querySelector('.modals__close')! as HTMLDivElement;
    closeBtn.addEventListener('click', () => {
      modalWindowWrapper.remove();
    })


  }


  sortProducts(type: SortType) {
    let arr: Array<IProduct> = []
    this._dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    let sortArr;
    if (type === SortType.PriceMin) {
      sortArr = arr.sort((a, b) => a.price - b.price)
    } else if (type === SortType.PriceMax) {
      sortArr = arr.sort((a, b) => b.price - a.price)
    } else if (type === SortType.Rating) {
      sortArr = arr.sort((a, b) => a.rating.rate - b.rating.rate)
    } else if (type === SortType.Count) {
      sortArr = arr.sort((a, b) => a.rating.count - b.rating.count)
    } else if (type === SortType.Realise) {
      sortArr = arr.sort((a, b) => a.release - b.release)
    } else if (type === SortType.TitleUp) {
      sortArr = arr.sort((a, b) => {
        return a.title.localeCompare(b.title);
      })
    } else if (type === SortType.TitleDown) {
      sortArr = arr.sort((a, b) => {
        return b.title.localeCompare(a.title);
      })
    }


    document.querySelector('.main').innerHTML = ''
    prod.render(sortArr)

  }
}
const main = new Main();
main.render();

const prod = new Product();
prod.render(prod._dataProd);
prod.colorCheckRender();
prod.typeCheckRender()

const colorCheckboxes = document.querySelectorAll('.color-checkbox') as NodeListOf<HTMLInputElement>;
colorCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    (document.querySelector('.main') as HTMLDivElement).innerHTML = ''
    let newData = filteres(dataProd, colorCheckboxes)
    newData = filterCategory(newData, categoryCheckboxes)
    prod.render(newData)
    if (newData.length === 0) {
      prod.notFound()
    }
    prod._dataProd = newData;
  })
});



const categoryCheckboxes = document.querySelectorAll('.category-checkbox') as NodeListOf<HTMLInputElement>;
console.log(categoryCheckboxes)
categoryCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    console.log(el);
    (document.querySelector('.main') as HTMLDivElement).innerHTML = ''
    let newData = filterCategory(dataProd, categoryCheckboxes)
    newData = filteres(newData, colorCheckboxes)
    prod.render(newData)
    if (newData.length === 0) {
      prod.notFound()
    }
    prod._dataProd = newData;
  })
});

function check(type: NodeListOf<HTMLInputElement>) {
  let ideas: Array<string> = []
  for (let i = 0; i < type.length; i++) {
    if (type[i].checked === true) {
      ideas.push(type[i].id)
    }
  } return ideas;
}


function filteres(data: IProduct[], type: NodeListOf<HTMLInputElement>) {
  let dfg = check(type);
  let newData: IProduct[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < dfg.length; j++) {
      if (dfg[j] === data[i].color) {
        if (!newData.includes(data[i]))
          newData.push(data[i])
      }
    }
  }
/*   if (newData.length === 0) {
    prod.notFound()
  } */
  return newData
}


function filterCategory(data: IProduct[], type: NodeListOf<HTMLInputElement>) {
  let dfg = check(type);
  let newData: IProduct[] = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < dfg.length; j++) {
      if (dfg[j] === data[i].category) {
        if (!newData.includes(data[i]))
          newData.push(data[i])
      }
    }
  }
/*   if (newData.length === 0) {
    prod.notFound()
  } */
  return newData
}


enum SortType {
  PriceMin = 'priceMin',
  PriceMax = 'priceMax',
  Count = 'count',
  Rating = 'rate',
  TitleUp = 'titleUp',
  TitleDown = 'titleDown',
  Realise = 'release'
}

const sl = document.createElement('div');
sl.className = "slider";
sl.id = "slider"; 
const spanSliderMin = document.createElement('div');
spanSliderMin.className = 'span-slider-min';
const spanSliderMax = document.createElement('div');
spanSliderMax.className = 'span-slider-max';


document.body.appendChild(sl);
document.body.appendChild(spanSliderMin);
document.body.appendChild(spanSliderMax);
var slider = document.getElementById('slider') as noUiSlider.target;
const tumb = document.querySelector('.noUi-handle-lower')
console.log(tumb)



noUiSlider.create(slider, {
    start: [0, 1000],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 1000
    }   
    
});

slider.noUiSlider.on('update', (values, handle) => {
console.log(Math.round(Number(values[0])))
console.log(Math.round(Number(values[1])))

const data = prod._dataProd;
const dataPrice = data.filter((el) => el.price >= Math.round(Number(values[0])) &&  el.price <= Math.round(Number(values[1])));
(document.querySelector('.main') as HTMLDivElement).innerHTML = '';
console.log(dataPrice)
prod.render(dataPrice)
  spanSliderMin.innerText =  '$ ' + parseInt((values[0]).toString()).toString();
  spanSliderMax.innerText =  '$ ' + parseInt((values[1]).toString()).toString();
});


const search = document.querySelector('.input-search') as HTMLInputElement;
search.addEventListener('change', () => {
  console.log(search.value)
  const data = dataProd;
  const searchData =  data.filter(el => el.title.toLowerCase().includes(search.value.toLowerCase()));
  console.log(searchData);
  (document.querySelector('.main') as HTMLDivElement).innerHTML = ''
  prod.render(searchData)
})






export default { dataProd, prod, Product };




