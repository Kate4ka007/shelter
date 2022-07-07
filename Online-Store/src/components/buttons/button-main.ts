import IProduct from "../intefaces/IProduct";

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
      this.countInCart()
      
      console.log(this._data)
    })
  }

  countInCart() {
    if(typeof this._data === 'number') {
      this._data++
    }
  }
}

export default ButtonMain;

