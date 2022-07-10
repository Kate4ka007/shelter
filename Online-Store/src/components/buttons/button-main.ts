import IProduct from "../intefaces/IProduct";
import cartProductList from '../cart/cartList'
import prod from '../../index'
import dataProd from '../../index'

class ButtonMain {  
  _content: string;
  _selector: string;
  _parent: HTMLDivElement;
  _data: IProduct;
  

  constructor(content: string, selector: string, parent: HTMLDivElement, data: any) {    
    this._content = content
    this._selector = selector 
    this._parent = parent
    this._data = data  
  }

  renderButton() {
    const mainBottom = document.createElement('button')
    mainBottom.classList.add(`${this._selector}`)
    mainBottom.textContent = `${this._content}`
    this._parent.appendChild(mainBottom)   


    mainBottom.addEventListener('click', () => {
      console.log(this._data.id)      
      //this.countInCart();
      cartProductList.cartProductList.setProductList(this._data.id)
      this.hangleSetStorage(this)
 
      // JSON.stringify(this._data)
      // if(localStorage.getItem('product')) {

      //   let cart = localStorage.getItem('product')

      // if(cart.includes(this._data.id.toString()))  {
      //   console.log('you have this product')
      // }

      //   let localStor = localStorage.getItem('product')
      //   localStor += JSON.stringify(this._data.id) 
      //   localStorage.setItem('product', localStor)
      // } else {
      //   localStorage.setItem('product', JSON.stringify(this._data.id))
      // }    
      
      
      console.log(this._data)
    })
  }

  countInCart() {
    if(typeof this._data === 'number') {
      this._data++
    }
  }


  hangleSetStorage(el: this) {
    console.log(el)
  }
}

export default ButtonMain;

