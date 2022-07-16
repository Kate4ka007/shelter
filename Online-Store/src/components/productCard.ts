import IProduct from "./intefaces/IProduct";
import ButtonMain from "./buttons/button-main";
import cartProductList from './cart/cartList';
import {prod} from '../index'
import { head } from "./page/header";

class ProductCard {
  _data: IProduct;

  constructor(data: IProduct, callback: () => void) {
    this._data = data
  }

  createCard(): void {
    const store = cartProductList.cartProductList.getProductList()
    let classActive = ''
    let textActive = ''

    if (store.indexOf(this._data.id) === -1) {
      textActive = 'Add to cart'
      classActive = `button`

    } else {
      textActive = 'Remove from cart'
      classActive = 'button_active'
    }

    const prodItem = <HTMLDivElement>document.createElement('div');
    prodItem.className = 'prod-item';
    const contentWrapper = <HTMLDivElement>document.createElement('div');
    contentWrapper.className = 'content-wrapper'



    contentWrapper.innerHTML = `<div class="prod-img-wrapper">                                  
                                  <img class="prod-img" src=${this._data.image} alt=${this._data.category}>
                                  </div>
                                  <div class="title-wrapper">
                                    <p class="item-title">${this._data.title.length > 50 ? this._data.title.split('').splice(0, 50).join('') + '...' : this._data.title}</p>          
                                    <div class="item-rating-wrapper">
                                      <img class="star" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="">
                                        <div class="item-rating">${this._data.rating.rate}</div>
                                        <div class="reviews">${this._data.rating.count} Reviews</div>
                                        
                                        <div class="item-price">$ ${this._data.price}</div>
                                    </div>
                                  </div>`
    const buttonWrapper = document.createElement('div')
    buttonWrapper.className = 'button-wrapper';


    const cartHeart = document.createElement('div')
    cartHeart.title = "Add to Favorite"
    let idd: number | string = this._data.id
    idd = 'favoriteProduct-' + idd.toString()

    if (localStorage.getItem(idd)) {
      cartHeart.className = 'card-heart_active'
    } else {
      cartHeart.className = 'card-heart'
    }

    const button = new ButtonMain(textActive, classActive, buttonWrapper, this._data, () => {
      //prod.modal(this._data)                
    })

    button.renderButton();


    prodItem.appendChild(cartHeart);
    prodItem.appendChild(contentWrapper);
    prodItem.appendChild(buttonWrapper);

    cartHeart.addEventListener('click', () => {
      let idd: number | string = this._data.id
      idd = 'favoriteProduct-' + idd.toString()
      if (localStorage.getItem(idd)) {
        cartHeart.className = 'card-heart'
        localStorage.removeItem(idd)

      } else {
        cartHeart.className = 'card-heart_active'
        localStorage.setItem(idd, 'card-heart_active')
      }

    })

    contentWrapper.addEventListener('click', (e) => {
      if (e.currentTarget === contentWrapper) {
        prod.modal(this._data)
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100vh';
      }
    })



    document.querySelector('.cards').appendChild(prodItem);
  }
}


export function callback(): (this: HTMLButtonElement, ev: MouseEvent) => any {
  throw new Error("Function not implemented.");
}

export default ProductCard;

