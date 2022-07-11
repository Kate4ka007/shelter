// import { arrayBuffer } from 'stream/consumers'
import IProduct from './components/intefaces/IProduct'
import './styles.scss'
import ProductCard, { callback } from './components/productCard'
import PRODUCT from '../server/product'
import './components/page/header'
import Main from './components/page/main'
import SortButton from './components/buttons/sortButton'
import LocalStorageInfo from './components/cart/cartList'



/* (async () => {
  let dataProd: IProduct[] = await(await fetch('../server/product.json')).json();

  console.log(dataProd);
  prod.render(dataProd)
})(); */




let dataProd: IProduct[] = PRODUCT


export type stateType = { key: 'active' | 'inactive' }


class Product {
  static state: stateType = { key: 'inactive' }
  render(dataProd: Array<IProduct>) {
    dataProd.forEach(({ id, title, description, price, rating, image, category, release, color, countInStock }) => {
      const newCard = new ProductCard({ id, title, description, price, rating, image, category, release, color, countInStock }, callback)
      newCard.createCard()

    })

    const buttonContainer = document.createElement('div');
    (document.querySelector('.main') as HTMLDivElement).appendChild(buttonContainer)
    const sortButton = document.createElement('button')
    sortButton.className = 'sort-button'
    sortButton.textContent = "sort by price"
    buttonContainer.appendChild(sortButton)
    sortButton.addEventListener('click', () => {
      prod.sortPrice()
    })

    const reset = new SortButton('reset-button', 'sort by price', dataProd, buttonContainer);
    

    const sortRating = document.createElement('button')
    sortRating.className = 'rating-button'
    sortRating.textContent = "sort by rating"
    buttonContainer.appendChild(sortRating)
    sortRating.addEventListener('click', () => {
      buttonContainer.innerHTML = ''
      prod.sortRating()
    })

    const sortCount = document.createElement('button')
    sortCount.className = 'count-button'
    sortCount.textContent = "sort by count"
    buttonContainer.appendChild(sortCount)
    sortCount.addEventListener('click', () => {
      buttonContainer.innerHTML = ''
      prod.sortCount()
    })


    const filter = document.createElement('button')
    filter.className = 'count-button'
    filter.textContent = "filter by color"
    buttonContainer.appendChild(filter)
    filter.addEventListener('click', () => {
      buttonContainer.innerHTML = ''
      prod.filter()
    })

    

    

    


}


  checkRender() {
  const checkContainer = document.createElement('div')
    const checkboxes = document.createElement('div')
    checkboxes.className = 'checkboxes'
    let arr: Array<string> = []
    dataProd.map(el => arr.push(el.color))
    let rrr = new Set(arr)

    rrr.forEach((data) => {
      const inputColor = document.createElement('input')
      inputColor.className = 'checkbox'
      inputColor.type = 'checkbox'
      inputColor.id = data
      inputColor.name = data
      inputColor.checked = false

      checkboxes.appendChild(inputColor)
      const labeltColor = document.createElement('label')
      labeltColor.className = 'checkbox__label'
      labeltColor.htmlFor = data
      labeltColor.textContent = data
      checkboxes.appendChild(labeltColor)
    });

    (checkContainer as HTMLDivElement).appendChild(checkboxes)
    document.body.appendChild(checkContainer)
}

  modal() {
  }


  sortPrice() {
    let arr: Array<IProduct> = []
    dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    const sortArr = arr.sort((a, b) => a.price - b.price)
    const sortProd = new Product()
    document.querySelector('.main').innerHTML = ''
    sortProd.render(sortArr)

  }

  sortRating() {
    let arr: Array<IProduct> = []
    dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    const sortArrR = arr.sort((a, b) => a.rating.rate - b.rating.rate)
    const sortProd = new Product()
    document.querySelector('.main').innerHTML = ''
    sortProd.render(sortArrR)
  }

  sortCount() {
    let arr: Array<IProduct> = []
    dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    const sortArrCount = arr.sort((a, b) => a.rating.count - b.rating.count)
    const sortProd = new Product()
    document.querySelector('.main').innerHTML = ''
    sortProd.render(sortArrCount)
  }

  filter() {
    let arr: Array<IProduct> = []
    dataProd.forEach(elememt => {
      arr.push(elememt)
    })
    const filterArrCount = arr.filter((a) => a.color === 'red')
    const sortProd = new Product()
    document.querySelector('.main').innerHTML = ''
    sortProd.render(filterArrCount)
  }

}
const main = new Main();
main.render()

const prod = new Product()
prod.render(dataProd)
prod.checkRender()

/* Product.state.key = "active"
Product.state.key = "inactive"
console.log(Product.state) */

    const inuu = document.querySelectorAll('.checkbox') as NodeListOf<HTMLInputElement>;
    inuu.forEach(el => {
      el.addEventListener('change', () => {
        (document.querySelector('.main') as HTMLDivElement).innerHTML = ''

        prod.render(filteres(dataProd))
        
      })
    })

    
    
    function ceckk() {
      let ideas: Array<string> = []
      for (let i = 0; i < inuu.length; i++) {
        if (inuu[i].checked === true) {
          ideas.push(inuu[i].id)
        }
      } return ideas;
    }
    


    function filteres(data: IProduct[]) {      
      let dfg = ceckk()
      const newData: IProduct[] = []
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < dfg.length; j++) {
            if (dfg[j] === data[i].color) {
              if(!newData.includes(data[i]))
            newData.push(data[i])
          }
        }

      }
      console.log(newData)
      return newData
    }

/* const rr = PRODUCT.find(el => el.id == 24)
console.log(rr) */

export default { dataProd, prod, Product };




