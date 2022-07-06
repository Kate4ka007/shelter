import { arrayBuffer } from 'stream/consumers'
import IProduct from './components/intefaces/IProduct'
import './styles.css'
import ProductCard, {callback} from './components/productCard'
import product from '../server/product'


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
  render(data: Array<IProduct>) {
    data.forEach(({ id, title, description, price, rating, image, category }) => {
      const prodItem = document.createElement('div')
      prodItem.classList.add('prod-item')
      prodItem.innerHTML = `<div class="prod-img-wrapper"><img class="prod-img" src=${image} alt=${category}></div>
        <p class="item-title">${title}</p>
        <div class="item-descb">${description.split('').splice(0, 80).join('') + '...'}</div>
        <div class="price-rating"><div class="item-rating-wrapper"><img class="star" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt=""><div class="item-rating">${rating.rate}</div></div>
        <div class="item-price">$ ${price}</div></div>
        `
      const butItem = document.createElement('button')
      butItem.classList.add('item-button')
      butItem.innerHTML = `<img class="item-cart" src="https://cdn-icons-png.flaticon.com/512/3523/3523885.png" alt="">ADD TO CART`

      butItem.addEventListener('click', (e) => {

        /*const modalWindow = document.createElement('div')
          modalWindow.classList.add('modal-window')
          modalWindow.innerHTML = `${description}`
          document.body.appendChild(modalWindow) */
/*         console.log('hi')
        prod.sortPrice() */

      })
      prodItem.appendChild(butItem)
      document.body.appendChild(prodItem)
    /*    document.body.appendChild(img) */

      

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