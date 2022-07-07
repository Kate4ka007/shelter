import IProduct from "./intefaces/IProduct";
import dataProd from '../index';
import ButtonMain from "./buttons/button-main";

class ProductCard {
  _data: IProduct;

  constructor(data: IProduct, callback: () => void) {
    this._data = data
  }

  createCard(): void {
    const prodItem = <HTMLDivElement>document.createElement('div');
    prodItem.className = 'prod-item';
    const contentWrapper = <HTMLDivElement>document.createElement('div');
    contentWrapper.className = 'content-wrapper'
    contentWrapper.innerHTML = `<div class="prod-img-wrapper">
                                  <img class="prod-img" src=${this._data.image} alt=${this._data.category}></div>
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

    const button = new ButtonMain('Add to cart', 'button', buttonWrapper, this._data)
    button.renderButton()
    

    prodItem.appendChild(contentWrapper)
    prodItem.appendChild(buttonWrapper)

    

    /* <div class="item-descb">${this._data.description.split('').splice(0, 80).join('') + '...'}</div> */
    document.querySelector('.root').appendChild(prodItem)
  }
}


export function callback(): (this: HTMLButtonElement, ev: MouseEvent) => any {
  throw new Error("Function not implemented.");
}


export default ProductCard;

