import IProduct from "../interfaces/IProduct";
import cartProductList from '../cart/cartList';
import { listner } from "../../index";
import IButtonMain from "./interfaces/IButtonMain";

class ButtonMain implements IButtonMain {
  content: string;

  selector: string;

  parent: HTMLDivElement;

  data: IProduct;

  constructor(content: string, selector: string, parent: HTMLDivElement, data?: IProduct, callback?: () => void) {
    this.content = content
    this.selector = selector
    this.parent = parent
    this.data = data
  }

  renderButton(): void {
    const mainBottom = document.createElement('button')
    mainBottom.classList.add(`${this.selector}`)
    mainBottom.textContent = `${this.content}`
    this.parent.appendChild(mainBottom)

    mainBottom.addEventListener('click', () => {      
      this.hangleSetStorage(this, this.data); 
      listner() 
    })
  }

  hangleSetStorage(el: this, data: IProduct): void {
    const { addProduct, prdList } = cartProductList.cartProductList.setProductList(data.id);   
    if (addProduct) {
      el.selector = 'button_active'
      el.content = 'Remove from cart'
      el.parent.innerHTML = ''
      el.renderButton()

    } else {
      el.selector = 'card-product__button'
      el.content = 'Add to cart'
      el.parent.innerHTML = ''
      el.renderButton()
    }    
  }
}

export default ButtonMain;
