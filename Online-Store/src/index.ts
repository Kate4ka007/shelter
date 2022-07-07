import { arrayBuffer } from 'stream/consumers'
import IProduct from './components/intefaces/IProduct'
import './styles.css'
import ProductCard, {callback} from './components/productCard'
import product from '../server/product'
import './components/page/header'



/* (async () => {
  let dataProd: IProduct[] = await(await fetch('../server/product.json')).json();

  console.log(dataProd);
  prod.render(dataProd)
})(); */


let dataProd: IProduct[] = product

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






class Product {
  render(dataProd: Array<IProduct>) {
    dataProd.forEach(({ id, title, description, price, rating, image, category }) => {
      const newCard = new ProductCard({ id, title, description, price, rating, image, category }, callback)
      newCard.createCard()    

    })

    const sortButton = document.createElement('button')
      sortButton.className = 'sort-button'
      sortButton.textContent = "sort by price"
      document.body.appendChild(sortButton)
      sortButton.addEventListener('click', () => {
        prod.sortPrice()
      })

      const reset = document.createElement('button')
      reset.className = 'reset-button'
      reset.textContent = "reset"
      document.body.appendChild(reset)
      reset.addEventListener('click', () => {
        document.body.innerHTML = ''
        prod.render(dataProd)        
      })  


      const sortRating = document.createElement('button')
      sortRating.className = 'rating-button'
      sortRating.textContent = "sort by rating"
      document.body.appendChild(sortRating)
      sortRating.addEventListener('click', () => {
        document.body.innerHTML = ''
        prod.sortRating()
      }) 

      const sortCount = document.createElement('button')
      sortCount.className = 'count-button'
      sortCount.textContent = "sort by count"
      document.body.appendChild(sortCount)
      sortCount.addEventListener('click', () => {
        document.body.innerHTML = ''
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
    document.body.innerHTML = ''
    sortProd.render(sortArr)

  }

  sortRating() {
    let arr: Array<IProduct> = []
    dataProd.forEach(elememt => {
      arr.push(elememt)
    })    
    const sortArrR = arr.sort((a, b) => a.rating.rate - b.rating.rate)    
    const sortProd = new Product()
    document.body.innerHTML = ''
    sortProd.render(sortArrR)
  }

  sortCount() {
    let arr: Array<IProduct> = []
    dataProd.forEach(elememt => {
      arr.push(elememt)
    })    
    const sortArrCount = arr.sort((a, b) => a.rating.count - b.rating.count)    
    const sortProd = new Product()
    document.body.innerHTML = ''
    sortProd.render(sortArrCount)
  }



}

const prod = new Product()
prod.render(dataProd)
console.log(dataProd) 



/* setTimeout(() => {
  dataProd.map(item => arr.push(item))
  console.log(arr)
}, 1000); */



export default dataProd;