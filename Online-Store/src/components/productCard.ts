import IProduct from "./intefaces/IProduct";
import dataProd from '../index';

class ProductCard {
  _data: IProduct;

  constructor(data: IProduct, callback: ()=> void) {
    this._data = data
  }

  createCard(): void {
    const prodItem = <HTMLElement>document.createElement('div');
    prodItem.className = 'prod-item';
    prodItem.innerHTML = `<div class="prod-img-wrapper"><img class="prod-img" src=${this._data.image} alt=${this._data.category}></div>
          <p class="item-title">${this._data.title}</p>
          <div class="item-descb">${this._data.description.split('').splice(0, 80).join('') + '...'}</div>
          <div class="item-rating-wrapper"><img class="star" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt=""><div class="item-rating">${this._data.rating.rate}</div></div>
          <div class="item-price">$ ${this._data.price}</div>`
    const butItem = document.createElement('button')
    butItem.classList.add('item-button')
    butItem.innerHTML = `<img class="item-cart" src="https://cdn-icons-png.flaticon.com/512/3523/3523885.png" alt="">ADD TO CART`
    butItem.addEventListener('click', callback())
    prodItem.appendChild(butItem)
    document.body.appendChild(prodItem)
  }

}



/*     dataProd.forEach((data: IProduct) => {  
      const card = new ProductCard(data, callback);
      console.log(data)
      // card.createCard()
    }) */


export function callback(): (this: HTMLButtonElement, ev: MouseEvent) => any {
  throw new Error("Function not implemented.");
}


export default  ProductCard;

