// import { arrayBuffer } from 'stream/consumers'
import IProduct from './components/intefaces/IProduct'
import './styles.scss'
import ProductCard, {callback} from './components/productCard'
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

/* fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json: IProduct[]) => {
    dataProd = json
    prod.render(dataProd)

/*     dataProd.forEach((data: IProduct) => {  
      const card = new ProductCard(data, callback);
      card.createCard()
    }) */

    /*
  })
  .catch((error: Error) => console.log('Ooops!' + error)) */



export type stateType = {key: 'active'|'inactive'}


class Product {
  static state: stateType = {key: 'inactive'}
  render(dataProd: Array<IProduct>) {
    dataProd.forEach(({ id, title, description, price, rating, image, category, release, color, countInStock }) => {
      const newCard = new ProductCard({ id, title, description, price, rating, image, category, release, color, countInStock }, callback)
      newCard.createCard()    

    })

    const sortButton = document.createElement('button')
      sortButton.className = 'sort-button'
      sortButton.textContent = "sort by price"
      document.body.appendChild(sortButton)
      sortButton.addEventListener('click', () => {
        prod.sortPrice()
      })
/* 
      const reset = document.createElement('button')
      reset.className = 'reset-button'
      reset.textContent = "reset"
      document.body.appendChild(reset)
      reset.addEventListener('click', () => {
        document.querySelector('.main').innerHTML = ''
        prod.render(dataProd)        
      })   */
      

      const reset = new SortButton('reset-button', 'sort by price', dataProd, document.querySelector('.main') )


      const sortRating = document.createElement('button')
      sortRating.className = 'rating-button'
      sortRating.textContent = "sort by rating"
      document.body.appendChild(sortRating)
      sortRating.addEventListener('click', () => {
        document.querySelector('.main').innerHTML = ''
        prod.sortRating()
      }) 

      const sortCount = document.createElement('button')
      sortCount.className = 'count-button'
      sortCount.textContent = "sort by count"
      document.body.appendChild(sortCount)
      sortCount.addEventListener('click', () => {
        document.querySelector('.main').innerHTML = ''
        prod.sortCount()
      }) 

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
}
const main = new Main();
main.render()

const prod = new Product()
prod.render(dataProd)
console.log(dataProd) 

Product.state.key = "active"
Product.state.key = "inactive"
console.log(Product.state)


const rr = PRODUCT.find(el => el.id == 24)
console.log(rr)


//cartProductList.setProductList(22)


export default {dataProd, prod};




