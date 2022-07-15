import IProduct from "../intefaces/IProduct";
import cartProductList from '../cart/cartList';

class ButtonMain {
  _content: string;
  _selector: string;
  _parent: HTMLDivElement;
  _data: IProduct;

  constructor(content: string, selector: string, parent: HTMLDivElement, data: any, callback?: () => void) {
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
      this.hangleSetStorage(this, this._data);  
    })
  }


  hangleSetStorage(el: this, _data: IProduct) {
    const { addProduct, prdList } = cartProductList.cartProductList.setProductList(_data.id);
    if (addProduct) {
      el._selector = 'button_active'
      el._content = 'Remove from cart'
      el._parent.innerHTML = ''
      el.renderButton()

    } else {
      el._selector = 'button'
      el._content = 'Add to cart'
      el._parent.innerHTML = ''
      el.renderButton()

    }
  }
}

export default ButtonMain;

